import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Button, Card, Container, Form } from 'react-bootstrap';

import { LOGIN_ROUTE, REGISTRATION_ROUTE } from 'utils/consts';
import { registration, login } from 'http/userAPI';

export const Auth = () => {
  const location = useLocation();
  // console.log(location);
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = async () => {
    if (isLogin) {
      const response = await login(email, password);
      console.log(response);
    } else {
      const response = await registration(email, password);
      console.log(response);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? 'Login' : 'Registration'}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-3"
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email..."
          />
          <Form.Control
            className="mt-3"
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password..."
          />
          <div className="d-flex justify-content-between mt-3">
            {isLogin ? (
              <div className="p-2">
                Haven't yet registered?&nbsp;
                <NavLink to={REGISTRATION_ROUTE}>Sign up!</NavLink>
              </div>
            ) : (
              <div className="p-2">
                Have account already?&nbsp;
                <NavLink to={LOGIN_ROUTE}>Sign in!</NavLink>
              </div>
            )}
            <Button variant={'outline-success'} onClick={auth}>
              {isLogin ? 'Sign in' : 'Sign up'}
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};
