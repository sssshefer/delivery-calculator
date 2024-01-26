import React from 'react';

const createDateWithCustomTime = (timeString: string, baseDate:Date): Date => {
    const [hours, minutes] = timeString.split(':').map(Number);
    const currentDate = new Date(baseDate);
    currentDate.setHours(hours, minutes, 0, 0);
    return currentDate;
};

export default createDateWithCustomTime;