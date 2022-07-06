//   import axios from "axios";
  import { API_URL } from "../constants";
//   export const getCarAxios = () => {
//     const endpoint = "/api/cars";
//     return axios
//     .get(`${API_URL}${endpoint}`)
//     .then((result) => {
//       console.log("data axios", result);
//     //   setCars(result.data);
//     return result.data
//     })
//     .catch((err) => {
//       console.log("error", err);
//     })
//   }
   export const getCarFetch = () => {
    const endpoint = "/api/cars";
    return fetch(`${API_URL}${endpoint}`)
    .then((res) => res.json())
    .then((data) => {
      console.log("data", data);
      return data;
    });
  }