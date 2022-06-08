import classes from '../../styles/error.module.css';


interface ErrorInterface {
    text: string;
}


export const Error = ({text}: ErrorInterface) => {
    return <small className={classes.error}>{text}</small>
}