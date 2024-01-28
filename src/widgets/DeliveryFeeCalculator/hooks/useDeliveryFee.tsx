import React, {useEffect, useState} from 'react';
import calcDeliveryFee from "../utils/calcDeliveryFee";
interface IUseDeliveryFee {
    (cartValue: number,
    deliveryTime: Date,
    deliveryDistance: number,
    numberOfItems: number):number
}
const useDeliveryFee:IUseDeliveryFee = (cartValue, deliveryTime, deliveryDistance, numberOfItems) => {
    const [deliveryFee, setDeliveryFee] = useState<number>(0)
    useEffect(() => {
        setDeliveryFee(calcDeliveryFee(cartValue, deliveryTime, deliveryDistance, numberOfItems))
    }, [cartValue, deliveryTime, deliveryDistance, numberOfItems])

    return deliveryFee;
};

export default useDeliveryFee;