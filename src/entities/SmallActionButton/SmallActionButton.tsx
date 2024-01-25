import React, {FC, ReactChildren} from 'react';
import cl from './SmallActionButton.module.scss'

interface ISmallActionButton {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
    children: React.ReactNode,
}

const SmallActionButton: FC<ISmallActionButton> = ({onClick, children}) => {

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        onClick(e)
    }

    return (
        <button onClick={(e) => handleClick(e)} className={cl.button}>
            <div>{children}</div>
        </button>
    );
};

export default SmallActionButton;