import React, {FC, useEffect, useRef, useState} from 'react';
import cl from './DeliveryFeeCalculator.module.scss'
import PositiveNumberInput from "../../entities/PositiveNumberInput/PositiveNumberInput";
import PositiveIncreaseDecreaseInput from "../../entities/PositiveIncreaseDecreaseInput/PositiveIncreaseDecreaseInput";
import DateInput from "../../entities/DateInput/DateInput";
import TimeInput from "../../entities/TimeInput/TimeInput";
import DeliveryFee from "../../entities/DeliveryFee/DeliveryFee";

const DeliveryFeeCalculator: FC = () => {
    const [cartValue, setCartValue] = useState<number>(0)
    const [deliveryDistance, setDeliveryDistance] = useState<number>(0)
    const [numberOfItems, setNumberOfItems] = useState<number>(0)
    const [deliveryTime, setDeliveryTime] = useState<Date>(new Date())

    const [deliveryFee, setDeliveryFee] = useState<number>(0)

    useEffect(() => {
        const currentTime = new Date();
        currentTime.setMinutes(currentTime.getMinutes() + 45 - currentTime.getMinutes()%15,0,0)

        setDeliveryTime(currentTime)

    }, [])


    return (
        <div className={cl.container}>
            <h1 className={`${cl.title} `}>Delivery Fee Calculator</h1>
            <p className={cl.subtitle}>
                Calculate a fee for your delivery
            </p>
            <form>
                <div className={cl.numberInputsContainer}>
                    <PositiveNumberInput title={"Cart Value"} dataTestId={"cartValue"} value={cartValue}
                                         setValue={setCartValue} units={'€'}/>
                    <PositiveNumberInput title={"Delivery Distance"} dataTestId={"deliveryDistance"}
                                         value={deliveryDistance} setValue={setDeliveryDistance} units={'m'}/>
                </div>

                <PositiveIncreaseDecreaseInput onClick={setNumberOfItems} title={"Number of Items"}
                                               dataTestId={"numberOfItems"}
                                               type={"number"} value={numberOfItems}/>
                {/* add polyfill */}
                <div className={cl.datePicker}>
                    <div className={cl.dateTitle}>Select delivery time</div>
                    <div className={cl.dateSelectsContainer}>
                        <DateInput setDeliveryTime={setDeliveryTime}/>
                        <TimeInput deliveryTime={new Date(deliveryTime)} setDeliveryTime={setDeliveryTime}/>
                    </div>
                </div>
                <div className={cl.deliveryFeeWrap}>
                   <span>Your final delivery fee</span><DeliveryFee deliveryFee={deliveryFee} numberOfItems={numberOfItems} cartValue={cartValue}
                deliveryTime={deliveryTime} deliveryDistance={deliveryDistance} setDeliveryFee={setDeliveryFee}/>
                </div>
            </form>

        </div>
    );
};

export default DeliveryFeeCalculator;