import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Row } from 'react-bootstrap';

import { Context } from 'index';
import { DeviceItem } from 'components/DeviceItem/DeviceItem';

export const DeviceList = observer(() => {
  const { device } = useContext(Context);
  return (
    <Row className="d-flex">
      {device.devices.map(device => (
        <DeviceItem key={device.id} device={device} />
      ))}
    </Row>
  );
});
