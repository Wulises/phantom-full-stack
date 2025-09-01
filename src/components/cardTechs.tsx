'use client'
import { useRouter  } from 'next/navigation'
import { motion } from 'framer-motion'

interface Props {
    title: string,
    descripcion: string,
    color: string,
    ruta: string,
}

export default function CardTechs({ title, descripcion, color, ruta}: Props){

    const router = useRouter()

    return ( 

        <motion.div
            role='button'
            tabIndex={0}
            onClick={() => router.push(ruta)}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                router.push(ruta)
                }
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className={`cursor-pointer p-6 rounded-xl shadow-lg transition-transform hover:scale-105 ${color}`}
        >
            
            <h2 className='text-2xl font-bold'> {title} </h2>
            <p className='mt-2 text-sm'> {descripcion} </p>

        </motion.div>

    )

}