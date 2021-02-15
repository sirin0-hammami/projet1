import React from "react";                                 
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from  "../home/Home";
import Men from "../men/Men";
import Women from "../women/Women";
import Navbaa from "./Navbaa"




export default function MainRouter(){
  return(
    <Router>
    <Navbaa/> 
      <div>
        <Switch>
          <Route exact path="/Women">
            <Women />
          </Route>
          <Route exact path="/Men">
            <Men/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

  )
}
