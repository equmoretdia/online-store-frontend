import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

import { Context } from 'index';
import { SHOP_ROUTE } from 'utils/consts';

export const NavBar = observer(() => {
  const { user } = useContext(Context);
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>
          OnlineStore
        </NavLink>
        {user.isAuth ? (
          <Nav className="ml-auto gap-2">
            <Button variant={'outline-light'}>Admin</Button>
            <Button variant={'outline-light'}>Basket</Button>
          </Nav>
        ) : (
          <Nav className="ml-auto">
            <Button
              variant={'outline-light'}
              onClick={() => user.setIsAuth(true)}
            >
              Auth
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});
