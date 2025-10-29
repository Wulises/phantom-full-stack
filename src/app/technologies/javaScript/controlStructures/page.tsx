'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { controlStructuresJs } from '@/data/javascript/controlStructuresJs'
import SubtemaItem from '@/components/subTopicItems'
import Link from 'next/link'

export default function ControlStructures() {
  const [edad, setEdad] = useState(27)
  const [mensajeEdad, setMensajeEdad] = useState('')
  const [color, setColor] = useState('rojo')
  const [mensajeColor, setMensajeColor] = useState('')
  const [numFor, setNumFor] = useState(3)
  const [numWhile, setNumWhile] = useState(4)
  const [numDoWhile, setNumDoWhile] = useState(5)
  const [resultadoFor, setResultadoFor] = useState<string[]>([])
  const [logWhile, setLogWhile] = useState<string[]>([])
  const [logDoWhile, setLogDoWhile] = useState<string[]>([])

  const manejarIfElse = () => {
    setMensajeEdad(edad >= 18 ? 'Eres mayor de edad' : 'Eres menor de edad')
  }

  const manejarSwitch = () => {
    switch (color) {
      case 'rojo':
        setMensajeColor('El color es rojo')
        break
      case 'azul':
        setMensajeColor('El color es azul')
        break
      default:
        setMensajeColor('Color no reconocido')
    }
  }

  const manejarFor = () => {
    const arr: string[] = []
    for (let i = 0; i < numFor; i++) {
      arr.push(`Iteración ${i}`)
    }
    setResultadoFor(arr)
  }

  const manejarWhile = () => {
    let i = 0
    const limite = Math.min(numWhile, 10)
    const logs: string[] = []
    while (i < limite) {
      logs.push(`Repetición ${i}`)
      i++
    }
    setLogWhile(logs)
  }

  const manejarDoWhile = () => {
    let i = 0
    const limite = Math.min(numDoWhile, 10)
    const logs: string[] = []
    do {
      logs.push(`Número ${i}`)
      i++
    } while (i < limite)
    setLogDoWhile(logs)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-velvet to-royal px-6 py-10 space-y-12">
      <motion.h1
        className="text-center text-5xl font-phantom text-MAzul mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Estructuras de Control en JavaScript
      </motion.h1>

      <p className="text-center text-sm text-white/60 italic mb-10">
        Toma decisiones y repite acciones con estas estructuras.
      </p>

      {/* if/else */}
      <div className="space-y-6">
        <SubtemaItem {...controlStructuresJs[0]} />
        <div className="bg-black/30 border-l-4 border-KRojo p-6 rounded-xl shadow-inner space-y-4">
          <h3 className="text-2xl font-phantom text-KRojo">
            Ejemplo interactivo – if/else
          </h3>
          <input
            type="number"
            className="w-full p-2 rounded-md bg-black/80 border border-white/20 text-white"
            value={edad}
            onChange={(e) => setEdad(Number(e.target.value))}
          />
          <button
            onClick={manejarIfElse}
            className="bg-KRojo hover:bg-KRojo/80 text-white px-4 py-2 rounded-md font-bold"
          >
            Verificar edad
          </button>
          {mensajeEdad && (
            <p
              className={`font-bold ${
                mensajeEdad.includes('mayor')
                  ? 'text-green-400'
                  : mensajeEdad.includes('menor')
                  ? 'text-KRojo'
                  : ''
              }`}
            >
              {mensajeEdad}
            </p>
          )}
        </div>
      </div>

      {/* switch */}
      <div className="space-y-6">
        <SubtemaItem {...controlStructuresJs[1]} />
        <div className="bg-black/30 border-l-4 border-HMorado p-6 rounded-xl shadow-inner space-y-4">
          <h3 className="text-2xl font-phantom text-HMorado">
            Ejemplo interactivo – switch
          </h3>
          <select
            className="w-full p-2 rounded-md bg-black/80 border border-white/20 text-white"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          >
            <option value="rojo">rojo</option>
            <option value="azul">azul</option>
            <option value="verde">verde</option>
          </select>
          <button
            onClick={manejarSwitch}
            className="bg-HMorado hover:bg-HMorado/80 text-white px-4 py-2 rounded-md font-bold"
          >
            Evaluar color
          </button>
          {mensajeColor && (
            <p
              className={`font-bold ${
                mensajeColor.includes('rojo')
                  ? 'text-KRojo'
                  : mensajeColor.includes('azul')
                  ? 'text-MAzul'
                  : 'text-green-400'
              }`}
            >
              {mensajeColor}
            </p>
          )}
        </div>
      </div>

      {/* for */}
      <div className="space-y-6">
        <SubtemaItem {...controlStructuresJs[2]} />
        <div className="bg-black/30 border-l-4 border-MAzul p-6 rounded-xl shadow-inner space-y-4">
          <h3 className="text-2xl font-phantom text-MAzul">
            Ejemplo interactivo – for
          </h3>
          <input
            type="number"
            className="w-full p-2 rounded-md bg-black/80 border border-white/20 text-white"
            value={numFor}
            onChange={(e) => {
              const valor = Math.max(1, Math.min(10, Number(e.target.value)))
              setNumFor(valor)
              //setNumFor(Number(e.target.value))} {
            }}
          />
          <button
            onClick={manejarFor}
            className="bg-MAzul hover:bg-MAzul/80 text-black px-4 py-2 rounded-md font-bold"
          >
            Ejecutar for
          </button>
          <div className="text-green-400 font-mono space-y-1">
            {resultadoFor.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </div>
      </div>

      {/* while */}
      <div className="space-y-6">
        <SubtemaItem {...controlStructuresJs[3]} />
        <div className="bg-black/30 border-l-4 border-KRojo p-6 rounded-xl shadow-inner space-y-4">
          <h3 className="text-2xl font-phantom text-KRojo">
            Ejemplo interactivo – while
          </h3>
          <input
            type="number"
            className="w-full p-2 rounded-md bg-black/80 border border-white/20 text-white"
            value={numWhile}
            onChange={(e) => setNumWhile(Number(e.target.value))}
            max={10}
            min={1}
          />
          <button
            onClick={manejarWhile}
            className="bg-KRojo hover:bg-KRojo/80 text-white px-4 py-2 rounded-md font-bold"
          >
            Ejecutar while
          </button>
          <div className="text-green-400 font-mono space-y-1">
            {logWhile.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </div>
      </div>

      {/* do-while */}
      <div className="space-y-6">
        <SubtemaItem {...controlStructuresJs[4]} />
        <div className="bg-black/30 border-l-4 border-HMorado p-6 rounded-xl shadow-inner space-y-4">
          <h3 className="text-2xl font-phantom text-HMorado">
            Ejemplo interactivo – do-while
          </h3>
          <input
            type="number"
            className="w-full p-2 rounded-md bg-black/80 border border-white/20 text-white"
            value={numDoWhile}
            onChange={(e) => setNumDoWhile(Number(e.target.value))}
            max={10}
            min={1}
          />
          <button
            onClick={manejarDoWhile}
            className="bg-HMorado hover:bg-HMorado/80 text-white px-4 py-2 rounded-md font-bold"
          >
            Ejecutar do-while
          </button>
          <div className="text-green-400 font-mono space-y-1">
            {logDoWhile.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </div>
      </div>

      {/* volver */}
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
