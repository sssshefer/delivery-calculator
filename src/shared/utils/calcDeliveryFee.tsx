import React from 'react';

interface IProps {
    (cartValue: number,
    deliveryTime: Date,
    deliveryDistance: number,
    numberOfItems: number):number
}

const calcDeliveryFee:IProps = (cartValue,deliveryTime,deliveryDistance,numberOfItems) => {
    let deliveryFee = 0;

    deliveryFee += calcCartValueFee(cartValue)
    deliveryFee += calcDistanceFee(deliveryDistance)
    deliveryFee += calcItemSurcharge(numberOfItems)
    deliveryFee += calcBulkFee(numberOfItems)

    if (cartValue >= 200) {
        return 0
    }
    const rushMultiplier = isFridayRush(deliveryTime) ? 1.2 : 1;
    deliveryFee *= rushMultiplier;

    deliveryFee = Math.min(15, deliveryFee)

    return deliveryFee
};

function calcCartValueFee(cartValue: number):number {
    let totalFee = 0;
    if (cartValue < 10) {
        totalFee = 10 - cartValue;
    }
    return totalFee
}

function calcDistanceFee(deliveryDistance: number):number {
    let totalFee = 2;
    const distanceFeeStep = 500;
    const distanceFeeStart = 1000;
    const adjustedDistance:number = Math.max(deliveryDistance, distanceFeeStart);

    const distanceFee = 1;
    totalFee += Math.ceil((adjustedDistance - distanceFeeStart) / distanceFeeStep) * distanceFee;
    return totalFee
}

function calcItemSurcharge(numberOfItems: number):number {
    const itemSurchargeRate = 0.5;
    const thresholdForSurcharge = 4;

    if (numberOfItems < thresholdForSurcharge) {
        return 0;
    }

    const surchargeQuantity:number = numberOfItems - thresholdForSurcharge;
    return surchargeQuantity * itemSurchargeRate;
}

function calcBulkFee(numberOfItems: number):0|1.2 {
    const bulkFeeRate = 1.2;
    const thresholdForBulkFee = 12;

    if (numberOfItems <= thresholdForBulkFee) {
        return 0;
    }

    return bulkFeeRate;
}

function isFridayRush(deliveryTime: Date):boolean {
    const day:string = deliveryTime.toLocaleString('en-US', {weekday: 'long'});
    const hour:number = deliveryTime.getHours();

    return day.toLowerCase() === 'friday' && hour >= 15 && hour < 19;
}

export default calcDeliveryFee;