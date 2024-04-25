import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';

import { ModalBrand } from 'components/ModalBrand/ModalBrand';
import { ModalDevice } from 'components/ModalDevice/ModalDevice';
import { ModalType } from 'components/ModalType/ModalType';

export const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false);
  const [deviceVisible, setDeviceVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);

  return (
    <Container className="d-flex flex-column">
      <Button
        variant={'outline-dark'}
        className="mt-4 p-2"
        onClick={() => setBrandVisible(true)}
      >
        Add brand
      </Button>
      <Button
        variant={'outline-dark'}
        className="mt-4 p-2"
        onClick={() => setDeviceVisible(true)}
      >
        Add device
      </Button>
      <Button
        variant={'outline-dark'}
        className="mt-4 p-2"
        onClick={() => setTypeVisible(true)}
      >
        Add type
      </Button>
      <ModalBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
      <ModalDevice
        show={deviceVisible}
        onHide={() => setDeviceVisible(false)}
      />
      <ModalType show={typeVisible} onHide={() => setTypeVisible(false)} />
    </Container>
  );
};
