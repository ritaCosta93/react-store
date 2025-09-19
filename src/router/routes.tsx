import { App } from '../App';
import { AddProduct } from '../components/Products/AddProduct';
import { ProductsList } from '../components/Products/ProductsList';

export const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <ProductsList /> },
      { path: 'product/add', element: <AddProduct /> }
    ]
  }
];
