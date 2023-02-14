import React from "react";
import { Card, Badge, Col, Row, Button, ListGroup  } from "react-bootstrap";
import img from "../images/banner-fondo2.jpg";
import "../styles/CarsCard.scss";

const CarsCard = ({ item, images, key }) => {
  console.log("luego de mapear list queda item", item);
  console.log("este es images", images);
  console.log("este es key", key);

  return (
    <>
       {
           images.map((obj, i) =>(
               <Card style={{ width: "18rem" }}>
                    <>
                    <Card.Body>
                    <Card.Img variant="top" key={i} src={obj.src.small}/>                  
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

{
  /* <Row xs={1} md={4} className="g-4">
   {Array.from({ length: 4 }).map((_, idx) => (
  <Col key={idx}>
    <Card border="dark" style={{ width: "18rem" }}>
      <Card.Body>
        {
          images.map((obj, i) =>(
            <>
            <Card.Img variant="top" key={i} src={obj.src.small}/>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.type}</Card.Text>
            <Card.Text>{item.capacity}</Card.Text>
            <Badge bg="danger">${item.price}</Badge>
            <Button variant="primary">Alquilar</Button>
            </>
          ))
        }
        <Card.Img>{images.src.small}</Card.Img>
        <Card.Img variant="top" src={images[0].src.small} />
      </Card.Body>
    </Card>
  </Col>
  ))}
</Row> */
}
