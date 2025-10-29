'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { destructuringAndSpread } from '@/data/javascript/destructuringSpread'
import SubtemaItem from '@/components/subTopicItems'
import Link from 'next/link'

export default function DestructuringJs() {
  // === 1. Destructuración de objetos ===
  const [persona] = useState<{ [key: string]: any }>({
    nombre: 'Haru',
    edad: 27,
    ciudad: 'Tokyo',
  })
  const [propToExtract, setPropToExtract] = useState('nombre')
  const [outputObjResult, setOutputObjResult] = useState('')

  // === 2. Destructuración de arrays ===
  const [colores, setColores] = useState(['rojo', 'verde', 'azul'])
  const [indexToExtract, setIndexToExtract] = useState(0)
  const [outputArrResult, setOutputArrResult] = useState('')

  // === 3. Rest en objetos ===
  const [propToOmit, setPropToOmit] = useState('nombre')
  const [restObjResult, setRestObjResult] = useState('')

  // === 4. Spread en arrays ===
  const [arrayA] = useState([1, 2])
  const [arrayB] = useState([3, 4, 5])
  const [spreadResult, setSpreadResult] = useState('')

  // === Handlers ===
  const handleDestructureObject = () => {
    const valor = (persona as any)[propToExtract]
    setOutputObjResult(
      valor !== undefined
        ? `Valor de "${propToExtract}": ${JSON.stringify(valor)}`
        : 'Propiedad no encontrada.'
    )
  }

  const handleDestructureArray = () => {
    if (indexToExtract < 0 || indexToExtract >= colores.length) {
      setOutputArrResult('Índice fuera de rango.')
    } else {
      setOutputArrResult(
        `Valor en índice ${indexToExtract}: ${colores[indexToExtract]}`
      )
    }
  }

  const handleRestObject = () => {
    if (!(propToOmit in persona)) {
      setRestObjResult(`Propiedad "${propToOmit}" no encontrada.`)
      return
    }
    const { [propToOmit]: _, ...resto } = persona
    setRestObjResult(
      `Objeto sin "${propToOmit}": ${JSON.stringify(resto, null, 2)}`
    )
  }

  const handleSpreadArrays = () => {
    const combinado = [...arrayA, ...arrayB]
    setSpreadResult(`Resultado: ${JSON.stringify(combinado)}`)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-velvet to-royal px-6 py-10 space-y-12">
      <motion.h1
        className="text-center text-5xl font-phantom text-MAzul mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Desestructuración y Spread / Rest
      </motion.h1>

      <p className="text-center text-sm text-white/60 italic mb-10">
        Aprende a extraer, combinar y omitir datos de forma elegante — justo
        como un Phantom Thief planificando un golpe perfecto 🎭
      </p>

      {/* === Desestructuración de objetos === */}
      <div className="space-y-6">
        <SubtemaItem {...destructuringAndSpread[0]} />
        <div className="bg-black/30 border-l-4 border-KRojo p-6 rounded-xl shadow-inner space-y-4">
          <h3 className="text-2xl font-phantom text-KRojo">
            Ejemplo – desestructuración de objetos
          </h3>
          <p className="text-white/70 text-sm italic">
            Tienes el siguiente objeto:
          </p>
          <pre className="bg-black/60 text-green-400 font-mono p-4 rounded">
            {JSON.stringify(persona, null, 2)}
          </pre>
          <p className="text-white/70 text-sm italic">
            Escribe una propiedad para extraer su valor (<code>nombre</code>,{' '}
            <code>edad</code> o <code>ciudad</code>).
          </p>
          <input
            type="text"
            value={propToExtract}
            onChange={(e) => setPropToExtract(e.target.value)}
            className="w-full p-2 rounded bg-black/80 border border-white/20 text-white"
            placeholder="Propiedad a extraer"
          />
          <button
            onClick={handleDestructureObject}
            className="bg-KRojo hover:bg-KRojo/80 text-white px-4 py-2 rounded font-bold"
          >
            Extraer
          </button>
          {outputObjResult && (
            <p className="text-green-400 font-mono bg-black/60 p-4 rounded">
              {outputObjResult}
            </p>
          )}
        </div>
      </div>

      {/* === Desestructuración de arrays === */}
      <div className="space-y-6">
        <SubtemaItem {...destructuringAndSpread[1]} />
        <div className="bg-black/30 border-l-4 border-MAzul p-6 rounded-xl shadow-inner space-y-4">
          <h3 className="text-2xl font-phantom text-MAzul">
            Ejemplo – desestructuración de arrays
          </h3>
          <p className="text-white/70 text-sm italic">Colores disponibles:</p>
          <pre className="bg-black/60 text-green-400 font-mono p-4 rounded">
            {JSON.stringify(colores)}
          </pre>
          <label className="text-white text-sm">
            Selecciona un índice (0, 1 o 2):
          </label>
          <input
            type="number"
            value={indexToExtract}
            onChange={(e) => {
              const val = e.target.value
              setIndexToExtract(val === '' ? -1 : Number(val))
            }}
            className="w-full p-2 rounded bg-black/80 border border-white/20 text-white"
          />
          <button
            onClick={handleDestructureArray}
            className="bg-MAzul hover:bg-MAzul/80 text-black px-4 py-2 rounded font-bold"
          >
            Ver valor
          </button>
          {outputArrResult && (
            <p className="text-green-400 font-mono bg-black/60 p-4 rounded">
              {outputArrResult}
            </p>
          )}
        </div>
      </div>

      {/* === Rest en objetos === */}
      <div className="space-y-6">
        <SubtemaItem {...destructuringAndSpread[2]} />
        <div className="bg-black/30 border-l-4 border-HMorado p-6 rounded-xl shadow-inner space-y-4">
          <h3 className="text-2xl font-phantom text-HMorado">
            Ejemplo – rest en objetos
          </h3>
          <p className="text-white/70 text-sm italic">
            A partir del mismo objeto <code>persona</code>, elige una propiedad
            para <b>omitir</b> y obtener el resto.
          </p>
          <input
            type="text"
            value={propToOmit}
            onChange={(e) => setPropToOmit(e.target.value)}
            className="w-full p-2 rounded bg-black/80 border border-white/20 text-white"
            placeholder="Propiedad a omitir"
          />
          <button
            onClick={handleRestObject}
            className="bg-HMorado hover:bg-HMorado/80 text-white px-4 py-2 rounded font-bold"
          >
            Obtener resto
          </button>
          {restObjResult && (
            <pre className="text-green-400 font-mono bg-black/60 p-4 rounded whitespace-pre-wrap">
              {restObjResult}
            </pre>
          )}
        </div>
      </div>

      {/* === Spread en arrays === */}
      <div className="space-y-6">
        <SubtemaItem {...destructuringAndSpread[3]} />
        <div className="bg-black/30 border-l-4 border-KRojo p-6 rounded-xl shadow-inner space-y-4">
          <h3 className="text-2xl font-phantom text-KRojo">
            Ejemplo – spread en arrays
          </h3>
          <p className="text-white/70 text-sm italic">
            Combina los siguientes arrays usando el operador <code>...</code>:
          </p>
          <pre className="bg-black/60 text-green-400 font-mono p-4 rounded">
            A = {JSON.stringify(arrayA)} <br />B = {JSON.stringify(arrayB)}
          </pre>
          <button
            onClick={handleSpreadArrays}
            className="bg-KRojo hover:bg-KRojo/80 text-white px-4 py-2 rounded font-bold"
          >
            Combinar arrays
          </button>
          {spreadResult && (
            <p className="text-green-400 font-mono bg-black/60 p-4 rounded">
              {spreadResult}
            </p>
          )}
        </div>
      </div>

      {/* === Volver === */}
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
