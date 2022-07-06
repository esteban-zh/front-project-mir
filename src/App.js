import { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import {Container} from "react-bootstrap";
// import CarList from "./containers/CarList";
import Home from './pages/Home';

import {getCarFetch} from "./api/cars";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {

  const [cars, setCars] = useState([]);


  useEffect(() => {

    async function fetchData() {
      const data = await getCarFetch()
      setCars(data);
    }
    fetchData();
  }, []);

  return (
    <Container>
      <Router>
        <Routes>
           <Route path="/" exact
              element= {<Home list ={cars}/>} />
           <Route path="/api/cars/create"
              element= {<h1>cars create</h1>}
            />
           <Route path="/api/cars/update"
             element= {<h1>cars update</h1>} />
           <Route path="/api/cars/delete"
              element= {<h1>cars delete</h1>} />
        </Routes>       
      </Router>
     
    </Container>
  );
}

export default App;
