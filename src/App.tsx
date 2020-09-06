import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SideNav from "./components/sidenav/Sidenav";

function App() {
  return (
    <>
      <div className="container-fluid h-100">
        <div className="row h-100">
          <div className="col-2 p-0">
            <SideNav />
          </div>
          <div className="col-10">
            <h1>Main content</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
