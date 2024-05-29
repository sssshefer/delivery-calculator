import React, {useEffect, useState} from 'react';
import extractHoursAndMinutesFromDate from "../utils/extractHoursAndMinutesFromDate";


const useTimeSelectValue = (time: Date): string => {
    const [value, setValue] = useState('')

    useEffect(() => {
        setValue(extractHoursAndMinutesFromDate(time))
    }, [time])
    return value
};

export default useTimeSelectValue;