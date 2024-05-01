import React, { useEffect, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';

import { TypeBar } from 'components/TypeBar/TypeBar';
import { BrandBar } from 'components/BrandBar/BrandBar';
import { DeviceList } from 'components/DeviceList/DeviceList';
import { ShopPages } from 'components/ShopPages/ShopPages';
import { Context } from 'index';
import { getAllTypes, getAllBrands, getAllDevices } from 'http/deviceAPI';

export const Shop = observer(() => {
  const { device } = useContext(Context);

  useEffect(() => {
    getAllTypes().then(data => device.setTypes(data));
    getAllBrands().then(data => device.setBrands(data));
    getAllDevices().then(data => device.setDevices(data.rows));
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
          <ShopPages />
        </Col>
      </Row>
    </Container>
  );
});
