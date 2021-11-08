import { useState, useEffect } from "react";
import TickerTokens from "./TickerTokens";
import "./ticker.styles.scss";

const Ticker = () => {
  return (
    <>
      <div className="ticker">
        <div className="ticker__element">{<TickerTokens />}</div>
      </div>
    </>
  );
};

export default Ticker;
