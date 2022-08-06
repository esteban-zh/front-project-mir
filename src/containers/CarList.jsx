import React from "react";
import CarsCard from '../components/CarsCard.jsx'
import '../styles/CarList.scss'

const CarList = (props) => {
    return ( 
    <div className="section">
    <h1>Alquila facilmente nuestros autos</h1>
        {
            props.list.map((item, i) => (
                <CarsCard  key={i} item={item} images={props.images}/>
            ))
        }
    </div>
    );
};

export default CarList;