import { CategoriesList } from './components/Categories/CategoriesList';
import { ProductsList } from './components/Products/ProductsList';
import { Footer } from './components/partials/Footer';
import { Header } from './components/partials/Header';

export function App() {
  return (
    <div className='App flex flex-col p-0 m-0 h-screen w-screen font-roboto'>
      <Header />
      <div className='flex flex-row justify-center'>
        <ProductsList />
        <div className='flex sidebar p-4'>
          <CategoriesList />
        </div>
      </div>

      <Footer />
    </div>
  );
}
