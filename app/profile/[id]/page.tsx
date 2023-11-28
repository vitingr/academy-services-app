"use client"

import { UserProps } from '@/types'
import { useSession } from 'next-auth/react'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const page = () => {

  const [user, setUser] = useState<UserProps[] | any>([])

  const [firstname, setFirnName] = useState<string>("")
  const [lastname, setLastname] = useState<string>("")
  const [state, setState] = useState<string>("")
  const [city, setCity] = useState<string>("")
  const [street, setStreet] = useState<string>("")
  const [trainingPreference, setTrainingPreference] = useState<string>("")

  const pathname = usePathname().split("/")
  const query = pathname[2]

  const { data: session } = useSession()

  const getInfo = async () => {
    try {
      const requisition = await fetch(`http://localhost:3030/users/${query}`)
      const response = await requisition.json()
      setUser(response)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getInfo()
  }, [session])

  return (
    <div className='w-full flex flex-col p-[2%] sm:p-[5%] items-center'>
      <section className='w-full max-w-[1400px] flex flex-col'>
        <h1 className='text-3xl font-semibold'>Minhas Informações</h1>
        <form action="" className='flex flex-col items-center w-full mt-[75px]'>
          <div className='flex justify-between gap-6 w-full max-w-[650px]'>
            <div className='w-full flex flex-col'>
              <label htmlFor="firstname" className='text-lg'>Primeiro nome</label>
              <input type="text" name="firstname" id="firstname" className='w-full outline-none pl-4 pr-4 pt-2 pb-2 border border-neutral-200 rounded-lg mt-1 text-sm text-[#717171] mb-8 max-w-[450px]' placeholder='Digite o seu primeiro nome' autoComplete='off' minLength={2} maxLength={55} defaultValue={user.firstname || "Carregando..."} required />
            </div>
            <div className='w-full flex flex-col'>
              <label htmlFor="lastname" className='text-lg'>Segundo nome</label>
              <input type="text" name="lastname" id="lastname" className='w-full outline-none pl-4 pr-4 pt-2 pb-2 border border-neutral-200 rounded-lg mt-1 text-sm text-[#717171] mb-8 max-w-[450px]' placeholder='Digite o seu segundo nome' autoComplete='off' minLength={2} maxLength={55} defaultValue={user.lastname || "Carregando..."} required />
            </div>
          </div>
          <label htmlFor="preference" className='text-lg'>Preferencia de treino</label>
          <select name="preference" id="preference" className='w-full outline-none pl-4 pr-4 pt-2 pb-2 border border-neutral-200 rounded-lg mt-1 text-sm text-[#717171] mb-8 max-w-[650px]'>
            <option value="">Informe a sua preferência de treino</option>
          </select>
        </form>
      </section>
    </div>
  )
}

export default page