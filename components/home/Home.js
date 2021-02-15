import React from "react";
import "./Home.css";
import Slides from "./Carrousel/Slides";
import ProduitMen from"../men/ProduitMen";


export default function () {
    return (
    <div className="page">
    
        <div className="band">

          <div className="txt" style={{ textAlign: "center" , fontSize : "40px", fontWeight:'bold',margintop:"5%"}}>Clothes Store </div>
          <div className="numberone">
          <span> Welcome to the<span style={{ fontWeight:"bold"}}> #N°1 Selling </span> 
         Clothes store in Tunisia </span>
         </div>
      </div>
         <Slides/>
      <div className="buy">
         <ProduitMen/>
  
      </div>
    </div>

    )
}
