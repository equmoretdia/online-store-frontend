import { useState, useEffect, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Spinner } from 'react-bootstrap';

import { AppRouter } from './AppRouter/AppRouter';
import { NavBar } from './NavBar/NavBar';
import { Context } from 'index';
import { auth } from 'http/userAPI';

export const App = observer(() => {
  const { user } = useContext(Context);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // setTimeout(() => {
    auth()
      .then(data => {
        user.setUser(true);
        user.setIsAuth(true);
      })
      .catch(error => alert(error.response.data.message))
      .finally(() => setIsLoading(false));
    // }, 1000);
  }, [user]);

  if (isLoading) {
    return <Spinner animation={'grow'} />;
  }

  return (
    <div>
      <NavBar />
      <AppRouter />
    </div>
  );
});
