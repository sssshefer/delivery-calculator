import generateTodayTimeList from "./generateTodayTimeList";

test('From 10 to 11 hours the same day', () => {
    expect(generateTodayTimeList(
        new Date(2020, 5, 1, 10, 0, 0),
        new Date(2020, 5, 1, 11, 0, 0),
        30))
        .toStrictEqual(['10:00', '10:30', '11:00']);
});

test('From 10 to 15 hours the same day', () => {
    expect(generateTodayTimeList(
        new Date(2020, 5, 1, 10, 0, 0),
        new Date(2020, 5, 1, 15, 0, 0),
        30))
        .toStrictEqual(['10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00']);
});


test('Midnight start time', () => {
    expect(generateTodayTimeList(
        new Date(2020, 5, 1, 0, 0, 0),
        new Date(2020, 5, 1, 3, 0, 0),
        30))
        .toStrictEqual(['00:00', '00:30', '01:00', '01:30', '02:00', '02:30', '03:00']);
});

test('Midnight finish time', () => {
    expect(generateTodayTimeList(
        new Date(2020, 5, 1, 23, 0, 0),
        new Date(2020, 5, 2, 0, 0, 0),
        20))
        .toStrictEqual(['23:00', '23:20', '23:40']);
});

test('Same time different days', () => {
    expect(generateTodayTimeList(
        new Date(2020, 5, 1, 10, 0, 0),
        new Date(2020, 5, 2, 10, 0, 0),
        60))
        .toStrictEqual(['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00']);
});