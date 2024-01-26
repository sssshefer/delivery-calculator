import React, {useEffect, useState} from 'react';
import {
    deliveryTimeStep,
    finishDeliveryTime,
    minDeliveryDelay,
    startDeliveryTime
} from "../../widgets/DeliveryFeeCalculator/constants/constants";
import {getEarliestDeliveryTime} from "../utils/getMinDeliveryTime";

export const useDeliveryTime = (): [Date, React.Dispatch<React.SetStateAction<Date>>] => {
    const [deliveryTime, setDeliveryTime] = useState<Date>(new Date())

    useEffect(() => {
        const earliestDeliveryTime = getEarliestDeliveryTime(
            deliveryTime,
            minDeliveryDelay,
            deliveryTimeStep,
            startDeliveryTime,
            finishDeliveryTime,

        );
        setDeliveryTime(earliestDeliveryTime)
    }, [deliveryTime.getDate()])

    return ([deliveryTime, setDeliveryTime]);
};

