import React from "react";
import ProduitMen from "./ProduitMen";
import add from "./add.jpg";
import "./Men.css";

export default function(){
    return(
     <div className="page">
            <div className="text">
            <div style={{ fontSize:"40px", fontWeight:"bold", textAlign:"center"}}> Men clothes</div>
            </div>
            <div className="ima">
            <img src={add}/>
            </div>
        <div className="twolines"> 
            <ProduitMen/>
            <ProduitMen/>
            
        </div>
    </div>
    );
}