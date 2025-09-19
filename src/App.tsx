import { Outlet } from 'react-router-dom';
import { CategoriesList } from './components/Categories/CategoriesList';
import { Search } from './components/Products/Search';
import { Footer } from './components/partials/Footer';
import { Header } from './components/partials/Header';
export function App() {
  return (
    <div className='App flex flex-col p-0 m-0 h-screen w-screen font-roboto'>
      <Header />
      <Search />
      <div className='flex flex-row justify-center'>
        <div className='flex flex-col w-1/4'>
          <CategoriesList />
        </div>
        <div className='flex flex-col w-4/5'>
          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  );
}
