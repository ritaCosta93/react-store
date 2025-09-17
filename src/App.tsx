import { ProductsList } from './components/Products/ProductsList';
import { Footer } from './components/partials/Footer';
import { Header } from './components/partials/Header';

export function App() {
  return (
    <div className='App flex flex-col p-0 m-0 h-screen w-screen font-roboto'>
      <Header />
      <ProductsList />
      <Footer />
    </div>
  );
}
