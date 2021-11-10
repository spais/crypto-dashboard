import { useState, useEffect } from "react";
import axios from "../../utilities/axios";
import requests from "../../utilities/requests";
import TickerTokens from "./TickerTokens";
import "./ticker.styles.scss";

const Ticker = () => {
  const [tickerData, setTickerData] = useState(null);

  useEffect(() => {
    const requestData = async () => {
      const res = await axios.get(requests.fetchCurrenciesTicker);
      setTickerData(
        res.data.filter((token) => {
          return token.rank <= 5;
        })
      );
    };

    requestData();
    return () => requestData;
  }, []);

  return (
    <div className="ticker">
      <div className="ticker__element">
        <div className="header-coins">
          {tickerData &&
            tickerData.map((token, tokenIndex) => {
              return (
                <TickerTokens
                  key={tokenIndex}
                  logo={token.logo_url}
                  name={token.name}
                  price={token.price}
                  currency={token.currency}
                  rank={token.rank}
                  priceChange={token["1d"].price_change}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Ticker;
