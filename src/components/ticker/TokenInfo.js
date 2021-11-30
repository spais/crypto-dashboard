export const TokenInfo = ({ tokenData }) => {
  const {
    logo_url,
    name,
    price,
    currency,
    rank,
    price_change = ["1d"].price_change,
  } = tokenData || {};

  const roundDecimal = (num) => {
    let round = Number.parseFloat(num).toFixed(2);
    return (num = round);
  };
  console.log(tokenData);

  return (
    tokenData &&
    tokenData.map((token, tokenIndex) => {
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
                {roundDecimal(token.price_change)}%
              </span>
              <span className="header-coin__content-percentage gray-text">
                24HRs
              </span>
            </div>
          </div>
        </div>
      );
    })
  );
};
