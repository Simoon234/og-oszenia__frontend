import React from 'react';

interface Props {
    text: string;
    style: string;
}

export const Btn = ({text, style}: Props) => {
    return <button className={style}>{text}</button>
};