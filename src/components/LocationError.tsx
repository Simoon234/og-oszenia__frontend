import React from 'react';
import classes from '../styles/locationError.module.css';
import {changeLocation} from "../utlis/changeLocation";


export const LocationError = () => {

    return (
        <div className={classes.error__container}>
            <p>Przepraszamy, ale adres, który został wprowadzony nie istnieje. Proszę spróbować jeszcze raz!</p>
            <button className={classes.btn} onClick={changeLocation}>Dodaj ponownie.</button>
        </div>
    )
}