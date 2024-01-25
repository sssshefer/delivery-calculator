import React, {FC, useEffect} from 'react';
import cl from './DeliveryFee.module.scss'
import calcDeliveryFee from "../../shared/utils/calcDeliveryFee";

interface IDeliveryFee {
    deliveryFee: number,
    cartValue: number,
    deliveryTime: Date,
    deliveryDistance: number,
    numberOfItems: number,
    setDeliveryFee: React.Dispatch<number>
}

const DeliveryFee: FC<IDeliveryFee> = ({
                                    deliveryFee,
                                    cartValue,
                                    deliveryTime,
                                    deliveryDistance,
                                    numberOfItems,
                                    setDeliveryFee
                                }) => {
    useEffect(() => {
        setDeliveryFee(Number(calcDeliveryFee(cartValue, deliveryTime, deliveryDistance, numberOfItems) .toFixed(2)))
    }, [cartValue,deliveryTime,deliveryDistance,numberOfItems])





    return (
        <span className={cl.wrap}>
            {deliveryFee}
        </span>
    );
};

export default DeliveryFee;