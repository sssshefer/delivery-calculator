import React from 'react';
import formatDateForTimeList from "./formatDateForTimeList";

interface IGenerateTimeList {
    (startTime: Date,
     finishTime: Date,
     step: number,
    ): string[]
}

const generateTimeList: IGenerateTimeList = (startTime,finishDate, step) => {
    const firstListTime = new Date(startTime);
    const options = [];
    const listItem = new Date(firstListTime)
    while (true) {
        if (finishDate < listItem) {
            break
        }

        options.push(formatDateForTimeList(listItem));
        const day = listItem.getDate()
        listItem.setMinutes(listItem.getMinutes() + step);
        if (day != listItem.getDate()) {
            break
        }
    }

    return options;
};

export default generateTimeList;