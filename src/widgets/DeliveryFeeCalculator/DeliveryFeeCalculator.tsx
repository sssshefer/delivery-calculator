import React, {FC, useEffect, useRef, useState} from 'react';
import cl from './DeliveryFeeCalculator.module.scss'
import PositiveNumberInput from "../../entities/PositiveNumberInput/PositiveNumberInput";
import PositiveIncDecInput from "../../entities/PositiveIncDecInput/PositiveIncDecInput";
import DatePicker from "../../entities/DatePicker/DatePicker";
import TimeInput from "../../entities/TimeInput/TimeInput";
import DeliveryFee from "../../entities/DeliveryFee/DeliveryFee";
import {deliveryTimeStep, minDeliveryDelay} from "./constants/constants";
import PositiveNumberInputWrap from "./ui/PositiveNumberInputWrap/PositiveNumberInputWrap";
import PositiveIncDecInputWrap from "./ui/PositiveIncDecInputWrap/PositiveIncDecInputWrap";
import DatePickerWrap from "./ui/DatePickerWrap/DatePickerWrap";
import DeliveryFeeWrap from "./ui/DeliveryFeeWrap/DeliveryFeeWrap";

const DeliveryFeeCalculator: FC = () => {
    const [cartValue, setCartValue] = useState<number>(0)
    const [deliveryDistance, setDeliveryDistance] = useState<number>(0)
    const [numberOfItems, setNumberOfItems] = useState<number>(0)
    const [deliveryTime, setDeliveryTime] = useState<Date>(new Date())

    const [deliveryFee, setDeliveryFee] = useState<number>(0)

    useEffect(() => {
        //Smallest delivery may vary from minDeliveryDelay to (minDeliveryDelay + deliveryTimeStep)
        setDeliveryTimeToEarliest(minDeliveryDelay, deliveryTimeStep)
    }, [])

    function setDeliveryTimeToEarliest(minDeliveryDelay: number, deliveryTimeStep: number): void {
        const now = new Date();
        const minutesToNextStep = deliveryTimeStep - (now.getMinutes() % deliveryTimeStep)
        const delay = minDeliveryDelay + minutesToNextStep;

        now.setMinutes(now.getMinutes() + delay, 0, 0)
        setDeliveryTime(now)
    }

    return (
        <div className={cl.wrap}>
            <h1 className={`${cl.title} `}>Delivery Fee Calculator</h1>
            <p className={cl.subtitle}>Calculate a fee for your delivery</p>
            <form>
                <div className={cl.numberInputsWrap}>
                    <PositiveNumberInputWrap title={"Cart Value"} units={'€'}>
                        <PositiveNumberInput dataTestId={"cartValue"} value={cartValue} setValue={setCartValue}/>
                    </PositiveNumberInputWrap>

                    <PositiveNumberInputWrap title={"Delivery Distance"} units={'m'}>
                        <PositiveNumberInput dataTestId={"deliveryDistance"} value={deliveryDistance}
                                             setValue={setDeliveryDistance}/>
                    </PositiveNumberInputWrap>

                    <PositiveIncDecInputWrap title={"Number of Items"}>
                        <PositiveIncDecInput onClick={setNumberOfItems}
                                             dataTestId={"numberOfItems"}
                                             value={numberOfItems}/>
                    </PositiveIncDecInputWrap>
                </div>
                <DatePickerWrap setDeliveryTime={setDeliveryTime} deliveryTime={deliveryTime}/>
                <DeliveryFeeWrap title={"Your final delivery fee"}>
                    <DeliveryFee deliveryFee={deliveryFee}
                                 numberOfItems={numberOfItems} cartValue={cartValue}
                                 deliveryTime={deliveryTime}
                                 deliveryDistance={deliveryDistance}
                                 setDeliveryFee={setDeliveryFee}/>
                </DeliveryFeeWrap>
            </form>

        </div>
    );
};

export default DeliveryFeeCalculator;