export interface ITimePickerListData {
    timeStep: number,
    regularStartTime: string,
    regularFinishTime: string,

    //Actual smallest delay may vary from minDelay to (minDelay + timeStep)
    minDelay: number
}