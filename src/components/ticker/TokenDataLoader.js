import React, { useState, useEffect } from "react";
import axios from "../../utilities/axios";
import requests from "../../utilities/requests";

export const TokenDataLoader = ({ children }) => {
  const [tokenData, setTokenData] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(requests.fetchCurrenciesTicker);
      setTokenData(
        response.data.filter((token) => {
          return token.rank <= 5;
        })
      );
      console.log(response);
    })();
  }, []);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { tokenData });
        }

        return child;
      })}
    </>
  );
};
