import React from 'react';

const extractHoursAndMinutesFromDate = (time:Date):string => {
    return time.toLocaleTimeString('en-Gb', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    })
};

export default extractHoursAndMinutesFromDate;
