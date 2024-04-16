import React from 'react';
import { Button, Card, Container, Col, Image, Row } from 'react-bootstrap';

import star from 'assets/big-star.png';

export const Device = () => {
  const device = {
    id: 1,
    name: 'iPhone 14 Pro',
    price: 600,
    rating: 8,
    img: '',
  };
  const description = [
    { id: 1, title: 'Memory', description: '10GB' },
    { id: 2, title: 'Camera', description: '16MP' },
    { id: 3, title: 'Processor', description: 'Pentium 4' },
    { id: 4, title: 'Core number', description: '6' },
    { id: 5, title: 'Battery', description: '4000mAh' },
  ];
  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={device.img} />
        </Col>
        <Col md={4}>
          <Row className="d-flex align-items-center flex-column">
            <h2>{device.name}</h2>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                background: `url(${star}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: 'cover',
                fontSize: 64,
              }}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: '5px solid lightgrey',
            }}
          >
            <h3>From: {device.price} $</h3>
            <Button variant={'outline-dark'}>Add to the basket</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h1>Product details</h1>
        {description.map((info, index) => (
          <Row
            key={info.id}
            style={{
              background: index % 2 === 0 ? 'lightgrey' : 'transparent',
              fontSize: 20,
              padding: 10,
              // border: '5px solid lightgrey',
            }}
          >
            {info.title} : {info.description}
          </Row>
        ))}
      </Row>
    </Container>
  );
};
