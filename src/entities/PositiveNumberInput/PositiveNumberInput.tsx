import React, {FC, useState} from 'react';
import cl from './PositiveNumberInput.module.scss'

interface inputProps {
    title: string,
    dataTestId: string,
    className?: string,
    value: number,
    setValue: (value: number) => void,
    units?:string
}

const PositiveNumberInput: FC<inputProps> = ({title, dataTestId,className, value, setValue, units}) => {
    const [showingValue, setShowingValue] = useState<string>(String(value))

    function handleChange(value: string): void {
        //We need showing value in order to handle empty value
        setShowingValue(value)
        setValue(Number(value))
    }

    return (
        <label className={cl.label}>
            <span className={cl.title}>{title}</span>
            <input value={showingValue}
                   onChange={(e: React.ChangeEvent<HTMLInputElement>): void => handleChange(e.currentTarget.value)}
                   data-test-id={dataTestId} type="number" className={`${cl.input} ${className}`} min={0}/>
            <span className={cl.units}>{units}</span>
        </label>
    );
};

export default PositiveNumberInput;