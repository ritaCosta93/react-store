import { useEffect } from 'react';
import { useCartStore } from '../store/cart';
import { useGlobalStore } from '../store/global';

export const Cart = () => {
  const { user } = useGlobalStore();
  const { carts, getCart } = useCartStore();

  useEffect(() => {
    user ? getCart(user.id) : console.log('No user found');
  }, [user, getCart]);

  return (
    <div className='flex flex-col p-4 gap-2'>
      <div className='flex flex-row  bg-indigo-500 p-4 border-b border-indigo-900'>
        <div className='flex flex-col w-80' />
        <div className='flex flex-col w-64 px-2 text-center border-r border-indigo-800'>Title</div>
        <div className='flex flex-col w-64 px-2 text-center   border-r border-indigo-800'>Price</div>
        <div className='flex flex-col w-64 px-2 text-center   border-r border-indigo-800'>Quantity</div>
        <div className='flex flex-col w-64 px-2 text-center    border-indigo-800'>Total</div>
      </div>
      {carts?.products?.map(p => (
        <div className='flex flex-row gap-2 bg-slate-300' key={p.id}>
          <div className='flex flex-col w-80 p-4'>
            <img src={p.thumbnail} className='h-1/2 w-1/2' />
          </div>
          <div className='flex flex-col w-80 items-start text-center  p-4'>{p.title}</div>
          <div className='flex flex-col w-80 items-start p-4'>{p.price?.toFixed(2)}</div>
          <div className='flex flex-col w-80 items-start p-4'>{p.quantity}</div>
          <div className='flex flex-col w-80 items-start p-4'>{p.total?.toFixed(2)}</div>
        </div>
      ))}
      <div className='flex flex-row justify-end gap-2'>
        <strong>Total</strong>
        {carts?.total.toFixed(2)}
      </div>
    </div>
  );
};
