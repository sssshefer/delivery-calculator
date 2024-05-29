import {getNextDays} from "./getNextDays";

test('4 days since 1 June 2020', () => {
    expect(getNextDays(4, new Date(2020, 5, 1, 0, 0, 0)))
        .toStrictEqual(new Date(2020, 5, 5, 0, 0, 0));
});

test('Month breakpoint', () => {
    expect(getNextDays(6, new Date(2019, 5, 28, 0, 0, 0)))
        .toStrictEqual(new Date(2019, 6, 4, 0, 0, 0));
});

test('More than 1 month change', () => {
    expect(getNextDays(60, new Date(2019, 5, 28, 0, 0, 0)))
        .toStrictEqual(new Date(2019, 7, 27, 0, 0, 0));
});

test('Year breakpoint', () => {
    expect(getNextDays(5, new Date(2019, 11, 29, 0, 0, 0)))
        .toStrictEqual(new Date(2020, 0, 3, 0, 0, 0));
});