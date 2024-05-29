import addHoursAndMinutesToDate from "./addHoursAndMinutesToDate";

test('Adding 5 hours and 12 minutes', () => {
    expect(addHoursAndMinutesToDate("5:12", new Date(2020, 5, 1, 0, 0, 0)))
        .toStrictEqual(new Date(2020, 5, 1, 5, 12, 0));
});

test('Adding more than 24 hours', () => {
    expect(addHoursAndMinutesToDate("25:12", new Date(2020, 5, 1, 0, 0, 0)))
        .toStrictEqual(new Date(2020, 5, 2, 1, 12, 0));
});

test('Negative hours and positive minutes', () => {
    expect(addHoursAndMinutesToDate("-1:10", new Date(2020, 5, 1, 0, 0, 0)))
        .toStrictEqual(new Date(2020, 4, 31, 23, 10, 0));
});


test('Negative hours and minutes', () => {
    expect(addHoursAndMinutesToDate("-1:-10", new Date(2020, 5, 1, 0, 0, 0)))
        .toStrictEqual(new Date(2020, 4, 31, 22, 50, 0));
});