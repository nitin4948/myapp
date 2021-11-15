import React, { useEffect } from "react";
import { Text } from "../atoms/Text";
import { Image } from "../atoms/Image";
import { HyperLink } from "../atoms/HyperLink";
import styles from './molecules.module.css';

export const ListComponent = function({
    title,
    author,
    src,
    isbn
}){

    return(
        <div className={styles.list}>
          <Image
            src={src}
            style={{width: "100px"}}
          />
          <div>
            <Text
              child={
                <HyperLink 
                  to={{pathname: 'details/'+isbn, state:{ asd: "asdasd"}}}
                  child={title}
                  style={{fontSize: "20px", color: "#000"}}
                />
              }
            />
            <Text
              child={author}
              style={{marginTop: "20px"}}
            />          
          </div>
        </div>
    )
}