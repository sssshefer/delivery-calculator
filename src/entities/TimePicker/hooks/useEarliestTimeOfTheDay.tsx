import React, {useEffect, useState} from 'react';


interface IUseEarliestTimeOfTheDay {
    (time: Date,
    calcEarliestTime:()=>Date): Date
}

const useEarliestTimeOfTheDay: IUseEarliestTimeOfTheDay = (time,calcEarliestTime) => {
    const [earliestTimeOfTheDay, setEarliestTimeOfTheDay] = useState(new Date())

    useEffect(() => {
        setEarliestTimeOfTheDay(calcEarliestTime)
    }, [time.getDate()])

    return earliestTimeOfTheDay
};

export default useEarliestTimeOfTheDay;