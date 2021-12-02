import React from "react";
import CarsCard from "./CarsCard"

const CarList = ({ list }) => {
    return ( 
    <div>
        {
            list.map((item, i) => (
                <CarsCard  key={i} item={item}/>
            ))
        }
    </div>
    );
};

export default CarList;