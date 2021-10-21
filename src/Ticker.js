const Ticker = (props) => {
  return (
    <div>
      <h1>
        {props.rank}. {props.currency}
      </h1>
    </div>
  );
};

export default Ticker;
