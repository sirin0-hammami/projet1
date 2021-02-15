import React from "react";
import ProduitWomen from "./ProduitWomen";
import femme0 from "./femme0.jpg";
import "./Women.css";

export default function (){
    return(
        <div className="page" >
        <div className="adddd">
            <div className="text">
            <div style={{ fontSize:"40px", fontWeight:"bold", textAlign:"center"}}> Women clothes</div>
            </div>
            <img className="imaa" src={femme0}/>


        </div>
        <div className="twolines"> 
            <ProduitWomen/>
            <ProduitWomen/>
            
        </div>
    </div>
    )
}