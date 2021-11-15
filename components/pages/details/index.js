import React from "react";
import { useLocation,useParams } from 'react-router-dom'
import { DetailsPage } from "../../templates/DetailsPage";
export  const Details = function(){

    const params = useParams(); console.log(params);
    let apiresult = sessionStorage.getItem("apiresult");
    apiresult = JSON.parse(apiresult);
    const detailsObj = apiresult && apiresult.data && apiresult.data.filter(value => value.isbn == params.isbn);

    return(
        <div className={'detail-page'}>
            {
                detailsObj ? 
                <DetailsPage {...detailsObj[0]}      /> :
                <div>Something went wrong</div>
            }
            
        </div>
    )
} 