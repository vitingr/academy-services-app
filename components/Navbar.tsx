"use client"

import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { infoUser } from '@/common/utils/userContext'
import Link from 'next/link'

const Navbar = () => {

  const { data: session } = useSession()
  const { data } = infoUser()

  return (
    <header className='w-full bg-white fixed flex justify-center p-6'>
      <nav className='flex justify-around gap-4 items-center max-w-[1600px] w-full'>
        <img src="/assets/images/logo.png" alt="Logo Picture" className='w-[100px] h-[100px] selection:bg-transparent' />
        <ul className='list-none flex items-center gap-12'>
          <li><Link href="/" className='link-nav selection:bg-[#F2921D] selection:text-white'>Início</Link></li>
          <li><Link href="/services" className='link-nav selection:bg-[#F2921D] selection:text-white'>Serviços</Link></li>
          <li><Link href="/" className='link-nav selection:bg-[#F2921D] selection:text-white'>Parcerias</Link></li>
          <li><Link href="/" className='link-nav selection:bg-[#F2921D] selection:text-white'>Informações</Link></li>
          <li><Link href="/" className='link-nav selection:bg-[#F2921D] selection:text-white'>Contato</Link></li>
        </ul>
        {session?.user?.email ? (
          <div className='flex items-center gap-6'>
            <Link href={`/profile/${data._id}`}>
              <img src={session?.user?.image || ""} className='w-[40px] h-[40px] rounded-full cursor-pointer selection:bg-transparent' alt="Profile picture" />
            </Link>
            <button className='bg-[#F2921D] text-white p-2 rounded-xl w-[150px] selection:bg-transparent' onClick={() => signOut()}>
              Sair
            </button>
          </div>
        ) : (
          <div className='flex items-center gap-6'>
            <button className='bg-[#F2921D] text-white p-2 rounded-xl w-[150px] selection:bg-transparent transition-all duration-300 hover:scale-110' onClick={() => signIn()}>
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