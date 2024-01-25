import React, {Dispatch, FC, SetStateAction} from 'react';
import cl from "./DatePickerWrap.module.scss";
import DatePicker from "../../../../entities/DatePicker/DatePicker";
import TimeInput from "../../../../entities/TimeInput/TimeInput";
interface IDatePickerWrap{
    setDeliveryTime:React.Dispatch<React.SetStateAction<Date>>,
    deliveryTime:Date,
    title:string
}
const DatePickerWrap:FC<IDatePickerWrap> = ({setDeliveryTime, deliveryTime, title}) => {
    return (
        <div className={cl.wrap}>
            <div className={cl.title}>{title}</div>
            <div className={cl.selectsWrap}>
                <DatePicker setDeliveryTime={setDeliveryTime}/>
                <TimeInput deliveryTime={new Date(deliveryTime)} setDeliveryTime={setDeliveryTime}/>
            </div>
        </div>
    );
};

export default DatePickerWrap;