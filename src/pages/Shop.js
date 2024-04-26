import React, { useEffect, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';

import { TypeBar } from 'components/TypeBar/TypeBar';
import { BrandBar } from 'components/BrandBar/BrandBar';
import { DeviceList } from 'components/DeviceList/DeviceList';
import { Context } from 'index';
import { getAllTypes } from 'http/deviceAPI';

export const Shop = observer(() => {
  const { device } = useContext(Context);

  useEffect(() => {
    getAllTypes().then(data => device.setTypes(data));
  }, [device]);

  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviceList />
        </Col>
      </Row>
    </Container>
  );
});
