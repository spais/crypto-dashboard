import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.nomics.com/v1",
});

export default instance;
