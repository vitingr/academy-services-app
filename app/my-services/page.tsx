"use client"

import { infoUser } from '@/common/utils/userContext'
import ToastMessage from '@/components/ToastMessage'
import { ServiceProps } from '@/types'
import React, { useEffect, useState } from 'react'
import { IoMdTrash } from 'react-icons/io'

const page = () => {

  const { data } = infoUser()
  const [services, setServices] = useState<ServiceProps[]>([])

  const getAllServices = async () => {
    try {
      const requisition = await fetch("http://localhost:3030/services")
      const response = await requisition.json()
      let myServices: ServiceProps[] = []
      response.forEach((service: ServiceProps) => {
        if (service.subscribers.includes(data._id)) {
          myServices.push(service)
        }
      });
      setServices(myServices)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (data._id !== undefined) {
      getAllServices()
    }
  }, [data])

  return (
    <div className='w-full flex flex-col items-center p-[2%] sm:p-[5%]'>
      <ToastMessage />
      <h1 className='text-4xl font-semibold'>Serviços Assinados</h1>
      {services.length > 0 ? (
        <div className='flex gap-6 items-center flex-wrap w-full max-w-[1600px] justify-center mt-20'>
          {services.map((service: ServiceProps) => (
            <div className='p-6 border border-neutral-200 rounded-lg w-[300px]' key={service._id}>
              <div className='flex justify-between w-full items-center'>
                <h1 className='text-lg font-semibold text-center mt-2'>{service.title}</h1>
                {data.admin ? (
                  <IoMdTrash size={20} className="cursor-pointer" />
                ) : (<></>)}
              </div>
              <p className='mt-4 text-[#717171] text-sm text-justify'>{service.description} Lorem, ipsum dolor sit amet consectetur adipisicing elit. In ipsam magnam magni nemo, tenetur officia amet veritatis, nobis repellendus velit voluptates dolore architecto. Cum deserunt ipsum impedit quos consequuntur animi?</p>
              <p className='text-sm mt-6 flex w-full justify-between text-[#717171]'>Preço <span>{service.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span></p>
            </div>
          ))}
        </div>
      ) : (
        <p className='mt-12'>Você ainda não assinou nenhum serviço...</p>
      )}
    </div>
  )
}

export default page