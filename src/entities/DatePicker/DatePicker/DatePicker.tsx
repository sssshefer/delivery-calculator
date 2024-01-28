import React, {Dispatch, SetStateAction} from 'react';
import {dayNames} from "../constant/dayNames";
import {getNextDays} from "../utils/getNextDays";

interface IDatePicker extends React.SelectHTMLAttributes<HTMLSelectElement>  {
    setTime: Dispatch<SetStateAction<Date>>
    startDate: Date,
    currentDate: Date,
    numberOfShownDays: number,
    dataTestId:string
}

const DatePicker = ({setTime, startDate, currentDate, numberOfShownDays, dataTestId, ...otherSelectProps}: IDatePicker,) => {
    const currentStartDaysDelta = currentDate.getDate() - startDate.getDate()

    const handleChange = (days: number) => {
        const selectedTime = getNextDays(days, startDate)
        setTime(selectedTime)
    }

    return (
        <select
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleChange(Number(e.target.value))}
                value={currentStartDaysDelta} data-test-id={dataTestId} {...otherSelectProps}>
            <option value={0}>Today</option>
            <option value={1}>Tomorrow</option>
            {[...Array(numberOfShownDays - 2)].map((i, index) =>
                <option value={index + 2}>
                    {dayNames[getNextDays(index + 2, startDate).getDay()] + ' - ' + getNextDays(index + 2, startDate).getDate()}
                </option>
            )}
        </select>
    );
};

export default DatePicker;