import React, {useEffect, useState} from 'react';
import generateTimeList from "../utils/generateTimeList";

interface IUseTimeList {
    (startTime: Date,
     finishTime: Date,
     step: number,
    ): string[]
}

const UseTimeList: IUseTimeList = (startTime, finishTime, step) => {
    const [timeList, setTimeList] = useState<string[]>([]);
    useEffect(() => {
        setTimeList(generateTimeList(startTime, finishTime, step));
    }, [startTime]);

    return timeList
};

export default UseTimeList;