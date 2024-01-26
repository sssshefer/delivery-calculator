import React, {useEffect, useState} from 'react';
import {getEarliestDeliveryTime} from "../../../shared/utils/getMinDeliveryTime";
import {minDeliveryDelay} from "../constants/minDeliveryDelay";
import {deliveryTimeStep} from "../constants/deliveryTimeStep";
import {finishDeliveryTime} from "../constants/finishDeliveryTime";
import {startDeliveryTime} from "../constants/startDeliveryTime";



const useEarliestDeliveryOfTheDay = (deliveryTime: Date): Date => {
    const [earliestTodayDelivery, setEarliestTodayDelivery] = useState(new Date())

    useEffect(() => {
        setEarliestTodayDelivery(getEarliestDeliveryTime(deliveryTime, minDeliveryDelay, deliveryTimeStep,
            startDeliveryTime, finishDeliveryTime))
    }, [deliveryTime.getDate()])

    return earliestTodayDelivery
};

export default useEarliestDeliveryOfTheDay;