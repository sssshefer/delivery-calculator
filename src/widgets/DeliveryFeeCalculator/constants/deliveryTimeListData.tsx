import {ITimePickerListData} from "../../../entities/TimePicker";

export const deliveryTimeListData: ITimePickerListData = {
    timeStep: 15,
    regularStartTime: "11:00",
    regularFinishTime: '21:30',

    //Actual smallest delivery may vary from minDeliveryDelay to (minDeliveryDelay + deliveryTimeStep)
    minDelay: 30,
}


