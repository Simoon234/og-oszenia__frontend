import {Link} from "react-router-dom";
import {Btn} from "../common/Btn";
import classes from '../../styles/header.module.css';
import {SearchBar} from "./SearchBar";
import React from "react";

export const Desktop = () => {
    return (
        <>
            <Link to='/new-add'>
                <Btn text='Add new product' style={classes.add__new__product}/>
            </Link>
            <SearchBar/>
        </>
    )
}