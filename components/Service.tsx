import { infoUser } from '@/common/utils/userContext'
import { ServicePageProps } from '@/types'
import React from 'react'
import { IoMdTrash } from "react-icons/io";
import ToastMessage from './ToastMessage';
import { toast } from 'react-toastify';

const Service = ({ content, handleFunction }: ServicePageProps) => {

  const { data } = infoUser()

  const signService = async () => {
    try {
      var newSubscribers = `${content.subscribers} ${data._id}`
      const response = await fetch("http://localhost:3030/services/update", {
        method: "POST",
        body: JSON.stringify({
          Id: content._id,
          Description: content.description,
          Price: Number(content.price),
          Subscribers: newSubscribers,
          Title: content.title,
        })
      })
      if (response.ok) {
        toast.success("Você assinou o serviço")
        handleFunction()
      } else {
        toast.error("ERRO! Não foi possível assinar o serviço")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='p-6 border border-neutral-200 rounded-lg w-[300px]'>
      <ToastMessage />
      <div className='flex justify-between w-full items-center'>
        <h1 className='text-lg font-semibold text-center mt-2'>{content.title}</h1>
        {data.admin ? (
          <IoMdTrash size={20} className="cursor-pointer" />
        ) : (<></>)}
      </div>
      <p className='mt-4 text-[#717171] text-sm text-justify'>{content.description} Lorem, ipsum dolor sit amet consectetur adipisicing elit. In ipsam magnam magni nemo, tenetur officia amet veritatis, nobis repellendus velit voluptates dolore architecto. Cum deserunt ipsum impedit quos consequuntur animi?</p>
      <p className='text-sm mt-6 flex w-full justify-between text-[#717171]'>Preço <span>{content.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span></p>
      {content.subscribers.includes(data._id) ? (
        <p className='text-[#F2921D] mt-10 w-full text-center'>
          Você possui esse serviço
        </p>
      ) : (
        <button className='text-white bg-[#F2921D] rounded-xl selection:bg-transparent p-2 mt-10 w-full' onClick={() => signService()}> 
          Assinar Serviço
        </button>
      )}
    </div>
  )
}

export default Service