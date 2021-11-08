import React, { useEffect, } from "react";
import styles from './orgasm.module.css';
import { Text } from '../atoms/Text';

export const HomePageFooter = function({
    paginationResult,
    selectedPagination,
    recorPerPage,
    setSelectedPagination
}){

    function getResult(){ 
        const result = [];
        let bookDetailsArr = paginationResult;
        
        if(bookDetailsArr && bookDetailsArr && bookDetailsArr.length){
            const pages = Math.ceil(bookDetailsArr.length / recorPerPage);
            for(let i = 1; i <= pages; i++){
                result.push(
                    <Text 
                        style={
                            i == selectedPagination ? 
                            {  fontWeight: 600, fontSize: "20px", padding: "10px", cursor: "pointer", margin: "0 5px" } :
                            {  fontSize: "18px", padding: "10px", cursor: "pointer", margin: "0 5px" }
                        } 
                        onClick={() =>{setSelectedPagination(i)}}
                        child={i}
                    />
                );
            }
        }
        return result;
    }
    
    return(
        <main className={styles.pagination}>
            { getResult() }           
        </main>
    )
}