import React from 'react';

const formatDateForTimeList = (time:Date):string => {
    return time.toLocaleTimeString('en-Gb', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    })
};

export default formatDateForTimeList;
