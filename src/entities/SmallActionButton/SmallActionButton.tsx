import React, {FC, ReactChildren} from 'react';
import cl from './SmallActionButton.module.scss'

interface buttonProps {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
    children: React.ReactNode,
}

const SmallActionButton: FC<buttonProps> = ({onClick, children}) => {

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