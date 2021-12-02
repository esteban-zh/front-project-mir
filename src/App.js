import { useState, useEffect } from "react";
import {Container} from "react-bootstrap";
import CarList from "./components/CarList";
// import axios from "axios";

// import { API_URL } from "./constants";
import {getCarFetch} from "./api/cars";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  const [cars, setCars] = useState([]);


  useEffect(() => {
    // getCarFetch();
    // const data = await getCarAxios();
    // console.log("data en useefect", data)
    //   setCars(data);
    async function fetchData() {
      const data = await getCarFetch()
      setCars(data);
    }
    fetchData();
  }, []);

  return (
    <Container>
      <CarList list={cars}/>
    </Container>
  );
}

export default App;
