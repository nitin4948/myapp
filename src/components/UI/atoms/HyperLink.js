import React, { useEffect } from "react";
import styles from './atoms.module.css';
import { Link } from 'react-router-dom';

export const HyperLink  = function({
    style,
    child,
    to,
}){

    return(
        <Link 
            style={style}
            className={styles.normal}
            to={to}
        >
            {child}
        </Link>
    )
}