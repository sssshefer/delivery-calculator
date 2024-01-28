import React from 'react';
import cl from "./DeliveryFeeWrap.module.scss";

interface IDeliveryFeeWrap{
    title:string,
    children:React.ReactNode
}
const DeliveryFeeWrap = ({title, children}:IDeliveryFeeWrap) => {
    return (
        <div className={cl.wrap}>
            {title}
            <span className={cl.valueWrap} >
                <span data-test-id={"fee"}>{children}</span>€
            </span>
        </div>
    );
};

export default DeliveryFeeWrap;