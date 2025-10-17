'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { destructuringAndSpread } from '@/data/javascript/destructuringSpread'
import SubtemaItem from '@/components/subTopicItems'
import Link from 'next/link'

export default function DestructuringJs() {
  // === Estados para ejemplos interactivos ===

  // 1. Destructuración de objetos
  const [inputObj, setInputObj] = useState('{"nombre": "Haru", "edad": 25, "ciudad": "Tokyo"}')
  const [propToExtract, setPropToExtract] = useState('nombre')
  const [outputObjResult, setOutputObjResult] = useState('')

  // 2. Destructuración de arrays
  const [inputArr, setInputArr] = useState('["rojo", "verde", "azul"]')
  const [indexToExtract, setIndexToExtract] = useState(0)
  const [outputArrResult, setOutputArrResult] = useState('')

  // 3. Rest en objetos
  const [propToOmit, setPropToOmit] = useState('nombre')
  const [restObjResult, setRestObjResult] = useState('')

  // 4. Spread en arrays
  const [arrayA, setArrayA] = useState('[1, 2]')
  const [arrayB, setArrayB] = useState('[3, 4]')
  const [spreadResult, setSpreadResult] = useState('')

  // === Handlers ===

  const handleDestructureObject = () => {
    try {
      const parsed = JSON.parse(inputObj)
      const valor = parsed[propToExtract]
      setOutputObjResult(`Valor de "${propToExtract}": ${JSON.stringify(valor)}`)
    } catch {
      setOutputObjResult('❌ Objeto inválido.')
    }
  }

  const handleDestructureArray = () => {
    try {
      const parsed = JSON.parse(inputArr)
      const valor = parsed[indexToExtract]
      setOutputArrResult(`Valor en índice ${indexToExtract}: ${JSON.stringify(valor)}`)
    } catch {
      setOutputArrResult('❌ Array inválido.')
    }
  }

  const handleRestObject = () => {
    try {
      const parsed = JSON.parse(inputObj)
      const { [propToOmit]: omitido, ...resto } = parsed
      setRestObjResult(`Sin "${propToOmit}": ${JSON.stringify(resto)}`)
    } catch {
      setRestObjResult('❌ Objeto inválido.')
    }
  }

  const handleSpreadArrays = () => {
    try {
      const a = JSON.parse(arrayA)
      const b = JSON.parse(arrayB)
      const combinado = [...a, ...b]
      setSpreadResult(`Resultado: ${JSON.stringify(combinado)}`)
    } catch {
      setSpreadResult('❌ Uno de los arrays es inválido.')
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-velvet to-royal px-6 py-10 space-y-12">
      <motion.h1
        className="text-center text-5xl font-phantom text-MAzul mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Desestructuración y Spread/Rest
      </motion.h1>

      <p className="text-center text-sm text-white/60 italic mb-10">
        Aprende a extraer y combinar datos con precisión y estilo.
      </p>

      {/* Desestructuración de objetos */}
      <div className="space-y-6">
        <SubtemaItem {...destructuringAndSpread[0]} />
        <div className="bg-black/30 border-l-4 border-KRojo p-6 rounded-xl shadow-inner space-y-4">
          <h3 className="text-2xl font-phantom text-KRojo">Ejemplo – desestructuración de objetos</h3>
          <input
            type="text"
            value={inputObj}
            onChange={(e) => setInputObj(e.target.value)}
            className="w-full p-2 rounded bg-black/80 border border-white/20 text-white"
            placeholder='{"nombre": "Haru", "edad": 25}'
          />
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
            <p className="text-green-400 font-mono bg-black/60 p-4 rounded">{outputObjResult}</p>
          )}
        </div>
      </div>

      {/* Desestructuración de arrays */}
      <div className="space-y-6">
        <SubtemaItem {...destructuringAndSpread[1]} />
        <div className="bg-black/30 border-l-4 border-MAzul p-6 rounded-xl shadow-inner space-y-4">
          <h3 className="text-2xl font-phantom text-MAzul">Ejemplo – desestructuración de arrays</h3>
          <input
            type="text"
            value={inputArr}
            onChange={(e) => setInputArr(e.target.value)}
            className="w-full p-2 rounded bg-black/80 border border-white/20 text-white"
            placeholder='["rojo", "verde", "azul"]'
          />
          <input
            type="number"
            value={indexToExtract}
            onChange={(e) => setIndexToExtract(Number(e.target.value))}
            className="w-full p-2 rounded bg-black/80 border border-white/20 text-white"
            placeholder="Índice"
          />
          <button
            onClick={handleDestructureArray}
            className="bg-MAzul hover:bg-MAzul/80 text-black px-4 py-2 rounded font-bold"
          >
            Ver valor
          </button>
          {outputArrResult && (
            <p className="text-green-400 font-mono bg-black/60 p-4 rounded">{outputArrResult}</p>
          )}
        </div>
      </div>

      {/* Rest en objetos */}
      <div className="space-y-6">
        <SubtemaItem {...destructuringAndSpread[2]} />
        <div className="bg-black/30 border-l-4 border-HMorado p-6 rounded-xl shadow-inner space-y-4">
          <h3 className="text-2xl font-phantom text-HMorado">Ejemplo – rest en objetos</h3>
          <input
            type="text"
            value={inputObj}
            onChange={(e) => setInputObj(e.target.value)}
            className="w-full p-2 rounded bg-black/80 border border-white/20 text-white"
          />
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
            <p className="text-green-400 font-mono bg-black/60 p-4 rounded">{restObjResult}</p>
          )}
        </div>
      </div>

      {/* Spread en arrays */}
      <div className="space-y-6">
        <SubtemaItem {...destructuringAndSpread[5]} />
        <div className="bg-black/30 border-l-4 border-KRojo p-6 rounded-xl shadow-inner space-y-4">
          <h3 className="text-2xl font-phantom text-KRojo">Ejemplo – spread en arrays</h3>
          <input
            type="text"
            value={arrayA}
            onChange={(e) => setArrayA(e.target.value)}
            className="w-full p-2 rounded bg-black/80 border border-white/20 text-white"
            placeholder="[1,2]"
          />
          <input
            type="text"
            value={arrayB}
            onChange={(e) => setArrayB(e.target.value)}
            className="w-full p-2 rounded bg-black/80 border border-white/20 text-white"
            placeholder="[3,4]"
          />
          <button
            onClick={handleSpreadArrays}
            className="bg-KRojo hover:bg-KRojo/80 text-white px-4 py-2 rounded font-bold"
          >
            Combinar arrays
          </button>
          {spreadResult && (
            <p className="text-green-400 font-mono bg-black/60 p-4 rounded">{spreadResult}</p>
          )}
        </div>
      </div>

      {/* Volver */}
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