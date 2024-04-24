import React from 'react';
import { Button, Container } from 'react-bootstrap';

import { ModalType } from 'components/ModalType/ModalType';
import { ModalBrand } from 'components/ModalBrand/ModalBrand';

export const Admin = () => {
  return (
    <Container className="d-flex flex-column">
      <Button variant={'outline-dark'} className="mt-4 p-2">
        Add type
      </Button>
      <Button variant={'outline-dark'} className="mt-4 p-2">
        Add brand
      </Button>
      <Button variant={'outline-dark'} className="mt-4 p-2">
        Add device
      </Button>
      <ModalBrand show={false} />
      <ModalType show={false} />
      {/* <ModalDevice/> */}
    </Container>
  );
};
