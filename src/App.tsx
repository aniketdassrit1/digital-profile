import React from "react";
import "./App.css";
import SideNav from "./components/sidenav/Sidenav";
import { Switch, Route } from "react-router-dom";
import Resume from "./screens/resume/Resume";
import Contact from "./screens/contact/Contact";
import About from "./screens/about/About";
import Home from "./screens/home/Home";

function App() {
  return (
    <>
      <div className="container-fluid h-100">
        <div className="row h-100">
          <div className="col-2 p-0">
            <SideNav />
          </div>
          <div className="col-10 bg-dark">
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/resume">
                <Resume />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
