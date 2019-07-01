import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import OurService from "./components/OurService";
import OurLab from "./components/OurLab";
import OurProcess from "./components/OurProcess";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={OurService} />
            <Route exact path="/lab" component={OurLab} />
            <Route exact path="/process" component={OurProcess} />
            <Route exact path="/about" component={AboutUs} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
