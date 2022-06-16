import classes from '../styles/succes.module.css'
import {changeLocation} from "../utlis/changeLocation";

interface IdAd {
    id: string;
}

export const Success = ({id}: IdAd) => {
    return (
        <div className='success'>
            <p style={{zIndex: '1'}}>Sukces. Po zaakceptowaniu ogłoszenia przez Admina, ogłoszenia pojawi się na mapie. : {id}</p>
            <button className={classes.btn} onClick={changeLocation}>Dodaj nowe ogłoszenie</button>
        </div>
    )
}