import PlanCard from '@/components/PlanCard'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='w-full flex flex-col items-center p-[2%] sm:p-[5%]'>
      <section>
        <h1 className='text-4xl font-bold'>Bem-Vindo ao Academy</h1>
        <p className='italic'>Uma plataforma que fará você evoluir ao máximo</p>
      </section>

      <section className='pt-[65px] mt-[65px] border-t border-neutral-200'>
        <h1 className='text-2xl font-bold'>Confira nossos planos</h1>
        <div className='flex items-center gap-8 mt-14'>
          <PlanCard type='normal' />
          <PlanCard type='premium' />
        </div>
      </section>
    </div>
  )
}
