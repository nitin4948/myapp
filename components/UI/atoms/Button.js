import React, { useEffect, } from "react";
import styles from './atoms.module.css';

export const Button  = function({
    clickEvent,
    value
}){

    return(
        <button 
            onClick={clickEvent} 
            className={styles.filterButtons}
        >
            {value}
        </button>
    )
}