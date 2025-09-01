import Link from 'next/link'

export default function Home() { 

  return (

    <main className='flex flex-col items-center justify-center min-h-screen bg-[#0f0f1a] text-white text-center px-4'>

      <h1 className='text-6xl md:text-7xl text-HMorado mb-4 tracking-wide drop-shadow-lg'>
        Bienvenid@!!!
      </h1>

      <p className='mb-10 text-lg text-KRojo italic max-w-xL'>
        Domina tu Destino como desarrollador web fullstack
      </p>

      <Link
        href='/technologies/'
        className='bg-HMorado hover:bg-HMorado-700 px-8 py-4 rounded-full shadow-lg hover:scale-105 transition text-white-font-bold'
      >
        Entrar a las tecnologias
      </Link>

    </main>

  )
}
