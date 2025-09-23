import { Link } from 'react-router';
import logo from '../../assets/images/logo.webp';
import { useGlobalStore } from '../../store/global';
export const Header = () => {
  const { authenticated, user } = useGlobalStore();
  return (
    <div className='flex flex-row w-full bg-indigo-500'>
      <div className='flex  justify-start w-1/6 logo'>
        <Link to={'/'}>
          <img src={logo} alt='react shop logo' className='h-24' />{' '}
        </Link>
      </div>
      <div className='flex flex-col justify-center w-full'>
        <div className='flex flex-row justify-center'>
          <h1 className='text-4xl'>Indigo Way - The store</h1>
        </div>
      </div>
      <div className='flex flex-col w-40 justify-center text-center login'>{authenticated ? `hello ${user?.username}` : <Link to='/login'>Login</Link>}</div>
    </div>
  );
};
