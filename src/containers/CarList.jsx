import React from "react";
import CarsCard from '../components/CarsCard.jsx'
import '../styles/CarList.scss'

const CarList = ({list, images}) => {
    //  console.log("list en cardlist", list)
    // console.log("images en cardlist",images)
    return ( 
    <>
    <div className="title">
    <h1>Alquila facilmente nuestros autos</h1>
    </div>
    <div className="section">
        {
            list.map((item, i) => (
                <CarsCard  key={i} item={item} images={images}/>
            ))
        }
    </div>
    </>
    );
};

export default CarList;