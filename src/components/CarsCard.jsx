import React from "react";
import { Card, Badge, Col, Row, Button } from "react-bootstrap";
import img from '../images/banner-fondo2.jpg';
import '../styles/CarsCard.scss'

const CarsCard = ( props) => {
   console.log("item en cardcard", props.item)
    console.log("images en cardcard", props.images)
  return (
    <div className="cont">
    <Row xs={1} md={4} className="g-4">
       {Array.from({ length:4 }).map((_, idx) => (
      <Col key={idx}>
        <Card border="dark" style={{ width: "18rem" }}>
          <Card.Body>
            {/* {
              images.map((item, i) =>(
                <Card.Img variant="top" key={i}
              ))
            } */}
            <Card.Img variant="top" src={ props.images[0].src.small} />
            <Card.Title>{props.item.name}</Card.Title>
            <Card.Text>{props.item.type}</Card.Text>
            <Card.Text>{props.item.capacity}</Card.Text>
            <Badge bg="danger">${props.item.price}</Badge>
            <Button variant="primary">Alquilar</Button>
          </Card.Body>
        </Card>
      </Col>
      ))}
    </Row>
    </div>
  );
};

export default CarsCard;
