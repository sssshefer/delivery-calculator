import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import formatDateForTimeList from "../../shared/utils/formatDateForTimeList";
import useTimeList from "../../shared/hooks/useTimeList";
import {
    deliveryTimeStep,
    finishDeliveryTime,
    minDeliveryDelay,
    startDeliveryTime
} from "../../widgets/DeliveryFeeCalculator/constants/constants";
import createDateWithCustomTime from "../../shared/utils/createDateWithCustomTime";
import {getEarliestDeliveryTime} from "../../shared/utils/getMinDeliveryTime";
import {useDeliveryTime} from "../../shared/hooks/useDeliveryTime";

interface ITimePicker {
    deliveryTime: Date,
    setDeliveryTime: Dispatch<SetStateAction<Date>>;
}

const TimePicker = ({deliveryTime, setDeliveryTime}: ITimePicker) => {
    const [value, setValue] = useState(formatDateForTimeList(deliveryTime))
    useEffect(() => {
        setValue(formatDateForTimeList(deliveryTime))
    }, [deliveryTime])

    const [ earliestDeliveryForToday,  setEarliestDeliveryForToday] = useDeliveryTime()
    useEffect(()=>{
        setEarliestDeliveryForToday(getEarliestDeliveryTime(deliveryTime,minDeliveryDelay, deliveryTimeStep,
            startDeliveryTime, finishDeliveryTime ))
    },[deliveryTime.getDate()])

    const [timeList, setTimeList] = useTimeList(earliestDeliveryForToday,
        createDateWithCustomTime(finishDeliveryTime, deliveryTime), deliveryTimeStep,);



    const handleChange = (time: string) => {
        const newDeliveryTime = new Date(deliveryTime)
        newDeliveryTime.setMinutes(Number(time.split(':')[1]))
        newDeliveryTime.setHours(Number(time.split(':')[0]))
        setDeliveryTime(newDeliveryTime)
    }

    return (
        <select value={value} name="deliveryTime" id="time"
                onChange={(e) =>
                    handleChange(e.target.value)}
                disabled={timeList.length === 0}
                style={timeList.length === 0 ? {background: 'var(--divideColor)'} : {}}
        >
            {
                timeList.map((time, index) => (
                    <option key={index} value={time}>
                        {time}
                    </option>
                ))
            }
        </select>
    );
};

export default TimePicker;
