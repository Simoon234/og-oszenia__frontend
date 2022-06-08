import {useEffect, useState} from "react";
import {Ad} from "types";

import classes from '../styles/single.module.css';

interface AdId {
    id: string;
    counts: number;
}

export const SingleAd = ({id, counts}: AdId) => {
    const [ad, setAd] = useState<Ad | null>(null);

    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3001/ad/${id}`);
            const data = await res.json();
            setAd(data);
        })();
    }, []);


    if (ad === null) {
        return <p>Wczytywanie...</p>
    }

    return (
        <div className={classes.single__box}>
            <h2>Nazwa: {ad.name}</h2>
            <p>Opis: <span>{ad.description}</span></p>
            <p>Cena: <span>{ad.price.toFixed(2)} zł</span></p>
            <p> Link:
                <span><a href={ad.link} target='_blank' rel='noreferrer'>Link do ogłoszenia</a></span>
            </p>
            <p>Liczba wyświetleń: <span>{counts}</span></p>
        </div>
    )
}
