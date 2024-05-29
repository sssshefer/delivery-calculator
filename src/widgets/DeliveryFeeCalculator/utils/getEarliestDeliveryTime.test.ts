import {getEarliestDeliveryTime} from "./getEarliestDeliveryTime";

test('Expecting earliest delivery time to be regularStartTime because it is not today', () => {
    expect(getEarliestDeliveryTime(
        new Date(2024, 1, 15, 13, 0, 0),
        {
            timeStep: 15,
            regularStartTime: '11:00',
            regularFinishTime: '23:00',
            minDelay: 30
        }
    ))
        .toStrictEqual(new Date(2024, 1, 15, 11, 0, 0));
});