import React from "react";
import ReactDOM from "react-dom";
import Header from "home/Header";
import Footer from "home/Footer";
import PageContent from "./Components/PageContent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import "./index.css";

const App = () => (
  <Router>

    <div className="container">
      <Header />
      <div className="mainContent">
        <Switch>
          <Route path="/product/:id" component={PageContent} />
        </Switch>
      </div>
      <Footer />
    </div>
  </Router>
);
ReactDOM.render(<App />, document.getElementById("app"));
