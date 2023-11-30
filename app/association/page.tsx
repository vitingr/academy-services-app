import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='w-full flex flex-col items-center p-[2%] sm:p-[5%]'>
      <h1 className='text-3xl font-semibold'>Como ser nosso Parceiro?</h1>
      <h5 className='italic'>É muito fácil trabalhar conosco</h5>

      <div className='max-w-[1000px] flex flex-col gap-20 items-center mt-20 w-full'>
        <section className='max-w-[450px] flex flex-col items-center'>
          <img src="/assets/images/image1.svg" className='pt-6 pb-6 w-[300px] h-[300px]' alt="Image Create Restaurant" />
          <p className='text-center'>Ao clicar em "Quero fazer parte" você inicia seu cadastro para assinar um contrato online</p>
        </section>

        <section className='max-w-[450px] flex flex-col items-center'>
          <img src="/assets/images/image2.svg" className='pt-6 pb-6 w-[300px] h-[300px]' alt="Image Create Restaurant" />
          <p className='text-center'>Após a criação, é só seguir as nossas dicas para configurar o seu restaurante</p>   
        </section>

        <section className='max-w-[450px] flex flex-col items-center mt-[-50px]'>
          <img src="/assets/images/image3.svg" className='pt-6 pb-6 w-[300px] h-[300px]' alt="Image Create Restaurant" />
          <p className='text-center'>Pronto! Seu restaurante será nosso parceiro e já pode receber pedidos</p>
        </section>

        <Link href={"/"} className='bg-[#F2921D] text-white p-2 rounded-xl selection:bg-transparent w-[600px] mt-20 text-center'>
          Quero fazer parte
        </Link>
      </div>
    </div>
  )
}

export default page