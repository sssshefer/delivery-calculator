import React from 'react';

interface ICalcDeliveryFee {
    (cartValue: number,
     deliveryTime: Date,
     deliveryDistance: number,
     numberOfItems: number): number
}

const calcDeliveryFee: ICalcDeliveryFee = (cartValue, deliveryTime, deliveryDistance, numberOfItems) => {
    if (isExpensiveOrderDiscount(cartValue)) {
        return 0
    }
    let deliveryFee = 0;
    deliveryFee += calcCartValueFee(cartValue)
    deliveryFee += calcDistanceFee(deliveryDistance)
    deliveryFee += calcItemSurcharge(numberOfItems)
    deliveryFee += calcBulkFee(numberOfItems)

    const rushMultiplier = isFridayRush(deliveryTime) ? 1.2 : 1;
    deliveryFee *= rushMultiplier;

    deliveryFee = Math.min(15, deliveryFee)

    return Number(deliveryFee.toFixed(2))
};

function isExpensiveOrderDiscount(cartValue: number): boolean {
    return cartValue >= 200
}

function calcCartValueFee(cartValue: number): number {
    let totalFee = 0;
    if (cartValue < 10) {
        totalFee = 10 - cartValue;
    }
    return totalFee
}

function calcDistanceFee(deliveryDistance: number): number {
    let totalFee = 2;
    const distanceFeeStep = 500;
    const distanceFeeStart = 1000;
    const adjustedDistance = Math.max(deliveryDistance, distanceFeeStart);

    const distanceFee = 1;
    totalFee += Math.ceil((adjustedDistance - distanceFeeStart) / distanceFeeStep) * distanceFee;
    return totalFee
}

function calcItemSurcharge(numberOfItems: number): number {
    const itemSurchargeRate = 0.5;
    const thresholdForSurcharge = 4;

    if (numberOfItems < thresholdForSurcharge) {
        return 0;
    }

    const surchargeQuantity = numberOfItems - thresholdForSurcharge;
    return surchargeQuantity * itemSurchargeRate;
}

function calcBulkFee(numberOfItems: number): 0 | 1.2 {
    const bulkFeeRate = 1.2;
    const thresholdForBulkFee = 12;

    if (numberOfItems <= thresholdForBulkFee) {
        return 0;
    }

    return bulkFeeRate;
}

function isFridayRush(deliveryTime: Date): boolean {
    const day = deliveryTime.toLocaleString('en-US', {weekday: 'long'});
    const hours = deliveryTime.getHours();
    const minutes = deliveryTime.getMinutes()

    return day.toLowerCase() === 'friday' && (hours >= 15 && hours < 19 || hours == 19 && minutes == 0);
}

export default calcDeliveryFee;