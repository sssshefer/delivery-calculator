import {getNextDays} from "./getNextDays";

test('4 days since 1 june 2020', () => {
    expect(getNextDays(4, new Date(2020, 6, 1, 0, 0, 0)))
        .toStrictEqual(new Date(2020, 6, 5, 0, 0, 0));
});