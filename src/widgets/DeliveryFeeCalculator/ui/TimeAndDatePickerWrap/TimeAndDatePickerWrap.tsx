import React from 'react';
import cl from "./TimeAndDatePickerWrap.module.scss";
import DatePicker from "../../../../entities/DatePicker";
import TimePicker from "../../../../entities/TimePicker";
import {numberOfDeliveryDays} from "../../constants/numberOfDeliveryDays";

import {getEarliestDeliveryTime} from "../../utils/getMinDeliveryTime";

import {deliveryTimeListData} from "../../constants/deliveryTimeListData";

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
                <DatePicker setTime={setDeliveryTime} startDate={new Date()} currentDate={deliveryTime}
                            numberOfShownDays={numberOfDeliveryDays} dataTestId={"deliveryTime"}/>
                <TimePicker currentTime={deliveryTime} setCurrentTime={setDeliveryTime} dataTestId={"deliveryTime"}
                            listData = {deliveryTimeListData}
                calcEarliestTime={()=>getEarliestDeliveryTime(deliveryTime, deliveryTimeListData)}/>
            </div>
        </div>
    );
};

export default TimeAndDatePickerWrap;