const requests = {
  fetchCurrenciesTicker: `/currencies/ticker?key=${process.env.REACT_APP_NOMICS_API_KEY}`,
};

export default requests;
