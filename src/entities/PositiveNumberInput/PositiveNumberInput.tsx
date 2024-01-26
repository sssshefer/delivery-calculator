import React, {FC, useState} from 'react';
import cl from './PositiveNumberInput.module.scss'

interface IPositiveNumberInput
    extends React.InputHTMLAttributes<HTMLInputElement> {
    dataTestId: string,
    value: number,
    setValue: (value: number) => void,
}


const PositiveNumberInput= ({dataTestId, value, setValue,...restProps}:IPositiveNumberInput) => {
    const [showedValue, setShowedValue] = useState<string>(String(value))

    function handleChange(value: string): void {
        //We need showed value in order to show empty input value instead of 0
        setShowedValue(value)
        setValue(Number(value))
    }

    return (
        <input value={showedValue}
               onChange={(e: React.ChangeEvent<HTMLInputElement>): void => handleChange(e.currentTarget.value)}
               data-test-id={dataTestId} type="number" min={0} {...restProps}/>

    );
};

export default PositiveNumberInput;