import React, {FC, ReactElement, ReactNode} from 'react';
import PositiveNumberInput from "../../../../entities/PositiveNumberInput/PositiveNumberInput";
import cl from "./PositiveNumberInputWrap.module.scss";

interface IPositiveNumberInputWrap {
    title: string,
    className?: string,
    units?: string,
    children: ReactNode
}

const PositiveNumberInputWrap = ({title, className, units, children}:IPositiveNumberInputWrap) => {
    return (
        <div className={`${cl.wrap} ${className}`}>
            <label>{title}</label>

            {children}
            <span className={cl.units}>{units}</span>

        </div>
    );
};

export default PositiveNumberInputWrap;