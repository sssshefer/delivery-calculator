import React, {Dispatch, SetStateAction} from 'react';
import useTimeList from "./hooks/useTimeList";
import {finishDeliveryTime} from "../../widgets/DeliveryFeeCalculator/constants/finishDeliveryTime";
import createDateWithCustomTime from "./utils/createDateWithCustomTime";
import useTimeSelectValue from "./hooks/useTimeSelectValue";
import useEarliestTodayDeliveryOfTheDay from "../../widgets/DeliveryFeeCalculator/hooks/useEarliestDeliveryOfTheDay";
import {deliveryTimeStep} from "../../widgets/DeliveryFeeCalculator/constants/deliveryTimeStep";

interface ITimePicker {
    deliveryTime: Date,
    setDeliveryTime: Dispatch<SetStateAction<Date>>,
    dataTestId:string
}

const TimePicker = ({deliveryTime, setDeliveryTime,dataTestId}: ITimePicker) => {
    const value = useTimeSelectValue(deliveryTime)
    const earliestTodayDelivery = useEarliestTodayDeliveryOfTheDay(deliveryTime)
    const timeList = useTimeList(earliestTodayDelivery,
        createDateWithCustomTime(finishDeliveryTime, deliveryTime), deliveryTimeStep,);

    const handleChange = (time: string) => {
        const newDeliveryTime = createDateWithCustomTime(time, deliveryTime)
        setDeliveryTime(newDeliveryTime)
    }

    return (
        <select value={value} name="deliveryTime" id="time"
                onChange={(e) =>
                    handleChange(e.target.value)}
                disabled={timeList.length === 0}
                style={timeList.length === 0 ? {background: 'var(--divideColor)'} : {}}
                data-test-id={dataTestId}
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
