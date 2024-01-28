import React, {ReactNode} from 'react';
import cl from "./PositiveIncDecInputWrap.module.scss";

interface IPositiveIncDecInputWrap {
    title: string,
    className?: string,
    children:ReactNode
}

const PositiveIncDecInputWrap = ({title, className,children}:IPositiveIncDecInputWrap) => {
    return (
        <div className={`${cl.wrap} ${className}`} >
            <label className={cl.title}>{title}</label>
            <div className={cl.counter}>
                {children}
            </div>
        </div>
    );
};

export default PositiveIncDecInputWrap;