import React from 'react'

const page = () => {
  return (
    <div className='w-full flex flex-col items-center p-[2%] sm:p-[5%]'>
      <h1 className='text-3xl font-bold'>Sobre a </h1>
      <h3 className='text-3xl font-bold text-[#F2921D]'>Academy Platform</h3>

      <h5 className='mt-12 text-center text-sm max-w-[800px]'>Aqui, a nossa missão é proporcionar uma experiência de fitness excepcional, onde a saúde e o bem-estar se encontram. Somos mais do que apenas uma academia; somos uma comunidade comprometida com o seu sucesso e vitalidade.</h5>

      <section className='mt-20 max-w-[900px]'>
        <h2 className='font-semibold'>Nossas instalações</h2>
        <p className='mt-2 text-[#717171] text-justify'>Oferecemos uma ampla gama de instalações de última geração, equipadas com tecnologia de ponta para atender às suas necessidades de treinamento. Desde a nossa espaçosa área de musculação até as salas dedicadas a aulas de grupo, cada espaço é projetado para inspirar e motivar.</p>
      </section>

      <section className='mt-14 max-w-[900px]'>
        <h2 className='font-semibold'>Treinadores Especializados</h2>
        <p className='mt-2 text-[#717171] text-justify'>Aquivocê terá acesso a uma equipe de treinadores altamente qualificados e experientes. Estamos aqui para orientar, motivar e personalizar programas de treinamento de acordo com seus objetivos individuais. Seja você um iniciante ou um atleta experiente, nossa equipe está comprometida em ajudá-lo a alcançar seus objetivos.</p>
      </section>

      <section className='mt-14 max-w-[900px]'>
        <h2 className='font-semibold'>Variedade de Aulas</h2>
        <p className='mt-2 text-[#717171] text-justify'>Nossa programação abrangente de aulas inclui desde as tradicionais aulas de spinning e yoga até as inovadoras aulas de treinamento funcional. Independentemente do seu nível de condicionamento físico ou preferências de exercício, temos algo para todos.</p>
      </section>

      <section className='mt-14 max-w-[900px]'>
        <h2 className='font-semibold'>Ambiente Amigável</h2>
        <p className='mt-2 text-[#717171] text-justify'>Aqui, você não é apenas um número. A [Nome da Academia] é conhecida por sua atmosfera acolhedora e amigável. Nossa comunidade de membros é diversificada e inclusiva, proporcionando um ambiente onde todos se sentem bem-vindos e motivados.</p>
      </section>

      <section className='mt-14 max-w-[900px]'>
        <h2 className='font-semibold'>Horários Flexíveis</h2>
        <p className='mt-2 text-[#717171] text-justify'>Compreendemos a importância da flexibilidade em sua agenda lotada. Oferecemos horários de funcionamento estendidos, permitindo que você treine quando for mais conveniente para você.</p>
      </section>

      <section className='mt-14 max-w-[900px]'>
        <h2 className='font-semibold'>Experimente uma Aula Grátis</h2>
        <p className='mt-2 text-[#717171] text-justify'>Estamos tão confiantes de que você se apaixonará pela nossa academia que oferecemos uma aula experimental gratuita. Venha nos visitar e descubra como podemos ajudá-lo a alcançar seus objetivos de fitness.</p>
      </section>
    </div>
  )
}

export default page