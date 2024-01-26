import React, {SetStateAction, useEffect, useState} from 'react';
import generateTimeList from "../utils/generateTimeList";
import createDateWithCustomTime from "../utils/createDateWithCustomTime";

interface IUseTimeList {
    (startTime: Date,
     finishTime: Date,
     step: number,
    ): [string[], React.Dispatch<SetStateAction<string[]>>]
}

const UseTimeList: IUseTimeList = (startTime,finishTime, step) => {
    const [timeList, setTimeList] = useState<string[]>([]);
    useEffect(() => {
        setTimeList(generateTimeList(startTime, finishTime, step));
    }, [startTime]);

    return [timeList, setTimeList]
};

export default UseTimeList;