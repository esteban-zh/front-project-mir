//   import axios from "axios";
  import { API_URL,  API_URL_PEX } from "../constants";
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
      return data;
    });
  }

   export const getImgFetch = () => {
    return fetch(`${ API_URL_PEX}`,{
      headers: {
        Authorization: '563492ad6f9170000100000135be910d986143b499589ab781c4d3e9'
      }
    })
    .then((res) => res.json())
    .then((data) => {
      const {photos:imgs} = data;
      return imgs;
    });
  }

  //563492ad6f9170000100000135be910d986143b499589ab781c4d3e9