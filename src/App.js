import React, { useEffect, useState } from "react";
import Ticker from "./components/Ticker/Ticker";

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
