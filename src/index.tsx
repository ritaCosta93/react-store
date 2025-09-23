import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import { BrowserRouter } from 'react-router-dom';
import { useRoutes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { routes } from './routers/routes';

function AppRouter() {
  const element = useRoutes(routes);
  return element;
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
