import React, {FC, useState} from 'react';
import cl from './DeliveryFeeCalculator.module.scss'
import PositiveNumberInput from "../../../entities/PositiveNumberInput";
import PositiveIncDecInput from "../../../entities/PositiveIncDecInput";
import PositiveNumberInputWrap from "../ui/PositiveNumberInputWrap/PositiveNumberInputWrap";
import PositiveIncDecInputWrap from "../ui/PositiveIncDecInputWrap/PositiveIncDecInputWrap";
import TimeAndDatePickerWrap from "../ui/TimeAndDatePickerWrap/TimeAndDatePickerWrap";
import DeliveryFeeWrap from "../ui/DeliveryFeeWrap/DeliveryFeeWrap";
import {useDeliveryTime} from "../hooks/useDeliveryTime";
import useDeliveryFee from "../hooks/useDeliveryFee";

const DeliveryFeeCalculator: FC = () => {
    const [cartValue, setCartValue] = useState<number>(0)
    const [deliveryDistance, setDeliveryDistance] = useState<number>(0)
    const [numberOfItems, setNumberOfItems] = useState<number>(0)
    const [deliveryTime, setDeliveryTime] = useDeliveryTime()

    const deliveryFee = useDeliveryFee(cartValue, deliveryTime, deliveryDistance, numberOfItems)

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
                <TimeAndDatePickerWrap title={"Select delivery Time"} deliveryTime={deliveryTime}
                                       setDeliveryTime={setDeliveryTime}/>
            </form>
            <DeliveryFeeWrap title={"Delivery Fee"}>
                {deliveryFee}
            </DeliveryFeeWrap>
        </div>
    );
};

export default DeliveryFeeCalculator;