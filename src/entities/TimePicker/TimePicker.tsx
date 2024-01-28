import React, {Dispatch, SetStateAction} from 'react';
import useTimeList from "./hooks/useTimeList";
import {finishDeliveryTime} from "../../widgets/DeliveryFeeCalculator/constants/finishDeliveryTime";
import createDateWithCustomTime from "./utils/createDateWithCustomTime";
import useTimeSelectValue from "./hooks/useTimeSelectValue";
import useEarliestTodayDeliveryOfTheDay from "../../widgets/DeliveryFeeCalculator/hooks/useEarliestDeliveryOfTheDay";
import {deliveryTimeStep} from "../../widgets/DeliveryFeeCalculator/constants/deliveryTimeStep";

interface ITimePicker extends React.SelectHTMLAttributes<HTMLSelectElement>{
    deliveryTime: Date,
    setDeliveryTime: Dispatch<SetStateAction<Date>>,
    dataTestId:string
}

const TimePicker = ({deliveryTime, setDeliveryTime,dataTestId, ...otherSelectProps}: ITimePicker) => {
    const value = useTimeSelectValue(deliveryTime)
    const earliestTodayDelivery = useEarliestTodayDeliveryOfTheDay(deliveryTime)
    const timeList = useTimeList(earliestTodayDelivery,
        createDateWithCustomTime(finishDeliveryTime, deliveryTime), deliveryTimeStep,);

    const handleChange = (time: string) => {
        const newDeliveryTime = createDateWithCustomTime(time, deliveryTime)
        setDeliveryTime(newDeliveryTime)
    }

    return (
        <select value={value} name="timePicker"
                onChange={(e) =>
                    handleChange(e.target.value)}
                data-test-id={dataTestId} {...otherSelectProps}
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
