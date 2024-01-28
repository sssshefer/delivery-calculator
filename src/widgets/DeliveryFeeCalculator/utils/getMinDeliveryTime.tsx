import createDateWithCustomTime from "../../../entities/TimePicker/utils/createDateWithCustomTime";

export function getEarliestDeliveryTime(date: Date, minDeliveryDelay: number, deliveryTimeStep: number,
                                        startDeliveryTime: string, finishDeliveryTime: string): Date {
    const regularStartTime = createDateWithCustomTime(startDeliveryTime, date)
    const regularFinishTime = createDateWithCustomTime(finishDeliveryTime, date)

    if (!isToday(date)) {
        return regularStartTime;
    }

    let earliest = calcDelayedDeliveryTime(new Date(), deliveryTimeStep, minDeliveryDelay)

    if (tooEarlyForDelivery(earliest, regularStartTime)) {
        return regularStartTime
    }
    if (tooLateForDelivery(earliest, regularFinishTime)) {
        const nextDayRegularStartTime = new Date(regularStartTime.setDate(regularStartTime.getDate() + 1));
        return nextDayRegularStartTime;
    }

    return earliest
}

function isToday(date: Date): boolean {
    return date.getDate() === new Date().getDate()
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