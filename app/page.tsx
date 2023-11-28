import PlanCard from '@/components/PlanCard'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='w-full flex flex-col items-center p-[2%] sm:p-[5%]'>
      <section className='w-full max-w-[1400px] flex flex-col items-center'>
        <h1 className='text-4xl font-bold'>Bem-Vindo ao Academy</h1>
        <p className='italic'>Uma plataforma que fará você evoluir ao máximo</p>
        <div className='p-4 border border-neutral-200 rounded-lg flex justify-between gap-6 mt-[75px] max-w-[800px] w-full'>
          <input type="text" placeholder='Buscar academia' className='outline-none w-full border-b border-neutral-200 px-2 text-sm'/>
          <button className='bg-[#F2921D] p-2 rounded-xl text-white w-[125px]'>
            Buscar
          </button>
        </div>
      </section>

      <section className='pt-[65px] mt-[65px] border-t border-neutral-200'>
        <h1 className='text-2xl font-bold'>Confira nossos planos</h1>
        <div className='flex items-center gap-14 mt-14'>
          <PlanCard type='normal' />
          <PlanCard type='premium' />
        </div>
      </section>
    </div>
  )
}
