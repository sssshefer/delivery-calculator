import React, {Dispatch, FC, SetStateAction} from 'react';
import cl from './DateInput.module.css'
import {dayNames} from "./constant/dayNames";

interface options {
    setDeliveryTime: Dispatch<SetStateAction<Date>>
}

const DateInput: FC<options> = ({setDeliveryTime}) => {
    const currentTime = new Date()
    const getNextDays = (days: number): Date => {
        const nextDay = new Date(currentTime)
        nextDay.setDate(nextDay.getDate() + days);
        nextDay.setHours(11, 0, 0, 0)
        return nextDay;
    };

    const handleChange = (days: number) => {
        const selectedTime = getNextDays(days)
        if (selectedTime < new Date()) {
            const currentTime = new Date();
            currentTime.setMinutes(currentTime.getMinutes() + 45 - currentTime.getMinutes()%15)

            setDeliveryTime(currentTime)
        } else
            setDeliveryTime(selectedTime)
    }


    return (

        <select name="deliveryTime"
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleChange(Number(e.target.value))}
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

export default DateInput;