import axios from "axios";

export const api = axios.create({
  baseURL: "https://m6-motorsports-group37.onrender.com/",
  timeout: 4000,
});

export const cepApi = axios.create({
  baseURL: "https://viacep.com.br/ws/",
  timeout: 4000,
});

export const carsApi = axios.create({
  baseURL: "https://kenzie-kars.herokuapp.com/",
  timeout: 8000,
});
