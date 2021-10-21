import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import Ticker from "./components/Ticker";

const App = () => {
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
    <div>
      <div>
        {data
          // Display top 10 tokens
          .filter((token) => token.rank <= 10)
          .map((token) => (
            <Ticker
              currency={token.currency}
              rank={token.rank}
              key={token.id}
            />
          ))}
      </div>
    </div>
  );
};

export default App;
