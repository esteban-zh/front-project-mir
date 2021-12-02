import React from "react";
import { Card, Badge } from "react-bootstrap";

const CarsCard = ({item}) => {
    return (
        <Card border="primary" style={{ width: '18rem' }}>
            <Card.Header>CAR</Card.Header>
            <Card.Body>
            <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.type}</Card.Text>
                <Card.Text>{item.capacity}</Card.Text>
                <Badge bg="danger">${item.price}</Badge>
            </Card.Body>
        </Card>
    )
}

export default CarsCard;