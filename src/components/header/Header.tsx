import React, {useEffect, useState} from 'react';
import classes from '../../styles/header.module.css';

import {Link} from "react-router-dom";
import {Burger} from "../Burger";
import {Desktop} from "./Desktop";



export const Header = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleSize = () => {
            if(window.innerWidth < 768) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        }
        handleSize();
        window.addEventListener('resize', handleSize);

        return () => window.removeEventListener('resize', handleSize);

    }, []);

    return (
        <header className={classes.header}>
            <Link to='/'><h1>Ad's</h1></Link>
            {visible ?  <Burger/> : <Desktop/>}
        </header>
    )
}