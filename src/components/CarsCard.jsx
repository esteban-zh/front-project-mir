import React from "react";
import { Card, Badge, Col, Row, Button } from "react-bootstrap";
import img from '../images/banner-fondo2.jpg';
import '../styles/CarsCard.scss'

const CarsCard = ({ item }) => {
  return (
    <div className="cont">
    <Row xs={1} md={4} className="g-4">
       {Array.from({ length: 4 }).map((_, idx) => (
      <Col>
        <Card border="dark" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Img variant="top" src={img} />
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.type}</Card.Text>
            <Card.Text>{item.capacity}</Card.Text>
            <Badge bg="danger">${item.price}</Badge>
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
