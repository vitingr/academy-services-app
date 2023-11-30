import PlanCard from '@/components/PlanCard'

export default function Home() {
  return (
    <div className='w-full flex flex-col items-center p-[2%] sm:p-[5%]'>
      <section className='w-full max-w-[1400px] flex flex-col items-center'>
        <h1 className='text-4xl font-bold'>Bem Vindo à</h1>
        <h3 className='text-4xl font-bold text-[#F2921D]'>Academy Platform</h3>
        <p className='italic'>Uma plataforma que fará você evoluir ao máximo</p>
        <div className='p-4 border border-neutral-200 rounded-lg flex justify-between gap-6 mt-[75px] max-w-[800px] w-full'>
          <input type="text" placeholder='Buscar academia' className='outline-none w-full border-b border-neutral-200 px-2 text-sm' />
          <button className='bg-[#F2921D] p-2 rounded-xl text-white w-[125px]'>
            Buscar
          </button>
        </div>
      </section>

      <section className='max-w-[1200px] mt-[100px] w-full'>
        <h1 className='text-2xl font-semibold mb-12'>Nossas instalações</h1>
        <div className='w-full flex justify-around gap-6'>
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3e2e1f14197513.5627f3fa5604f.jpg" alt="Main Image" className='w-full max-w-[300px] h-[200px] shadow-md rounded-lg' />
          <img src="https://lh5.googleusercontent.com/p/AF1QipPb5pmotQxt4jxmP4N3z3R44ESJonEyQ4hcB8Nb=w500-h500-k-no" alt="Main Image" className='w-full max-w-[300px] h-[200px] shadow-md rounded-lg' />
          <img src="https://img.freepik.com/premium-photo/gym-fitness-club-with-yellow-black-design_258219-321.jpg" alt="Main Image" className='w-full max-w-[300px] h-[200px] shadow-md rounded-lg' />
        </div>
      </section>

      <section className='max-w-[1200px] pt-[65px] mt-[65px] border-t border-neutral-200 w-full'>
        <h1 className='text-2xl font-bold'>Confira nossos planos</h1>
        <div className='flex items-center justify-center gap-14 mt-14'>
          <PlanCard type='normal' />
          <PlanCard type='premium' />
        </div>
      </section>
    </div>
  )
}
