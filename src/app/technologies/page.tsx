import Link from 'next/link'
import { technologies } from '@/data/techs'


export default function TechnologiesPage(){

    return ( 

        <main className='bg-[#0f0f1a] min-h-screen py-12 px-6'>

            <h1 className='text-center items-center text-4xl font-phantom text-KRojo mb-4'>TECNOLOGÍAS</h1>
            
            <p className='text-center items-center italic text-5m text-HMorado mb-8'>
                “La elegancia nace del caos que aprendemos a controlar.”
            </p>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>

                {technologies.map((techs) =>  (

                    <Link
                     key={techs.nombre}
                     href={techs.ruta}
                     className={`p-6 rounded-lg shadow-xl transform hover:scale-105 transition-all ${techs.color} text-black font-bold`}
                    >

                        <h2 className='text-3xl font-phantom mb-5 tracking-wide text-white drop-shadow'>
                            {techs.nombre}
                        </h2>

                        <p className='text-base font-body text-white/80'> {techs.descripcion} </p>

                    </Link>

                ))}

            </div>

        </main>

    )

}