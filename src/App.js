import { useState, useEffect } from "react";
import {Container} from "react-bootstrap";
import CarList from "./components/CarList";
// import axios from "axios";

// import { API_URL } from "./constants";
import { getCarAxios } from "./api/cars";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  const [cars, setCars] = useState([]);

  // const getCarFetch = () => {
  //   const endpoint = "/api/cars";
  //   fetch(`${API_URL}${endpoint}`)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log("data", data);
  //     setCars(data);
  //   });
  // }


  useEffect(async () => {
    // getCarFetch();
    const data = await getCarAxios();
    console.log("data en useefect", data)
      setCars(data);
  }, []);

  return (
    <Container>
      <CarList list={cars}/>
    </Container>
  );
}

export default App;
