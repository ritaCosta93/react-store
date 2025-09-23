import { Navigate } from 'react-router';
import { App } from '../App';
import { ProductsList } from '../components/Products/ProductsList';
import { AddProduct } from '../pages/AddProduct';

import { Cart } from '../pages/Cart';
import { Login } from '../pages/Login';
import { ProductPage } from '../pages/Product';
import { appPaths } from '../routers/constants';
import { useGlobalStore } from '../store/global';
import type { TProtectedRoute } from '../types/Router';

export const ProtectedRoute: React.FC<TProtectedRoute> = ({ children }) => {
  const authenticated = useGlobalStore(state => state.authenticated);
  return authenticated ? <>{children}</> : <Navigate to={appPaths.auth} replace />;
};

export const routes = [
  {
    path: appPaths.root,
    element: <App />,
    children: [
      {
        path: appPaths.root,
        element: (
          <ProtectedRoute>
            <ProductsList />
          </ProtectedRoute>
        )
      },
      {
        path: appPaths.addProduct,
        element: (
          <ProtectedRoute>
            <AddProduct />
          </ProtectedRoute>
        )
      },
      {
        path: appPaths.product,
        element: (
          <ProtectedRoute>
            <ProductPage />
          </ProtectedRoute>
        )
      },
      {
        path: appPaths.cart,
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        )
      }
    ]
  },
  { path: appPaths.auth, element: <Login /> }
];
