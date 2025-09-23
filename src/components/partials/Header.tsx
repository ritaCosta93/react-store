import { Link } from 'react-router';
import logo from '../../logo.svg';
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
      <div className='flex flex-col justify-center w-3/4 nav'>nav goes here</div>
      <div className='flex flex-col justify-center text-center w-1/6 login'>{authenticated ? `hello ${user?.username}` : <Link to='/login'>Login</Link>}</div>
    </div>
  );
};
