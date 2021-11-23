import { useState, useEffect } from "react";
import axios from "../../utilities/axios";
import requests from "../../utilities/requests";

export const TickerListData = () => {
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
  }, []);

  return <></>;
};
