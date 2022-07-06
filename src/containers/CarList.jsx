import React from "react";
import CarsCard from '../components/CarsCard.jsx'
import '../styles/CarList.scss'

const CarList = ({ list }) => {
    return ( 
    <div className="section">
    <h1>Alquila facilmente nuestros autos</h1>
        {
            list.map((item, i) => (
                <CarsCard  key={i} item={item}/>
            ))
        }
    </div>
    );
};

export default CarList;