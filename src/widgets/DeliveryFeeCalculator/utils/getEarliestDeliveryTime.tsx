import createDateWithCustomTime from "../../../entities/TimePicker/utils/createDateWithCustomTime";
import {ITimePickerListData} from "../../../entities/TimePicker";

interface IGetEarliestDeliveryTime {
    (date: Date,
     deliveryListData: ITimePickerListData): Date
}

export const getEarliestDeliveryTime: IGetEarliestDeliveryTime = (date, deliveryListData) => {
    const regularStartTime = createDateWithCustomTime(deliveryListData.regularStartTime, date)
    const regularFinishTime = createDateWithCustomTime(deliveryListData.regularFinishTime, date)

    if (isNotToday(date)) {
        return regularStartTime;
    }

    let earliest = calcDelayedDeliveryTime(new Date(), deliveryListData.timeStep, deliveryListData.minDelay)

    if (tooEarlyForDelivery(earliest, regularStartTime)) {
        return regularStartTime
    }
    if (tooLateForDelivery(earliest, regularFinishTime)) {
        const nextDayRegularStartTime = new Date(regularStartTime.setDate(regularStartTime.getDate() + 1));
        return nextDayRegularStartTime;
    }

    return earliest
}

function isNotToday(date: Date): boolean {
    return date.getDate() !== new Date().getDate()
}

function calcDelayedDeliveryTime(date: Date, deliveryTimeStep: number, minDeliveryDelay: number) {
    const minutesToNextStep = deliveryTimeStep - (date.getMinutes() % deliveryTimeStep)
    const delay = minDeliveryDelay + minutesToNextStep;
    date.setMinutes(date.getMinutes() + delay, 0, 0)
    return date;
}

function tooLateForDelivery(earliest: Date, finishTimeForDate: Date) {
    return earliest > finishTimeForDate
}

function tooEarlyForDelivery(earliest: Date, startTimeForDate: Date) {
    return earliest < startTimeForDate
}