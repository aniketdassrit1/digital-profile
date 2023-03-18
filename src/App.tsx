import React from "react";
import "./App.scss";
import TopNav from "./components/topnav/TopNav";
import { Switch, Route } from "react-router-dom";
import Resume from "./screens/resume/Resume";
import Contact from "./screens/contact/Contact";
import About from "./screens/about/About";
import Home from "./screens/home/Home";
import { Container, Paper } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ xs: { display: "flex" } }}>
        <CssBaseline />
        <TopNav />
        <Box component="main" sx={{ xs: { display: "flex" } }}>
          <Container maxWidth="xl">
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
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
