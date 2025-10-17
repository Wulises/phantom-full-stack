'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { higherOrderFunctionsJs } from '@/data/javascript/higherOrderFunctions'
import SubtemaItem from '@/components/subTopicItems'
import Link from 'next/link'

export default function HigherOrderFunctionsPage() {
    
  // === Estados ===
  const [numerosMap, setNumerosMap] = useState('1,2,3')
  const [resultadoMap, setResultadoMap] = useState<string>('')

  const [edadesFilter, setEdadesFilter] = useState('18,12,25,16')
  const [resultadoFilter, setResultadoFilter] = useState<string>('')

  const [numsReduce, setNumsReduce] = useState('5,10,15')
  const [resultadoReduce, setResultadoReduce] = useState<string>('')

  const [numsComp, setNumsComp] = useState('1,2,3,4,5')
  const [resultadoComp, setResultadoComp] = useState<string>('')

  // === Funciones ===
  const handleMap = () => {
    try {
      const arr = numerosMap.split(',').map(n => parseFloat(n.trim()))
      const mapped = arr.map(n => n * 2)
      setResultadoMap(JSON.stringify(mapped))
    } catch {
      setResultadoMap('❌ Entrada inválida.')
    }
  }

  const handleFilter = () => {
    try {
      const arr = edadesFilter.split(',').map(n => parseFloat(n.trim()))
      const filtradas = arr.filter(n => n >= 18)
      setResultadoFilter(JSON.stringify(filtradas))
    } catch {
      setResultadoFilter('❌ Entrada inválida.')
    }
  }

  const handleReduce = () => {
    try {
      const arr = numsReduce.split(',').map(n => parseFloat(n.trim()))
      const suma = arr.reduce((acc, n) => acc + n, 0)
      setResultadoReduce(suma.toString())
    } catch {
      setResultadoReduce('❌ Entrada inválida.')
    }
  }

  const handleComposicion = () => {
    try {
        const arr = numsComp.split(',').map(n => parseFloat(n.trim()))
        // Filtrar números pares y luego multiplicar por 10
        const resultado = arr
        .filter(n => n % 2 === 0)
        .map(n => n * 10)
        setResultadoComp(JSON.stringify(resultado))
    } catch {
        setResultadoComp('❌ Entrada inválida.')
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
        Funciones de Orden Superior
      </motion.h1>

      <p className="text-center text-sm text-white/60 italic mb-10">
        Explora el poder de `.map()`, `.filter()`, `.reduce()` y más.
      </p>

      {/* Introducción / concepto */}
      <div className="space-y-6">
        <SubtemaItem {...higherOrderFunctionsJs[0]} />
      </div>

      {/* .forEach() - solo visual */}
      <div className="space-y-6">
        <SubtemaItem {...higherOrderFunctionsJs[1]} />
      </div>

      {/* .map() */}
      <div className="space-y-6">
        <SubtemaItem {...higherOrderFunctionsJs[2]} />
        <div className="bg-black/30 border-l-4 border-MAzul p-6 rounded-xl shadow-inner space-y-4">
          <h3 className="text-2xl font-phantom text-MAzul">Ejemplo – .map()</h3>
          <input
            type="text"
            value={numerosMap}
            onChange={(e) => setNumerosMap(e.target.value)}
            placeholder="Ej: 1,2,3"
            className="w-full p-2 rounded-md bg-black/80 border border-white/20 text-white"
          />
          <button
            onClick={handleMap}
            className="bg-MAzul hover:bg-MAzul/80 text-black px-4 py-2 rounded font-bold"
          >
            Doblar números
          </button>
          {resultadoMap && (
            <p className="text-green-400 font-mono bg-black/60 p-4 rounded">{resultadoMap}</p>
          )}
        </div>
      </div>

      {/* .filter() */}
      <div className="space-y-6">
        <SubtemaItem {...higherOrderFunctionsJs[3]} />
        <div className="bg-black/30 border-l-4 border-KRojo p-6 rounded-xl shadow-inner space-y-4">
          <h3 className="text-2xl font-phantom text-KRojo">Ejemplo – .filter()</h3>
          <input
            type="text"
            value={edadesFilter}
            onChange={(e) => setEdadesFilter(e.target.value)}
            placeholder="Ej: 18,12,25,16"
            className="w-full p-2 rounded-md bg-black/80 border border-white/20 text-white"
          />
          <button
            onClick={handleFilter}
            className="bg-KRojo hover:bg-KRojo/80 text-white px-4 py-2 rounded font-bold"
          >
            Filtrar mayores de edad
          </button>
          {resultadoFilter && (
            <p className="text-green-400 font-mono bg-black/60 p-4 rounded">{resultadoFilter}</p>
          )}
        </div>
      </div>

      {/* .reduce() */}
      <div className="space-y-6">
        <SubtemaItem {...higherOrderFunctionsJs[4]} />
        <div className="bg-black/30 border-l-4 border-HMorado p-6 rounded-xl shadow-inner space-y-4">
          <h3 className="text-2xl font-phantom text-HMorado">Ejemplo – .reduce()</h3>
          <input
            type="text"
            value={numsReduce}
            onChange={(e) => setNumsReduce(e.target.value)}
            placeholder="Ej: 5,10,15"
            className="w-full p-2 rounded-md bg-black/80 border border-white/20 text-white"
          />
          <button
            onClick={handleReduce}
            className="bg-HMorado hover:bg-HMorado/80 text-white px-4 py-2 rounded font-bold"
          >
            Sumar valores
          </button>
          {resultadoReduce && (
            <p className="text-green-400 font-mono bg-black/60 p-4 rounded">
              Resultado: {resultadoReduce}
            </p>
          )}
        </div>
      </div>

      {/* Composición: filter + map */}
        <div className="space-y-6">
        <SubtemaItem {...higherOrderFunctionsJs[5]} />
        <div className="bg-black/30 border-l-4 border-HMorado p-6 rounded-xl shadow-inner space-y-4">
            <h3 className="text-2xl font-phantom text-HMorado">Ejemplo – Composición (filter + map)</h3>
            <input
            type="text"
            value={numsComp}
            onChange={(e) => setNumsComp(e.target.value)}
            placeholder="Ej: 1,2,3,4,5"
            className="w-full p-2 rounded-md bg-black/80 border border-white/20 text-white"
            />
            <button
            onClick={handleComposicion}
            className="bg-HMorado hover:bg-HMorado/80 text-white px-4 py-2 rounded font-bold"
            >
            Filtrar pares y multiplicar por 10
            </button>
            {resultadoComp && (
            <p className="text-green-400 font-mono bg-black/60 p-4 rounded">{resultadoComp}</p>
            )}
        </div>
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