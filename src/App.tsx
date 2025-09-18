import { CategoriesList } from './components/Categories/CategoriesList';
import { AddProduct } from './components/Products/AddProduct';
import { ProductsList } from './components/Products/ProductsList';
import { Search } from './components/Products/Search';
import { Footer } from './components/partials/Footer';
import { Header } from './components/partials/Header';

export function App() {
  return (
    <div className='App flex flex-col p-0 m-0 h-screen w-screen font-roboto'>
      <Header />
      <div className='flex flex-row justify-center'>
        <AddProduct />
        <div className='flex flex-col'>
          <Search />
          <ProductsList />
        </div>

        <div className='flex sidebar p-4'>
          <CategoriesList />
        </div>
      </div>

      <Footer />
    </div>
  );
}
