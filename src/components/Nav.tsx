import classes from '../styles/nav.module.css';
import {Link} from "react-router-dom";


export interface SetVisible {
    change: () => void;
}

export const Nav = ({change}: SetVisible) => {
    return (
            <div className={classes.nav__container}>
                <Link onClick={change} to='/new-add'>
                    Dodaj ogłoszenie
                </Link>
            </div>
    )
}