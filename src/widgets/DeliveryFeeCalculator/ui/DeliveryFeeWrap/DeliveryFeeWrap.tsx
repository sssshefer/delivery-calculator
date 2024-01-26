import React, {FC, ReactNode} from 'react';
import cl from "./DeliveryFeeWrap.module.scss";
interface IDeliveryFeeWrap{
    title:string,
    children:ReactNode
}
const DeliveryFeeWrap = ({title, children}:IDeliveryFeeWrap) => {
    return (
        <div className={cl.wrap}>
            {title}
            <span className={cl.valueWrap}>
                {children} €
            </span>
        </div>
    );
};

export default DeliveryFeeWrap;