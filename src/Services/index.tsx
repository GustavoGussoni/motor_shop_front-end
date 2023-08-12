import axios from "axios";

export const api = axios.create({
  baseURL: "https://motor-shop-back-end.onrender.com/",
  timeout: 30000,
});

// api.interceptors.request.use((config) => {
//   const token = user_token;

//   if (token) {
//     config.headers.Authorization = `Bearer ${user_token}`;
//   }

//   return config;
// });

export const cepApi = axios.create({
  baseURL: "https://viacep.com.br/ws/",
  timeout: 4000,
});

export const carsApi = axios.create({
  baseURL: "https://kenzie-kars.herokuapp.com/",
  timeout: 8000,
});
