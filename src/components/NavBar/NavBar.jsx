import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

import { Context } from 'index';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from 'utils/consts';

export const NavBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
  };

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>
          OnlineStore
        </NavLink>
        {user.isAuth ? (
          <Nav className="ml-auto gap-2">
            <Button
              variant={'outline-light'}
              onClick={() => navigate(ADMIN_ROUTE)}
            >
              Admin
            </Button>
            <Button variant={'outline-light'} onClick={() => logOut()}>
              Quit
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto">
            <Button
              variant={'outline-light'}
              onClick={() => navigate(LOGIN_ROUTE)}
            >
              Auth
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});
