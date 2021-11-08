import React, { useEffect, Link} from "react";
import styles from './atoms.module.css';

export const Image  = function({
    style,
    child,
    src
}){

    return(
        <img 
            style={style}
            src={src}
        />
    )
}