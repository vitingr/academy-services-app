import { PlanCardProps } from '@/types'
import React from 'react'

const PlanCard = ({ type }: PlanCardProps) => {
  return type === "normal" ? (
    <div className='p-6 rounded-xl shadow-md bg-white max-w-[450px] flex flex-col items-center'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/OOjs_UI_icon_userAvatar-progressive.svg/1200px-OOjs_UI_icon_userAvatar-progressive.svg.png" alt="User plan figure" className='w-[80px] h-[80px] mb-6 selection:bg-transparent mt-10' />
      <h1 className='text-3xl'>Plano</h1>
      <h3 className='text-lg text-indigo-500 font-bold'>Normal</h3>
      <p className='mt-6 text-center text-[#717171]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet natus itaque molestiae sunt maiores ratione ipsa quaerat, magni reiciendis! Harum commodi vitae debitis maiores labore cupiditate molestiae itaque, rerum ipsam! </p>

      <button className='w-full mt-10 p-2 rounded-xl bg-indigo-500 text-white selection:bg-transparent'>
        Assinar plano
      </button>
    </div>
  ): (
    <div className='p-6 rounded-xl shadow-md bg-white max-w-[450px] flex flex-col items-center'>
      <img src="https://cdn-icons-png.flaticon.com/512/9967/9967681.png" alt="Premium plan figure" className='w-[80px] h-[80px] mb-6 selection:bg-transparent mt-10' />
      <h1 className='text-3xl'>Plano</h1>
      <h3 className='text-lg text-[#F2921D] font-bold'>Premium</h3>
      <p className='mt-6 text-center text-[#717171]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel minima voluptas cupiditate debitis nihil nostrum eum porro aut fugit ratione at accusantium, eaque placeat nesciunt impedit sapiente sequi repellendus blanditiis.</p>

      <button className='w-full mt-10 p-2 rounded-xl bg-[#F2921D] text-white selection:bg-transparent'>
        Assinar plano
      </button>
    </div>
  )
}

export default PlanCard