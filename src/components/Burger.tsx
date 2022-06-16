import b from '../images/b.png';
import c from '../images/c.png';
import {Nav} from "./Nav";
import React, {useState} from "react";
import {SearchBar} from "./header/SearchBar";
import classes from '../styles/nav.module.css';


export const Burger = () => {
    const [toggle, setToggle] = useState<boolean>(false);
    const open = () => {
        setToggle(prev => !prev);
    }
    return (
        <>
            <SearchBar/>
            <img className={classes.images} onClick={open} src={toggle ? c : b} alt="ikona burgera"/>
            {toggle && <Nav change={() => setToggle(false)}/>}
        </>
    )
}