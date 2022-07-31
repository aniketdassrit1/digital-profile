import React from "react";
import "./App.scss";
import TopNav from "./components/sidenav/TopNav";
import { Switch, Route } from "react-router-dom";
import Resume from "./screens/resume/Resume";
import Contact from "./screens/contact/Contact";
import About from "./screens/about/About";
import Home from "./screens/home/Home";
import { Grid, Paper } from "@mui/material";

function App() {
  return (
    <>
      <div className="h-100">
        <TopNav />
        <Paper square sx={{ height: "100%" }}>
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
        </Paper>
      </div>
    </>
  );
}

export default App;
