import { ServicePageProps } from '@/types'
import React from 'react'

const Service = ({ content }: ServicePageProps) => {
  return (
    <div className='p-6 border border-neutral-200 rounded-lg w-[300px]'>
      <h1 className='text-lg font-semibold text-center mt-2'>{content.title}</h1>
      <p className='mt-4 text-[#717171] text-sm text-justify'>{content.description} Lorem, ipsum dolor sit amet consectetur adipisicing elit. In ipsam magnam magni nemo, tenetur officia amet veritatis, nobis repellendus velit voluptates dolore architecto. Cum deserunt ipsum impedit quos consequuntur animi?</p>
      <p className='text-sm mt-6 flex w-full justify-between text-[#717171]'>Preço <span>{content.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span></p>
      <button className='text-white bg-[#F2921D] rounded-xl selection:bg-transparent p-2 mt-10 w-full'>
        Assinar Serviço
      </button>
    </div>
  )
}

export default Service