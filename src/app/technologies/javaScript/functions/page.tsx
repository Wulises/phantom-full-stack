'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { functionsJs } from '@/data/javascript/functions'
import SubtemaItem from '@/components/subTopicItems'
import Link from 'next/link'

export default function FunctionsJs() {
    // Para función declarativa
    const [nombreParaSaludar, setNombreParaSaludar] = useState('Haru')
    const [resultadoSaludo, setResultadoSaludo] = useState('')

    // Para función expresiva / flecha
    const [a, setA] = useState(2)
    const [b, setB] = useState(3)
    const [resultadoOperacion, setResultadoOperacion] = useState<number | null>(null)

    // Para callbacks
    const [operadorElegido, setOperadorElegido] = useState<'sumar' | 'restar'>('sumar')
    const [resultadoCallback, setResultadoCallback] = useState<number | null>(null)

    // Para parámetros default / rest
    const [numsRest, setNumsRest] = useState<string>('1,2,3')
    const [resultadoRest, setResultadoRest] = useState<number | null>(null)

    // === funciones internas ===

    function saludar(nombre: string) {
        return `Hola, ${nombre}!`
    }

    const sumarFunc = function (x: number, y: number) {
        return x + y
    }
    const multiplicarArrow = (x: number, y: number) => x * y

    const operacionCallback = (
        x: number,
        y: number,
        fn: (u: number, v: number) => number
    ) => {
        return fn(x, y)
    }

    const sumaRest = (...nums: number[]) => {
        return nums.reduce((acc, cur) => acc + cur, 0)
    }

    // === handlers ===

    const handleSaludo = () => {
        setResultadoSaludo(saludar(nombreParaSaludar))
    }

    const handleOperacion = () => {
        let res: number
        if (operadorElegido === 'sumar') {
            // puedes usar función expresiva
            res = operacionCallback(a, b, sumarFunc)
        } else {
            res = operacionCallback(a, b, (x, y) => x - y)
        }
        setResultadoOperacion(res)
        setResultadoCallback(res)
    }

    const handleRest = () => {
        const arr = numsRest
            .split(',')
            .map((s) => Number(s.trim()))
            .filter((n) => !isNaN(n))
        setResultadoRest(sumaRest(...arr))
    }

    return (
        <main className="min-h-screen bg-gradient-to-br from-velvet to-royal px-6 py-10 space-y-12">
            <motion.h1
                className="text-center text-5xl font-phantom text-MAzul mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                Funciones en JavaScript
            </motion.h1>

            <p className="text-center text-sm text-white/60 italic mb-10">
                Aprende a crear funciones declarativas, flecha, callbacks, parámetros default y rest.
            </p>

            {/* Función declarativa */}
            <div className="space-y-6">
                <SubtemaItem {...functionsJs[0]} />
                <div className='bg-black/30 border-l-4 border-KRojo p-6 rounded-xl shadow-inner space-y-4'>
                    <h3 className="text-2xl font-phantom text-KRojo">Ejemplo – función declarativa</h3>
                    <input
                        type="text"
                        placeholder="Ingresa un nombre"
                        className="w-full p-2 rounded-md bg-black/80 border border-white/20 text-white"
                        value={nombreParaSaludar}
                        onChange={(e) => setNombreParaSaludar(e.target.value)}
                    />
                    <button
                        onClick={handleSaludo}
                        className="bg-KRojo hover:bg-KRojo/80 text-white px-4 py-2 rounded-md font-bold"
                    >
                        Saludar
                    </button>
                    {resultadoSaludo && (
                        <p className="text-green-400 font-mono bg-black/60 p-4 rounded">{resultadoSaludo}</p>
                    )}
                </div>
            </div>

            {/* Función expresiva / flecha + callback */}
            <div className="space-y-6">
                <SubtemaItem {...functionsJs[1]} />
                <SubtemaItem {...functionsJs[2]} />
                <SubtemaItem {...functionsJs[3]} />
                <div className='bg-black/30 border-l-4 border-MAzul p-6 rounded-xl shadow-inner space-y-4'>
                    <h3 className="text-2xl font-phantom text-MAzul">Ejemplo – callback / flecha / expresiva</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-white">A:</label>
                            <input
                                type="number"
                                className="w-full p-2 rounded-md bg-black/80 border border-white/20 text-white"
                                value={a}
                                onChange={(e) => setA(Number(e.target.value))}
                            />
                        </div>
                        <div>
                            <label className="text-white">B:</label>
                            <input
                                type="number"
                                className="w-full p-2 rounded-md bg-black/80 border border-white/20 text-white"
                                value={b}
                                onChange={(e) => setB(Number(e.target.value))}
                            />
                        </div>
                    </div>
                    <div className="mt-4 flex space-x-4">
                        <button
                            onClick={() => {
                                setOperadorElegido('sumar')
                                handleOperacion()
                            }}
                            className="bg-MAzul hover:bg-MAzul/80 text-black px-4 py-2 rounded-md font-bold"
                        >
                            Sumar
                        </button>
                        <button
                            onClick={() => {
                                setOperadorElegido('restar')
                                handleOperacion()
                            }}
                            className="bg-KRojo hover:bg-KRojo/80 text-white px-4 py-2 rounded-md font-bold"
                        >
                            Restar
                        </button>
                    </div>
                    {resultadoCallback !== null && (
                        <p className="text-green-400 font-mono">
                            Resultado: {resultadoCallback}
                        </p>
                    )}
                </div>
            </div>

            {/* Parámetros default / rest */}
            <div className="space-y-6">
                <SubtemaItem {...functionsJs[4]} />
                <div className='bg-black/30 border-l-4 border-HMorado p-6 rounded-xl shadow-inner space-y-4'>
                    <h3 className="text-2xl font-phantom text-HMorado">Ejemplo – default / rest</h3>
                    <input
                        type="text"
                        placeholder="Ej: 1,2,3,4"
                        className="w-full p-2 rounded-md bg-black/80 border border-white/20 text-white"
                        value={numsRest}
                        onChange={(e) => setNumsRest(e.target.value)}
                    />
                    <button
                        onClick={handleRest}
                        className="bg-HMorado hover:bg-HMorado/80 text-white px-4 py-2 rounded-md font-bold"
                    >
                        Sumar valores
                    </button>
                    {resultadoRest !== null && (
                        <p className="text-green-400 font-mono">
                            Resultado suma: {resultadoRest}
                        </p>
                    )}
                </div>
            </div>

            {/* Vista anticipada: async / Promesas */}
            <div className="space-y-6">
                <SubtemaItem {...functionsJs[5]} />
                <p className="text-white/90 italic">
                    (Este tema se verá con más detalle más adelante)
                </p>
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
