import React, { useState, useEffect } from 'react';
import olx from '../assets/olx.png';
import lens from '../assets/lens.png';
import arrow from '../assets/arrow.png';
import search from '../assets/search.png';
import Login from './Login';
import { auth } from '../../Services/firebase';

const Navbar = (props) => {
  const [loginPop, setLoginPop] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);

  const handleSearchChange = (e) => {
    props?.setSearch(e.target.value);
  };

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <>
      <div className='flex p-4 bg-slate-100 shadow-sm'>
        <img className='w-11 h-9' src={olx} />
        <div className='flex border-2 border-spacing-1 w-64 p-2 border-black ml-5 bg-white'>
          <img src={lens} className='w-6 h-5 mt-1' />
          <input placeholder='Location' className='ml-3 outline-none' />
          <img src={arrow} className='w-8 h-7' />
        </div>

        <div className='flex h-12 ml-4 border-2 border-black bg-white'>
          <input
            onChange={handleSearchChange}
            placeholder='Find cars, Mobile phones and more'
            className='ml-3 w-96 outline-none'
          />
          <img className='w-14 h-11.5' src={search} />
        </div>

        <div className='flex h-12 p-3 ml-10 cursor-pointer'>
          <h1 className='font-semibold'>ENGLISH</h1>
          <img src={arrow} className='w-8 h-7' />
        </div>

        {user ? (
          <div onClick={handleLogout} className='flex h-12 p-3 ml-6 cursor-pointer underline hover:no-underline'>
            <h1 className='font-bold text-lg'>Logout</h1>
          </div>
        ) : (
          <div onClick={() => setLoginPop(!loginPop)} className='flex h-12 p-3 ml-6 cursor-pointer underline hover:no-underline'>
            <h1 className='font-bold text-lg'>Login</h1>
          </div>
        )}

        <div className='w-28 flex h-12 p-2 ml-6 cursor-pointer rounded-full border border-yellow-500'>
          <h1 className='font-bold text-lg ml-3'>+ SELL</h1>
        </div>
      </div>
      {loginPop && <Login setLoginPop={setLoginPop} />}
    </>
  );
};

export default Navbar;
