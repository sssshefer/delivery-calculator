import calcDeliveryFee from "./calcDeliveryFee";

test('First company test and base example', () => {
    expect(calcDeliveryFee(
        7.9,
        new Date(2024, 0, 15, 13, 0, 0),
        2235,
        4))
        .toBe(7.1);
});

test('Seconds company test', () => {
    expect(calcDeliveryFee(
        20,
        new Date(2021, 10, 21, 13, 0, 0),
        900,
        1))
        .toBe(2);
});

test('Friday Rush', () => {
    expect(calcDeliveryFee(
        7.9,
        new Date(2024, 0, 12, 16, 0, 0),
        2235,
        4))
        .toBe(8.52);
});

test('Without order surcharge', () => {
    expect(calcDeliveryFee(
        11,
        new Date(2024, 0, 15, 13, 0, 0),
        2235,
        4))
        .toBe(5);
});

test('Additional surcharge for five or more items', () => {
    expect(calcDeliveryFee(
        11,
        new Date(2024, 0, 15, 13, 0, 0),
        2235,
        10))
        .toBe(8);
});

test('Additional surcharge for five or more items and friday rush', () => {
    expect(calcDeliveryFee(
        11,
        new Date(2024, 0, 12, 16, 0, 0),
        2235,
        10))
        .toBe(9.6);
});

test('Bulk fee', () => {
    expect(calcDeliveryFee(
        11,
        new Date(2024, 0, 15, 13, 0, 0),
        2235,
        14))
        .toBe(11.2);
});

test('More than 15 delivery cost', () => {
    expect(calcDeliveryFee(
        1,
        new Date(2024, 0, 15, 13, 0, 0),
        2235,
        20))
        .toBe(15);
});

test('High cart value - breakpoint 200', () => {
    expect(calcDeliveryFee(200,
        new Date(2024, 0, 15, 13, 0, 0),
        2235,
        20))
        .toBe(0);
});

test('High cart value - more than 200', () => {
    expect(calcDeliveryFee(210,
        new Date(2024, 0, 15, 13, 0, 0),
        2235,
        20))
        .toBe(0);
});

test('Short delivery distance - less than 1000', () => {
    expect(calcDeliveryFee(
        7.9,
        new Date(2024, 0, 15, 13, 0, 0),
        600,
        4))
        .toBe(4.1);
});


test('Short delivery distance - breakpoint 1000', () => {
    expect(calcDeliveryFee(
        7.9,
        new Date(2024, 0, 15, 13, 0, 0),
        1000,
        4))
        .toBe(4.1);
});

test('1001 delivery distance', () => {
    expect(calcDeliveryFee(
        7.9,
        new Date(2024, 0, 15, 13, 0, 0),
        1001,
        4))
        .toBe(5.1);
});


test('1499 delivery distance breakpoint', () => {
    expect(calcDeliveryFee(
        7.9,
        new Date(2024, 0, 15, 13, 0, 0),
        1499,
        4))
        .toBe(5.1);
});

test('1500 delivery distance breakpoint', () => {
    expect(calcDeliveryFee(
        7.9,
        new Date(2024, 0, 15, 13, 0, 0),
        1500,
        4))
        .toBe(5.1);
});

test('1501 delivery distance breakpoint', () => {
    expect(calcDeliveryFee(
        7.9,
        new Date(2024, 0, 15, 13, 0, 0),
        1501,
        4))
        .toBe(6.1);
});