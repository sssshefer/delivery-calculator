import React, {FC} from 'react';
import cl from './PositiveIncreaseDecreaseInput.module.scss'
import SmallActionButton from "../SmallActionButton/SmallActionButton";

interface inputProps {
    title: string,
    dataTestId: string,
    type: string,
    className?: string,
    onClick: (prev: any) => void,
    value: number
}

const PositiveIncreaseDecreaseInput: FC<inputProps> = ({title, dataTestId, type, className, onClick, value}) => {
    function handleSubtract() {
        if (value > 0)
            onClick((prev: number) => prev - 1)
    }

    return (
        <label className={cl.label}>
            <span className={cl.title}>{title}</span>
            <div className={cl.counter}>
                <SmallActionButton onClick={handleSubtract}>-</SmallActionButton>
                <label className={cl.value} >
                    <input data-test-id={"numberOfItems"} disabled={true} value={value}/>
                </label>

                <SmallActionButton onClick={() => onClick((prev: number) => prev + 1)}>+</SmallActionButton>
            </div>

        </label>
    );
};

export default PositiveIncreaseDecreaseInput;