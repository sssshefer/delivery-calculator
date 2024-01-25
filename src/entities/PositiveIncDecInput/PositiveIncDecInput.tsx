import React, {FC} from 'react';
import cl from './PositiveIncDecInput.module.scss'
import SmallActionButton from "../SmallActionButton/SmallActionButton";

interface IPositiveIncDecInput {
    dataTestId: string,
    onClick: (prev: any) => void,
    value: number
}

const PositiveIncDecInput: FC<IPositiveIncDecInput> = ({ dataTestId, onClick, value}) => {
    function handleSubtract() {
        if (value > 0)
            onClick((prev: number) => prev - 1)
    }

    return (
        <div className={cl.wrap}>
            <SmallActionButton onClick={handleSubtract}>-</SmallActionButton>
            <input data-test-id={dataTestId} disabled={true} value={value} type={"number"}/>
            <SmallActionButton onClick={() => onClick((prev: number) => prev + 1)}>+</SmallActionButton>
        </div>
    );
};

export default PositiveIncDecInput;