'use client'

import { scopeHoistingJs } from '@/data/javascript/scopeHoisting'
import SubtemaItem from '@/components/subTopicItems'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

export default function TeAmoHaru() {

    // Estado del primer juego (scope)
    const [, setRespuestaScope] = useState<string | null>(null)
    const [feedbackScope, setFeedbackScope] = useState<string | null>(null)

    // Estado del segundo juego (hoisting)
    const [respuestaHoisting, setRespuestaHoisting] = useState('')
    const [feedbackHoisting, setFeedbackHoisting] = useState<string | null>(null)

    // Código de ejemplo para scope
    const codigoScope = `function test() {
  if (true) {
    let x = 5;
    console.log(x);
  }
}`

    const opcionesScope = ['Global', 'Función', 'Bloque']

    const verificarScope = (opcion: string) => {
        setRespuestaScope(opcion)
        if (opcion === 'Bloque') {
            setFeedbackScope('✅ Correcto. Kasumi te felicita por entender el alcance de bloque.')
        } else {
            setFeedbackScope('❌ No es correcto. La variable `x` vive en el bloque más interno.')
        }
    }

    // Código de ejemplo para hoisting
    const codigoHoisting = `console.log(valor);
var valor = 10;`

    const verificarHoisting = () => {
        // la respuesta esperada es "undefined"
        if (respuestaHoisting.trim().toLowerCase() === 'undefined') {
            setFeedbackHoisting('✅ Bien hecho. Makoto aprueba tu inteligencia lógica.')
        } else {
            setFeedbackHoisting(`❌ Casi. La respuesta correcta es "undefined". Tú pusiste "${respuestaHoisting}".`)
        }
    }

    return (

        <main className='main-h-screen bg-gradient-to-br from velvet to-royal px-5 py-10'>

            <motion.h1
                className="text-center text-5xl font-phantom text-HMorado mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                Scope y Hoisting en JavaScript
            </motion.h1>

            <p className='text-center text-sm text-white/60 italic mb-10'>
                Explora cómo funciona el alcance de variables y el hoisting con ejemplos interactivos.
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

                {scopeHoistingJs.map((h, i) => (

                    <motion.div key={i} variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
                        <SubtemaItem {...h} />
                    </motion.div>

                ))}

            </motion.div>

            {/* Juego 1: dónde vive la variable */}
            <br /><br />
            <div className="bg-velvet border-l-4 border-KRojo p-10 rounded-xl  font-body hover:scale-[1.01] transition-all duration-300 space-y-4 hover:ring-2 hover:ring-KRojo">
                <h3 className="text-2xl font-phantom text-KRojo">Juego – ¿Dónde vive la variable?</h3>
                <pre className="bg-black/90 text-green-400 p-6 rounded-md text-base overflow-auto border border-white/10 shadow-inner whitespace-pre font-mono">{codigoScope}</pre>
                <div className="flex space-x-4">
                    {opcionesScope.map((opt) => (
                        <button
                            key={opt}
                            onClick={() => verificarScope(opt)}
                            className="px-4 py-2 bg-KRojo hover:bg-KRojo/80 text-black rounded-md font-bold"
                        >
                            {opt}
                        </button>
                    ))}
                </div>
                {feedbackScope && (
                    <p className={`mt-2 font-mono ${feedbackScope.startsWith('✅') ? 'text-green-400' : 'text-KRojo'}`}>
                        {feedbackScope}
                    </p>
                )}
            </div><br />

            {/* Juego 2: qué se imprime (hoisting) */}
            <div className="bg-velvet border-l-4 border-MAzul p-10 rounded-xl  font-body hover:scale-[1.01] transition-all duration-300 space-y-4 hover:ring-2 hover:ring-MAzul">
                <h3 className="text-2xl font-phantom text-HMorado">Juego – ¿Qué se imprime?</h3>
                <pre className="bg-black/90 text-green-400 p-6 rounded-md text-base overflow-auto border border-white/10 shadow-inner whitespace-pre font-mono">{codigoHoisting}</pre>
                <div className="flex items-center space-x-2">
                    <input
                        type="text"
                        placeholder="Escribe tu respuesta"
                        className="p-2 rounded-md bg-black/80 border border-MAzul/55 text-white flex-grow"
                        value={respuestaHoisting}
                        onChange={(e) => setRespuestaHoisting(e.target.value)}
                    />
                    <button
                        onClick={verificarHoisting}
                        className="px-4 py-2 bg-HMorado hover:bg-HMorado/80 text-white rounded-md font-bold"
                    >
                        Verificar
                    </button>
                </div>
                {feedbackHoisting && (
                    <p className={`mt-2 font-mono ${feedbackHoisting.startsWith('✅') ? 'text-green-400' : 'text-red-400'}`}>
                        {feedbackHoisting}
                    </p>
                )}
            </div>

            <div className="text-center mt-10">
                <Link href="/technologies/javaScript">
                    <button className="bg-HMorado hover:bg-HMorado/80 text-white px-6 py-2 rounded-full shadow-md transition-all duration-300">
                        Volver al menú de subtemas
                    </button>
                </Link>
            </div>


        </main>

    )

}