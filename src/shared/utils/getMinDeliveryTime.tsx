import createDateWithCustomTime from "../../entities/TimePicker/utils/createDateWithCustomTime";
export function getEarliestDeliveryTime(date: Date, minDeliveryDelay: number, deliveryTimeStep: number,
                                        startDeliveryTime: string, finishDeliveryTime: string): Date {
    const startTimeForDate = createDateWithCustomTime(startDeliveryTime, date)
    if (!isToday(date)) {
        return startTimeForDate;
    }

    let earliest = calcClosestPossibleDeliveryTime(new Date(), deliveryTimeStep, minDeliveryDelay)

    const finishTimeForDate = createDateWithCustomTime(finishDeliveryTime, date)

    if (tooLateForDelivery(earliest, finishTimeForDate)) {
        const nextDayStartTime = new Date(startTimeForDate.setDate(startTimeForDate.getDate() + 1));
        return nextDayStartTime;
    }

    if (tooEarlyForDelivery(earliest, startTimeForDate)) {
        return startTimeForDate
    }

    return earliest
}

function isToday(date: Date): boolean {
    return date.getDate() === new Date().getDate()
}

function calcClosestPossibleDeliveryTime(date: Date, deliveryTimeStep: number, minDeliveryDelay: number) {
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