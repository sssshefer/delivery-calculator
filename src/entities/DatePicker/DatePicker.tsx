import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {dayNames} from "./constant/dayNames";

interface IDatePicker {
    setTime: Dispatch<SetStateAction<Date>>
    startDate:Date,
    currentDate:Date
}

const DatePicker= ({setTime, startDate, currentDate}:IDatePicker) => {
    const [value, setValue] = useState(currentDate.getDate() - startDate.getDate())

    useEffect(()=>{
        setValue(currentDate.getDate() - startDate.getDate())
    },[currentDate])
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
        <select name="deliveryTime"
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleChange(Number(e.target.value))}
                value = {value}
        >
            <option value={0}>Today</option>
            <option value={1}>Tomorrow</option>
            {[...Array(4)].map((i, index) =>
                <option value={index + 2}>
                    {dayNames[getNextDays(index + 2).getDay()] + ' - ' + getNextDays(index + 2).getDate()}
                </option>
            )}
        </select>
    );
};

export default DatePicker;