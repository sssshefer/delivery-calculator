export const getNextDays = (days: number, fromDate:Date): Date => {
    const nextDay = new Date(fromDate)
    nextDay.setDate(nextDay.getDate() + days);
    nextDay.setHours(0, 0, 0, 0)
    return nextDay;
};