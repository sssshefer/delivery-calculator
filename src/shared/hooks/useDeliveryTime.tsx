import React, {useEffect, useState} from 'react';
import {deliveryTimeStep, minDeliveryDelay} from "../../widgets/DeliveryFeeCalculator/constants/constants";

export const useDeliveryTime = ():[Date, React.Dispatch<React.SetStateAction<Date>>] => {
    const [deliveryTime, setDeliveryTime] = useState<Date>(new Date())

    useEffect(() => {
        //Smallest delivery may vary from minDeliveryDelay to (minDeliveryDelay + deliveryTimeStep)
        setDeliveryTimeToEarliest(minDeliveryDelay, deliveryTimeStep)
    }, [])

    function setDeliveryTimeToEarliest(minDeliveryDelay: number, deliveryTimeStep: number): void {
        const now = new Date();
        const minutesToNextStep = deliveryTimeStep - (now.getMinutes() % deliveryTimeStep)
        const delay = minDeliveryDelay + minutesToNextStep;

        now.setMinutes(now.getMinutes() + delay, 0, 0)
        setDeliveryTime(now)
    }
    return ([deliveryTime, setDeliveryTime]);
};

