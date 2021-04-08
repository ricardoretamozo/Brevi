import React, { Component } from 'react';



//Index componentes
import Contact from "components/Landing/Contact";

import Brevi from "components/Landing/Home";

import MissionVision from "components/Landing/MissionVision"
import features from "components/Landing/Features"
import login from "components/Login/LoginRegistro"
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

class Index extends Component {
  render() {
    return (
      <Router>
        <div>    
          <Route exact path="/" component={Brevi} />
          <Route  path="/Brevi" component={MissionVision} />
          <Route path="/Caracteristicas" component={features} />
          <Route path="/Contactanos" component={Contact} />
          <Route path="/Login" component={login} />
        </div>
        
      </Router>
    );
  }
}

export default Index;
