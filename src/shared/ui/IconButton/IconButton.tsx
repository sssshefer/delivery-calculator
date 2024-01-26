import React, {FC, ReactChildren} from 'react';
import cl from './IconButton.module.scss'

interface ISmallActionButton
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
    children: React.ReactNode,
    className?: string
}

const IconButton = ({onClick, children, className, ...otherProps}: ISmallActionButton) => {

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        onClick(e)
    }

    return (
        <button onClick={(e) => handleClick(e)} className={`${cl.button} ${className}`} {...otherProps}>
            <div>{children}</div>
        </button>
    );
};

export default IconButton;