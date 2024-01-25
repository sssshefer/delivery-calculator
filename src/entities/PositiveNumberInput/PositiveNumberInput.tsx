import React, {FC, useState} from 'react';
import cl from './PositiveNumberInput.module.scss'

interface IPositiveNumberInput {
    dataTestId: string,
    value: number,
    setValue: (value: number) => void,
}

const PositiveNumberInput: FC<IPositiveNumberInput> = ({dataTestId,value, setValue}) => {
    const [showingValue, setShowingValue] = useState<string>(String(value))

    function handleChange(value: string): void {
        //We need showing value in order to handle empty value
        setShowingValue(value)
        setValue(Number(value))
    }

    return (

        <input value={showingValue}
               onChange={(e: React.ChangeEvent<HTMLInputElement>): void => handleChange(e.currentTarget.value)}
               data-test-id={dataTestId} type="number" min={0}/>

    );
};

export default PositiveNumberInput;