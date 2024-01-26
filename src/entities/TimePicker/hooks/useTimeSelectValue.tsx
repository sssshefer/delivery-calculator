import React, {useEffect, useState} from 'react';
import formatDateForTimeList from "../utils/formatDateForTimeList";


const useTimeSelectValue = (deliveryTime: Date): string => {
    const [value, setValue] = useState('')

    useEffect(() => {
        setValue(formatDateForTimeList(deliveryTime))
    }, [deliveryTime])
    return value
};

export default useTimeSelectValue;