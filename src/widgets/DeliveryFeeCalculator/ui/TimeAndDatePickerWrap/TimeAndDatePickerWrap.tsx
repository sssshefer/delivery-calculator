import React, {Dispatch, FC, SetStateAction} from 'react';
import cl from "./TimeAndDatePickerWrap.module.scss";
import DatePicker from "../../../../entities/DatePicker/DatePicker";
import TimePicker from "../../../../entities/TimePicker/TimePicker";

interface ITimeAndDatePickerWrap {
    title: string,
    deliveryTime: Date,
    setDeliveryTime: React.Dispatch<React.SetStateAction<Date>>
}

const TimeAndDatePickerWrap = ({title, deliveryTime, setDeliveryTime,}: ITimeAndDatePickerWrap) => {
    return (
        <div className={cl.wrap}>
            <div className={cl.title}>{title}</div>
            <div className={cl.selectsWrap}>
                <DatePicker setTime={setDeliveryTime} startDate={new Date()} currentDate={deliveryTime}/>
                <TimePicker deliveryTime={deliveryTime} setDeliveryTime={setDeliveryTime}/>
            </div>
        </div>
    );
};

export default TimeAndDatePickerWrap;