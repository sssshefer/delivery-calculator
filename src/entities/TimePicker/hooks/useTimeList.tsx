import React, {useEffect, useState} from 'react';
import generateTodayTimeList from "../utils/generateTodayTimeList";

interface IUseTimeList {
    (startTime: Date,
     finishTime: Date,
     step: number,
    ): string[]
}

const UseTimeList: IUseTimeList = (startTime, finishTime, step) => {
    const [timeList, setTimeList] = useState<string[]>([]);
    useEffect(() => {
        setTimeList(generateTodayTimeList(startTime, finishTime, step));
    }, [startTime]);

    return timeList
};

export default UseTimeList;