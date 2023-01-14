// 'use client'

import '../../styles/globals.css';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/For Web/png/Black logo - no background.png';
import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import Login from './login';
import Profile from './profile';
import Logout from './logout';
// import { useUser } from '@auth0/nextjs-auth0/client';

export default function Layout({ children }) {
  return (
    <html lang='en'>
      <head />
      <UserProvider>
        <body>
          {/* <header className='bg-red-100 text-6xl text-center sticky top-0 z-50'>Breezy</header> */}
          <main className='flex'>
            <div className=' bg-blue-200 h-screen w-72 p-10'>
              <div className=''>
                <Image src={Logo} alt='Breezy Logo' width={1000} height={500} />
              </div>
              <div className=' mt-40'>
                <div className=' space-y-10'>
                  <div>
                    <Link href='/members-only/create-invoice'>
                      <h1 className='bg-red-300'>CREATE INVOICE</h1>
                    </Link>
                  </div>
                  <div>
                    <Link href='/members-only/invoice-list'>
                      <h1 className='bg-pink-300'>INVOICES</h1>
                    </Link>
                  </div>
                  <div>
                    <Link href='/members-only/clients'>
                      <h1 className='bg-green-300'>CLIENTS</h1>
                    </Link>
                  </div>
                  <div>
                    <Link href='/members-only/stats'>
                      <h1 className='bg-orange-300'>STATS</h1>
                    </Link>
                  </div>
                  <div>
                    <Link href='/'>
                      {' '}
                      <h1 className='bg-purple-300'>HOME</h1>
                    </Link>
                  </div>
                  <div>
                    <Login></Login>
                  </div>
                  <div>
                    <Logout></Logout>
                  </div>
                  <Profile></Profile>
                </div>
              </div>
            </div>

            <div className='container'>{children}</div>
          </main>
        </body>
      </UserProvider>
    </html>
  );
}