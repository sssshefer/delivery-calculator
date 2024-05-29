import extractHoursAndMinutesFromDate from "./extractHoursAndMinutesFromDate";

test('Midnight', () => {
    expect(extractHoursAndMinutesFromDate( new Date(2020, 5, 1, 0, 0, 0)))
        .toBe('00:00');
});

test('Noon', () => {
    expect(extractHoursAndMinutesFromDate( new Date(2020, 5, 1, 12, 0, 0)))
        .toBe('12:00');
});

test('With minutes', () => {
    expect(extractHoursAndMinutesFromDate( new Date(2020, 5, 1, 12, 45, 0)))
        .toBe('12:45');
});

test('With seconds', () => {
    expect(extractHoursAndMinutesFromDate( new Date(2020, 5, 1, 12, 45, 12)))
        .toBe('12:45');
});