import React, {useEffect, useState} from 'react';
import {finishDeliveryTime,} from "../constants/finishDeliveryTime";
import {getEarliestDeliveryTime} from "../../../shared/utils/getMinDeliveryTime";
import {minDeliveryDelay} from "../constants/minDeliveryDelay";
import {deliveryTimeStep} from "../constants/deliveryTimeStep";
import {startDeliveryTime} from "../constants/startDeliveryTime";

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

