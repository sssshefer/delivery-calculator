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
        const deliveryFee= calcDeliveryFee(cartValue, deliveryTime, deliveryDistance, numberOfItems)
        setDeliveryFee(deliveryFee)
    }, [cartValue, deliveryTime, deliveryDistance, numberOfItems])

    return deliveryFee;
};

export default useDeliveryFee;