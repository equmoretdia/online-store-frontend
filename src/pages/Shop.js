import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { TypeBar } from 'components/TypeBar/TypeBar';
import { BrandBar } from 'components/BrandBar/BrandBar';

export const Shop = () => {
  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
        </Col>
      </Row>
    </Container>
  );
};
