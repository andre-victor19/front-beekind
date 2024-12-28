import axios from "axios";

const api = axios.create({
  baseURL: "https://api.datasales.info",
});

export default api;
