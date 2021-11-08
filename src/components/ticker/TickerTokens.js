import { useEffect, useState } from "react";
import axios from "../../utilities/axios";
import requests from "../../utilities/requests";

const TickerTokens = () => {
  const [tickerData, setTickerData] = useState(null);

  const roundDecimal = (num) => {
    let round = Number.parseFloat(num).toFixed(2);
    return (num = round);
  };

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
    <div className="header-coins">
      {tickerData &&
        tickerData.map((token, tokenIndex) => {
          return (
            <div className="header-coin" key={tokenIndex}>
              <div className="header-coin__img">
                <img src={token.logo_url} alt={token.name} />
              </div>
              <div className="header-coin__content-body">
                <div className="header-coin__content-text">
                  <span className="header-coin__content-price">
                    ${roundDecimal(token.price)}
                  </span>
                  <span className="header-coin__content-name">
                    {token.currency}
                    <span className="header-coin__content-ranking">
                      {token.rank}
                    </span>
                  </span>
                </div>
                <div className="header-coin__content-text">
                  <span className="header-coin__content-percentage up">
                    {roundDecimal(token["1d"].price_change)}%
                  </span>
                  <span className="header-coin__content-percentage gray-text">
                    24HRs
                  </span>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default TickerTokens;
