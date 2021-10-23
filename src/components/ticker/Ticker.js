import { useEffect, useState } from "react";

const Ticker = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    requestData();
  }, []);

  async function requestData() {
    const res = await fetch(
      `https://api.nomics.com/v1/currencies/ticker?key=${process.env.REACT_APP_NOMICS_API_KEY}`
    );
    const json = await res.json();

    setData(json);
  }

  return (
    <div className="ticker">
      <div className="ticker__element">
        <div className="header-coins">
          {data
            // Display top 10 tokens
            .filter((token) => token.rank <= 10)
            .map((token) => (
              <div className="header-coin" key={token.id}>
                <div className="header-coin__img">
                  <img src={token.logo_url} alt={token.name} />
                </div>
                <div className="header-coin__content-text">
                  <span className="header-coin__content-name">
                    ${token.price} {token.currency}
                  </span>
                  <div className="ranking">
                    <div className="ranking__current">{token.rank}</div>
                  </div>
                </div>
                <div className="header-coin-content-text">
                  <span className="header-coin-content-percentage up"></span>
                  <span className="header-coin-content-percentage gray-text">
                    24HRs
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Ticker;
