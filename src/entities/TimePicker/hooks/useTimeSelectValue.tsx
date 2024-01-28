import React, {useEffect, useState} from 'react';
import formatDateForTimeList from "../utils/formatDateForTimeList";


const useTimeSelectValue = (time: Date): string => {
    const [value, setValue] = useState('')

    useEffect(() => {
        setValue(formatDateForTimeList(time))
    }, [time])
    return value
};

export default useTimeSelectValue;