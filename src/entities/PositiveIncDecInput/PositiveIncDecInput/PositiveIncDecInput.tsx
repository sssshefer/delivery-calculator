import React from 'react';
import cl from './PositiveIncDecInput.module.scss'
import IconButton from "../../../shared/ui/IconButton/IconButton";

interface IPositiveIncDecInput
    extends React.InputHTMLAttributes<HTMLInputElement>  {
    dataTestId: string,
    onClick: (prev: any) => void,
    value: number
}

const PositiveIncDecInput= ({ dataTestId, onClick, value, ...inputOtherProps}:IPositiveIncDecInput) => {
    function handleSubtract() {
        if (value > 0)
            onClick((prev: number) => prev - 1)
    }

    return (
        <div className={cl.wrap}>
            <IconButton onClick={handleSubtract}>-</IconButton>
            <input data-test-id={dataTestId} disabled={true} value={value} type={"number"} {...inputOtherProps}/>
            <IconButton onClick={() => onClick((prev: number) => prev + 1)}>+</IconButton>
        </div>
    );
};

export default PositiveIncDecInput;