import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 4000,
});

export const cepApi = axios.create({
  baseURL: "https://viacep.com.br/ws/",
  timeout: 4000,
});
