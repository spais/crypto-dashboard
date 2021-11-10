function TickerTokens(props) {
  const roundDecimal = (num) => {
    let round = Number.parseFloat(num).toFixed(2);
    return (num = round);
  };

  return (
    <div className="header-coin">
      <div className="header-coin__img">
        <img src={props.logo} alt={props.name} />
      </div>
      <div className="header-coin__content-body">
        <div className="header-coin__content-text">
          <span className="header-coin__content-price">
            ${roundDecimal(props.price)}
          </span>
          <span className="header-coin__content-name">
            {props.currency}
            <span className="header-coin__content-ranking">{props.rank}</span>
          </span>
        </div>
        <div className="header-coin__content-text">
          <span className="header-coin__content-percentage up">
            {roundDecimal(props.priceChange)}%
          </span>
          <span className="header-coin__content-percentage gray-text">
            24HRs
          </span>
        </div>
      </div>
    </div>
  );
}

export default TickerTokens;
