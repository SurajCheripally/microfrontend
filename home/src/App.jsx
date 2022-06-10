import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeContent from "./components/HomeContent";
import PageContent from "productDetail/ProductContent"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import "./index.css";

const App = () => (
  <Router>
    <div className="container">
      <Header />
      <div className="mainContent">
        <Switch>
          <Route exact path="/" component={HomeContent} />
          <Route path="/product/:id" component={PageContent} />
        </Switch>
      </div>
      <Footer />
    </div>
  </Router>
);
ReactDOM.render(<App />, document.getElementById("app"));
