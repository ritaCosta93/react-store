import { Navigate } from 'react-router';
import { App } from '../App';
import { AddProduct } from '../components/Products/AddProduct';
import { ProductsList } from '../components/Products/ProductsList';

import { appPaths } from '../routers/constants';
import { useGlobalStore } from '../store/global';
import type { TProtectedRoute } from '../types/Router';

export const ProtectedRoute: React.FC<TProtectedRoute> = ({ children }) => {
  const authenticated = useGlobalStore(state => state.authenticated);
  return authenticated ? <>{children}</> : <Navigate to={appPaths.root} replace />;
};

export const routes = [
  {
    path: appPaths.root,
    element: <App />,
    children: [
      { path: appPaths.root, element: <ProductsList /> },
      {
        path: appPaths.addProduct,
        element: (
          <ProtectedRoute>
            <AddProduct />
          </ProtectedRoute>
        )
      }
    ]
  }
];
