import React from 'react';
import extractHoursAndMinutesFromDate from "./extractHoursAndMinutesFromDate";

interface IGenerateTimeList {
    (startTime: Date,
     finishTime: Date,
     step: number,
    ): string[]
}

const generateTodayTimeList: IGenerateTimeList = (startTime, finishDate, step) => {
    const firstListTime = new Date(startTime);
    const options = [];
    const listItem = new Date(firstListTime)
    while (true) {
        if (finishDate < listItem) {
            break
        }

        options.push(extractHoursAndMinutesFromDate(listItem));
        const date = listItem.getDate()
        listItem.setMinutes(listItem.getMinutes() + step);
        if (date != listItem.getDate()) {
            break
        }
    }

    return options;
};

export default generateTodayTimeList;