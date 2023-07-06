import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 4000,
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
