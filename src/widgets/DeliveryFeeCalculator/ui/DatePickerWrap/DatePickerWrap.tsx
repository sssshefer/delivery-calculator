import React, {Dispatch, FC, SetStateAction} from 'react';
import cl from "./DatePickerWrap.module.scss";
import DatePicker from "../../../../entities/DatePicker/DatePicker";
import TimeInput from "../../../../entities/TimeInput/TimeInput";
interface props{
    setDeliveryTime:React.Dispatch<React.SetStateAction<Date>>,
    deliveryTime:Date,
}
const DatePickerWrap:FC<props> = ({setDeliveryTime, deliveryTime}) => {
    return (
        <div className={cl.wrap}>
            <div className={cl.title}>Select delivery time</div>
            <div className={cl.selectsWrap}>
                <DatePicker setDeliveryTime={setDeliveryTime}/>
                <TimeInput deliveryTime={new Date(deliveryTime)} setDeliveryTime={setDeliveryTime}/>
            </div>
        </div>
    );
};

export default DatePickerWrap;