import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import requests from "./utilities/requests";
import Ticker from "./components/Ticker/Ticker";

const App = () => {
  return (
    <div>
      <div id="layout-wrapper">
        <header id="page-topbar">
          <div className="navbar-header">
            <Ticker fetchURL={requests.fetchCurrenciesTicker} />
          </div>
        </header>
      </div>
    </div>
  );
};

export default App;
