import React from "react";
import { Card, Badge, Button, ListGroup  } from "react-bootstrap";
import "../styles/CarsCard.scss";

const CarsCard = ({ item, images}) => {
  console.log("luego de mapear list queda item", item);
  console.log("este es images", images);
//   console.log("este es key", key);

  return (
    <>
       {
           images.map((obj, i) =>(
               <Card  key={i} style={{ width: "18rem" }}>
                    <>
                    <Card.Body >
                    <Card.Img variant="top" src={obj.src.small}/>                  
                    <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        </Card.Body>
                            <ListGroup className="list-group-flush">
                            <ListGroup.Item>{item.type}</ListGroup.Item>
                            <ListGroup.Item>{item.capacity}</ListGroup.Item>
                            </ListGroup>
                        <Card.Body>
                            <Badge bg="danger">${item.price}</Badge>
                            <Button variant="primary">Alquilar</Button>
                    </Card.Body>  
                    </>                 
                </Card>
                ))
        }        
    </>
  );
};

export default CarsCard;
