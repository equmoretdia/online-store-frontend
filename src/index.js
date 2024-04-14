import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from 'components/App';
import { UserStore } from 'store/UserStore';

import './index.css';

export const Context = createContext(null);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context.Provider value={{ user: new UserStore() }}>
      <BrowserRouter basename="/online-store-frontend">
        <App />
      </BrowserRouter>
    </Context.Provider>
  </React.StrictMode>
);
