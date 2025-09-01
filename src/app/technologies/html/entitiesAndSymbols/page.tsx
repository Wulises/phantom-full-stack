'use client';
import { entitiesAndSymbolsHTML } from '@/data/html/entitiesAndSymbols'
import SubtemaItem from '@/components/subTopicItems'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function TEAMOSUMIRE() {

  return (

    <main className='main-h-screen bg-gradient-to-br from velvet to-royal px-5 py-10'>

      <motion.h1
        className="text-center text-5xl font-phantom text-HMorado mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Entidades y Símbolos en HTML
      </motion.h1>

      <p className='text-center text-sm text-white/60 italic mb-10'>
        Estructura y atributos esenciales para mostrar datos tabulados.
      </p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 },
          },
        }}
      >
        {entitiesAndSymbolsHTML.map((item, i) => (
          <motion.div key={i} variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
            <SubtemaItem {...item} />
          </motion.div>
        ))}
      </motion.div>

      {/* Botón para regresar al menú de subtemas */}
      <div className="text-center mt-10">
        
        <Link href="/technologies/html">

          <button className="bg-HMorado hover:bg-HMorado/80 text-white px-6 py-2 rounded-full shadow-md transition-all duration-300">
            Volver al menú de subtemas
          </button>

        </Link>

      </div>

    </main>
  );
}
