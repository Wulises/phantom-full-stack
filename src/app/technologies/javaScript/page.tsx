'use client'
import { subTopicsJs } from '@/data/javascript/subTopics' 
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function TechHTML() {

    const router = useRouter()
//   MAzul: "#1A40B6"        
    return ( 

        <main className='min-h-screen bg-gradient-to-br from-[#0f0f1a] via-velvet to-LAzcul px-6 py-10'>

            <h1 className='text-center text-5xl font-phantom text-MAzul mb-6'>
                TEMAS DE JAVASCRIPT
            </h1>
            <p className='text-center italic text-white/70 text-sm mb-10'>
                En esta sección aprenderás todo lo necesario para dominar JavaScript con fundamentos sólidos y avanzados.
            </p>

            <div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
                
                {subTopicsJs.map((h, m) =>  (

                    <div
                    key={m}
                    onClick={() =>  router.push(`/technologies/javaScript/${h.route}`)}
                    className='bg-MAzul/20 border-l-4 border-MAzul p-6 rounded-xl shadow-md hover:scale-[1.05] cursor-pointer transition-all space-y-3 '
                    >

                        <div> {h.icono} </div>
                        <h2 className='text-2xl font-phantom text-MAzul'> {h.name} </h2>
                        <p className='text-5m text-white/80'> {h.description} </p>

                    </div>
                ))}

            </div>

            <div className='text-center mt-10'>

                <Link href='/technologies'>

                    <button className='bg-MAzul hover:bg-MAzul/80 text-white px-6 py-2 rounded-full shadow-md transition-all duration-300'>
                        Volver al menú de tecnologies
                    </button>

                </Link>

            </div>

        </main>

    )

}