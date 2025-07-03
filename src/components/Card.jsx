import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MemeCard = ({img, title}) => {
    const navigate = useNavigate();

    const goToEdit = () => {
      navigate(`/edit?url=${encodeURIComponent(img)}`)
    }
    return (
      <Card style={{ width: '18rem', margin: "25px" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Button 
              onClick={goToEdit}
              variant="primary"
            >
              Edit
            </Button>
          </Card.Body>
        </Card>
    )
}

export default MemeCard;