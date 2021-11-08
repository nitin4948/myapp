import React from "react";
import { useLocation,useParams } from 'react-router-dom'
import { DetailsPage } from "../../templates/DetailsPage";
export  const Details = function(){

    const params = useParams();
    let apiresult = sessionStorage.getItem("apiresult");
    apiresult = JSON.parse(apiresult);
    const detailsObj = apiresult.data.filter(value => value.isbn == params.isbn);

    return(
        <div>
            <DetailsPage {...detailsObj[0]}      />
        </div>
    )
} 