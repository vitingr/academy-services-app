"use client"

import { infoUser } from '@/common/utils/userContext'
import Popup from '@/components/Popup/Popup'
import Service from '@/components/Service'
import ToastMessage from '@/components/ToastMessage'
import { ServiceProps } from '@/types'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const page = () => {

  const [services, setServices] = useState<ServiceProps[]>([])
  const [showCreateServiceForm, setShowCreateServiceForm] = useState<boolean>(false)
  const [serviceName, setServiceName] = useState<string>("")
  const [serviceDescription, setServiceDescription] = useState<string>("")
  const [serviceValue, setServiceValue] = useState<string>("")

  const createService = async () => {
    try {
      const response = await fetch("http://localhost:3030/services/create", {
        method: "POST",
        body: JSON.stringify({
          Title: serviceName,
          Description: serviceDescription,
          price: Number(serviceValue)
        })
      })
      if (response.ok) {
        toast.success("Serviço adicionado com sucesso!")
      } else {
        toast.error("ERRO! Não foi possível adicionar o serviço")
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getAllServices = async () => {
    try {
      const requisition = await fetch("http://localhost:3030/services")
      const response = await requisition.json()
      setServices(response)
    } catch (error) {
      console.log(error)
    }
  }

  const { data } = infoUser()

  useEffect(() => {
    if (data._id !== undefined) {
      getAllServices()
    }
  }, [data])

  return (
    <div className='w-full flex flex-col items-center p-[2%] sm:p-[5%]'>
      <ToastMessage />
      <h1 className='text-4xl font-semibold'>Nossos Serviços</h1>
      <div className='flex gap-6 items-center flex-wrap w-full max-w-[1600px] justify-center mt-20'>
        {services.map((service: ServiceProps) => (
          <Service key={service._id} content={service} handleFunction={getAllServices()} />
        ))}
      </div>
      {data.admin ? (
        <button className='w-[250px] text-[#F2921D] underline underline-offset-2 rounded-xl p-2 mt-20' onClick={() => setShowCreateServiceForm(!showCreateServiceForm)}>
          Adicionar Serviço
        </button>
      ) : (<></>)}
      {showCreateServiceForm ? (
        <Popup title='Adicionar Serviço' >
          <form onSubmit={createService} className='mt-14 flex flex-col'>
            <label htmlFor="service_name" className='text-base'>Título do Serviço</label>
            <input type="text" name="service_name" id="service_name" className='w-full outline-none pl-4 pr-4 pt-2 pb-2 border border-neutral-200 rounded-lg mt-1 text-sm text-[#717171] mb-8 max-w-[450px]' placeholder='Digite um título' autoComplete='off' minLength={2} maxLength={55} onChange={(e) => setServiceName(e.target.value)} required />

            <label htmlFor="description" className='text-base'>Descrição</label>
            <input type="text" name="description" id="description" className='w-full outline-none pl-4 pr-4 pt-2 pb-2 border border-neutral-200 rounded-lg mt-1 text-sm text-[#717171] mb-8 max-w-[450px]' placeholder='Digite uma descrição' autoComplete='off' minLength={2} maxLength={55} onChange={(e) => setServiceDescription(e.target.value)} required />

            <label htmlFor="price" className='text-base'>Preço</label>
            <input type="number" name="price" id="price" className='w-full outline-none pl-4 pr-4 pt-2 pb-2 border border-neutral-200 rounded-lg mt-1 text-sm text-[#717171] mb-8 max-w-[450px]' placeholder='Preço do serviço oferecido' autoComplete='off' min={2} max={300} onChange={(e) => setServiceValue(e.target.value)} required />

            <button type='submit' className='text-white bg-[#F2921D] rounded-xl p-2 w-full selection:bg-transparent mt-20'>
              Adicionar Serviço
            </button>
          </form>
        </Popup>
      ) : (<></>)}

    </div>
  )
}

export default page