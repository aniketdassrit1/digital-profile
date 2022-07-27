import React from "react";
import "./App.scss";
import SideNav from "./components/sidenav/Sidenav";
import { Switch, Route } from "react-router-dom";
import Resume from "./screens/resume/Resume";
import Contact from "./screens/contact/Contact";
import About from "./screens/about/About";
import Home from "./screens/home/Home";
import { Grid } from "@mui/material";

function App() {
  return (
    <>
      <Grid container direction="row" className="h-100">
        <Grid item xs={2}>
          <SideNav />
        </Grid>

        <Grid item xs={10} className="bg-dark">
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
        </Grid>
      </Grid>
    </>
  );
}

export default App;
