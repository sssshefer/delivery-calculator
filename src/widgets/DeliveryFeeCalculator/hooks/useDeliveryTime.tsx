import React, {useEffect, useState} from 'react';
import {getEarliestDeliveryTime} from "../utils/getEarliestDeliveryTime";
import {deliveryTimeListData} from "../constants/deliveryTimeListData";

export const useDeliveryTime = (): [Date, React.Dispatch<React.SetStateAction<Date>>] => {
    const [deliveryTime, setDeliveryTime] = useState<Date>(new Date())

    useEffect(() => {
        const earliestDeliveryTime = getEarliestDeliveryTime(
            deliveryTime,
            deliveryTimeListData
        );
        setDeliveryTime(earliestDeliveryTime)
    }, [deliveryTime.getDate()])

    return ([deliveryTime, setDeliveryTime]);
};

