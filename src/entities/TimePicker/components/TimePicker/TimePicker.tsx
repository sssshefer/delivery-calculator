import React, {Dispatch, SetStateAction} from 'react';
import useTimeList from "../../hooks/useTimeList";
import addHoursAndMinutesToDate from "../../utils/addHoursAndMinutesToDate";
import useTimeSelectValue from "../../hooks/useTimeSelectValue";
import useEarliestTimeOfTheDay from "../../hooks/useEarliestTimeOfTheDay";

interface ITimePicker extends React.SelectHTMLAttributes<HTMLSelectElement> {
    currentTime: Date,
    setCurrentTime: Dispatch<SetStateAction<Date>>,
    dataTestId: string,
    listData: {
        timeStep: number,
        regularStartTime: string,
        regularFinishTime: string,
    }
    calcEarliestTime: () => Date
}

const TimePicker = ({
                        currentTime, setCurrentTime, dataTestId,listData, calcEarliestTime, ...otherSelectProps
                    }: ITimePicker) => {
    const value = useTimeSelectValue(currentTime)

    const earliestTodayTime = useEarliestTimeOfTheDay(currentTime, calcEarliestTime)

    const timeList = useTimeList(earliestTodayTime,
        addHoursAndMinutesToDate(listData.regularFinishTime, currentTime), listData.timeStep,);

    const handleChange = (time: string) => {
        const newTime = addHoursAndMinutesToDate(time, currentTime)
        setCurrentTime(newTime)
    }

    return (
        <select value={value}
                onChange={(e) =>
                    handleChange(e.target.value)}
                data-test-id={dataTestId} {...otherSelectProps}>
            {
                timeList.map((time, index) => (
                    <option key={index} value={time}>
                        {time}
                    </option>
                ))
            }
        </select>
    );
};

export default TimePicker;
