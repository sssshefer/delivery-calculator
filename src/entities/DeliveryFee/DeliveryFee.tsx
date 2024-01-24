import React, {FC, useEffect} from 'react';
import cl from './DeliveryFee.module.scss'

interface props {
    deliveryFee: number,
    cartValue: number,
    deliveryTime: Date,
    deliveryDistance: number,
    numberOfItems: number,
    setDeliveryFee: React.Dispatch<number>
}

const DeliveryFee: FC<props> = ({
                                    deliveryFee,
                                    cartValue,
                                    deliveryTime,
                                    deliveryDistance,
                                    numberOfItems,
                                    setDeliveryFee
                                }) => {
    useEffect(() => {
        setDeliveryFee(Number(calculateTotalFee().toFixed(2)))
    }, [cartValue,deliveryTime,deliveryDistance,numberOfItems])

    function calculateTotalFee() {
        let deliveryFee = 0;

        deliveryFee += calculateCartValueFee(cartValue)
        console.log(deliveryFee)
        deliveryFee += calculateDistanceFee(deliveryDistance)
        deliveryFee += calculateItemSurcharge(numberOfItems)
        deliveryFee += calculateBulkFee(numberOfItems)

        if (cartValue >= 200) {
            return 0
        }
        const rushMultiplier = isFridayRush(deliveryTime) ? 1.2 : 1;
        deliveryFee *= rushMultiplier;

        deliveryFee = Math.min(15, deliveryFee)

        return deliveryFee
    }

    function calculateCartValueFee(cartValue: number) {
        let totalFee = 0;
        if (cartValue < 10) {
            totalFee = 10-cartValue;
        }
        return totalFee
    }

    function calculateDistanceFee(deliveryDistance: number) {
        let totalFee = 2;
        const distanceFeeStep = 500;
        const distanceFeeStart = 1000;
        const adjustedDistance = Math.max(deliveryDistance, distanceFeeStart);

        const distanceFee = 1;
        totalFee += Math.ceil((adjustedDistance - distanceFeeStart) / distanceFeeStep) * distanceFee;
        return totalFee
    }

    function calculateItemSurcharge(numberOfItems: number) {
        const itemSurchargeRate = 0.5;
        const thresholdForSurcharge = 4;

        if (numberOfItems < thresholdForSurcharge) {
            return 0;
        }

        const surchargeQuantity = numberOfItems - thresholdForSurcharge;
        return surchargeQuantity * itemSurchargeRate;
    }

    function calculateBulkFee(numberOfItems: number) {
        const bulkFeeRate = 1.2;
        const thresholdForBulkFee = 12;

        if (numberOfItems <= thresholdForBulkFee) {
            return 0;
        }

        return bulkFeeRate;
    }

    function isFridayRush(deliveryTime: Date) {
        const day = deliveryTime.toLocaleString('en-US', {weekday: 'long'});
        const hour = deliveryTime.getHours();

        return day.toLowerCase() === 'friday' && hour >= 15 && hour < 19;
    }

    return (
        <span className={cl.wrap}>
            {deliveryFee}
        </span>
    );
};

export default DeliveryFee;