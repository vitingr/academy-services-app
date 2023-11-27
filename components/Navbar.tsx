"use client"

import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'

const Navbar = () => {

  const { data: session } = useSession()

  return (
    <header className='w-full bg-white fixed flex justify-center p-6'>
      <nav className='flex justify-around gap-4 items-center max-w-[1600px] w-full'>
        <img src="/assets/images/logo.png" alt="Logo Picture" className='w-[100px] h-[100px] selection:bg-transparent' />
        <ul className='list-none flex items-center gap-12'>
          <li><a href="/" className='link-nav selection:bg-[#F2921D] selection:text-white'>Início</a></li>
          <li><a href="/" className='link-nav selection:bg-[#F2921D] selection:text-white'>Serviços</a></li>
          <li><a href="/" className='link-nav selection:bg-[#F2921D] selection:text-white'>Parcerias</a></li>
          <li><a href="/" className='link-nav selection:bg-[#F2921D] selection:text-white'>Informações</a></li>
          <li><a href="/" className='link-nav selection:bg-[#F2921D] selection:text-white'>Contato</a></li>
        </ul>
        {session?.user?.email ? (
          <div className='flex items-center gap-6'>
            <button className='bg-[#F2921D] text-white p-2 rounded-xl w-[150px] selection:bg-transparent' onClick={() => signIn()}>
              Login
            </button>
            <button className='text-[#F2921D] border border-[#F2921D] p-2 rounded-xl w-[150px] selection:bg-transparent' onClick={() => signIn()}>
              Criar Conta
            </button>
          </div>
        ) : (
          <div className='flex items-center gap-6'>
            <button className='bg-[#F2921D] text-white p-2 rounded-xl w-[150px] selection:bg-transparent' onClick={() => signIn()}>
              Login
            </button>
            <button className='text-[#F2921D] border border-[#F2921D] p-2 rounded-xl w-[150px] selection:bg-transparent' onClick={() => signIn()}>
              Criar Conta
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar