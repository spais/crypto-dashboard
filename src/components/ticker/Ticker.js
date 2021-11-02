import { useEffect, useState } from "react";
import requests from "../../utilities/requests";
import TickerTokens from "./TickerTokens";
import "./ticker.styles.scss";

const Ticker = () => {
  useEffect(() => {
    console.log("component did mount");
  }, []);
  return (
    <div className="ticker">
      <TickerTokens fetchURL={requests.fetchCurrenciesTicker} />
    </div>
  );
};

export default Ticker;
