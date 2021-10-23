import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import Ticker from "./components/ticker/Ticker";

const App = () => {
  return (
    <div>
      <div id="layout-wrapper">
        <header id="page-topbar">
          <div className="navbar-header">
            <Ticker />
          </div>
        </header>
      </div>
    </div>
  );
};

export default App;
