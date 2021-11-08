import React, { useEffect, } from "react";
import styles from './atoms.module.css';

export const Text  = function({
    style,
    child,
    onClick
}){

    return(
        <div 
            style={style}
            className={styles.normal}
            onClick={onClick}
        >
            {child}
        </div>
    )
}