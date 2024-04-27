import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Col, Image } from 'react-bootstrap';

import star from 'assets/star.png';
import { DEVICE_ROUTE } from 'utils/consts';

export const DeviceItem = ({ device }) => {
  const navigate = useNavigate();

  const BASE_URL = 'http://localhost:5000/';

  return (
    <Col
      md={3}
      className="mt-3"
      onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}
    >
      <Card style={{ width: 150, cursor: 'pointer' }} border={'light'}>
        <Image width={150} height={150} src={BASE_URL + device.img} />
        <div className="d-flex justify-content-between align-items-center mt-1 text-black-50">
          <div>Product name...</div>
          <div className="d-flex align-items-center">
            <div>{device.rating}</div>
            <Image width={15} height={15} src={star} />
          </div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  );
};
