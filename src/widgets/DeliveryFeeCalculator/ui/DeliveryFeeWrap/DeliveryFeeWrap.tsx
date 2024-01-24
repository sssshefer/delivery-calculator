import React, {FC, ReactNode} from 'react';
import cl from "./DeliveryFeeWrap.module.scss";
interface props{
    title:string,
    children:ReactNode
}
const DeliveryFeeWrap:FC<props> = ({title, children}) => {
    return (
        <div className={cl.wrap}>
            <span>{title}</span>
            {children}
        </div>
    );
};

export default DeliveryFeeWrap;