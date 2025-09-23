import { useState } from 'react';
import { Navigate } from 'react-router';
import { useGlobalStore } from '../store/global';

export const Login = () => {
  const { login, authenticated } = useGlobalStore();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(username, password);
      setError('');
    } catch (err: any) {
      setError('Falha no login. Verifique utilizador/password.');
      console.error('❌ Erro login:', err);
    }
  };

  return (
    <div className='flex flex-col w-full h-screen items-center justify-center'>
      {authenticated ? (
        <Navigate to={'/'} />
      ) : (
        <div className=''>
          <div className='flex flex-col justify-center  bg-white p-6 rounded-2xl shadow-md'>
            <div className='flex flex-row p-4 justify-center'>
              <h1 className='text-2xl'>Login</h1>
            </div>

            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
              <input type='text' placeholder='Utilizador' value={username} onChange={e => setUsername(e.target.value)} className='border p-2 rounded' />
              <input type='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} className='border p-2 rounded' />
              <button type='submit' className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'>
                Entrar
              </button>
              {error && <p className='text-red-500'>{error}</p>}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
