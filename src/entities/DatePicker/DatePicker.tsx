import React, {Dispatch, SetStateAction} from 'react';
import {dayNames} from "./constant/dayNames";

interface IDatePicker extends React.SelectHTMLAttributes<HTMLSelectElement>  {
    setTime: Dispatch<SetStateAction<Date>>
    startDate: Date,
    currentDate: Date,
    numberOfDeliveryDays: number,
    dataTestId:string
}

const DatePicker = ({setTime, startDate, currentDate, numberOfDeliveryDays, dataTestId, ...otherSelectProps}: IDatePicker,) => {
    const currentStartDaysDelta = currentDate.getDate() - startDate.getDate()
    const getNextDays = (days: number): Date => {
        const nextDay = new Date(startDate)
        nextDay.setDate(nextDay.getDate() + days);
        nextDay.setHours(0, 0, 0, 0)
        return nextDay;
    };

    const handleChange = (days: number) => {
        const selectedTime = getNextDays(days)
        setTime(selectedTime)
    }


    return (
        <select name="datePicker"
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleChange(Number(e.target.value))}
                value={currentStartDaysDelta} data-test-id={dataTestId} {...otherSelectProps}
        >
            <option value={0}>Today</option>
            <option value={1}>Tomorrow</option>
            {[...Array(numberOfDeliveryDays - 2)].map((i, index) =>
                <option value={index + 2}>
                    {dayNames[getNextDays(index + 2).getDay()] + ' - ' + getNextDays(index + 2).getDate()}
                </option>
            )}
        </select>
    );
};

export default DatePicker;