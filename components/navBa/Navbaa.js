import React from "react";
import {Link} from "react-router-dom";
import "./Navbaa.css";

export default function navbar() {
  return (
      <div>
        < div className="nav">
        <div className="store" style ={{ fontSize:"20px" }}>  clothes store 
        </div>
        <div className="boutons">
          <ul>
              <Link to="/">Home</Link>
        </ul>
        <ul>
              <Link to="/Women">Women</Link>
        </ul>
        <ul>
              <Link to="/Men">Men</Link>
        
          </ul>
    </div>
        </ div>
      </div>
  )
}