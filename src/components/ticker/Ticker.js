import { useEffect, useState } from "react";
import axios from "../../utilities/axios";
import "./ticker.styles.scss";

const Ticker = ({ fetchURL }) => {
  const [data, setData] = useState(null);

  const roundDecimal = (num) => {
    let round = Number.parseFloat(num).toFixed(2);
    return (num = round);
  };

  async function requestData() {
    const res = await axios.get(fetchURL);
    //console.log(res);
    setData(res.data);
    return res;
  }

  useEffect(() => {
    requestData();
  }, [fetchURL]);

  return (
    <div className="ticker">
      <div className="ticker__element">
        <div className="header-coins">
          {data &&
            data
              .filter((token) => token.rank <= 20) // Display top 20 tokens
              .map((token, tokenIndex) => {
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
      </div>
    </div>
  );
};

export default Ticker;
