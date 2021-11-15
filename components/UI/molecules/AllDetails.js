import React, { useEffect } from "react";
import { Text } from "../atoms/Text";
import styles from './molecules.module.css';
import { Image } from "../atoms/Image";
export const customStyle = {
    heading: {
        fontWeight: 600,
        marginRight: "10px"
    },
    flex:{
        display: "flex",
        margin: "10px 0"
    },
    mainContainer:{
        display: "flex",
        gap: "30px",
        maxWidth: "500px"
    },
    bannerImage:{
        width: "200px"
    }
}

export const AllDetails = function(props){

    return(
        <div style={customStyle.mainContainer}>
            <div>
                <Image 
                    src={props.image}
                    style={customStyle.bannerImage}
                />
            </div>
            <div>
                <Text
                    child={props.description}
                />
                <div style={customStyle.flex}>
                    <Text
                        child={"Author: "}
                        style={customStyle.heading}
                    />
                    <Text
                        child={props.author}
                    />
                </div>
                <div style={customStyle.flex}>
                    <Text
                        child={"Publisher: "}
                        style={customStyle.heading}
                    />
                    <Text
                        child={props.publisher}
                    />
                </div> 
                <div style={customStyle.flex}>
                    <Text
                        child={"Published on: "}
                        style={customStyle.heading}
                    />
                    <Text
                        child={props.published}
                    />
                </div>                        
            </div>        
        </div>
    )
}