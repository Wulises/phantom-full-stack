'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { operatorsJs } from '@/data/javascript/operators'
import SubtemaItem from '@/components/subTopicItems'
import Link from 'next/link'

export default function OperatorsJs() {
  // Para demostraciones interactivas
  // Aritméticos
  const [numA, setNumA] = useState<number | ''>(5)
  const [numB, setNumB] = useState<number | ''>(2)

  // Asignación
  const [valorX, setValorX] = useState<number>(10)

  // Comparación
  const [compA, setCompA] = useState<number | ''>(5)
  const [compB, setCompB] = useState<number | ''>(5)

  // Lógicos
  const [bool1, setBool1] = useState(true)
  const [bool2, setBool2] = useState(false)

  // Ternario
  const [edad, setEdad] = useState<number | ''>(18)

  // Nullish / OR lógico
  const [inputNullish, setInputNullish] = useState<string>('')
  const [resultadoNullish, setResultadoNullish] = useState<string>('')

  const manejarNullish = () => {
    const val = inputNullish
    // si fuera todo tipo de valor, podrías transformar
    // pero aquí solo lo dejamos como string o fallback
    const res = val ?? 'Valor por defecto'
    setResultadoNullish(res)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-velvet to-royal px-6 py-10 space-y-12">
      <motion.h1
        className="text-center text-5xl font-phantom text-MAzul mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Operadores en JavaScript
      </motion.h1>

      <p className="text-center text-sm text-white/60 italic mb-10">
        Aprende cómo usar operadores aritméticos, lógicos, de comparación y más.
      </p>

      {/* Aritméticos */}
      <div className="space-y-6">
        <SubtemaItem {...operatorsJs[0]} />
        <div className="bg-black/30 border-l-4 border-HMorado p-6 rounded-xl shadow-inner space-y-4">
          <h3 className="text-2xl font-phantom text-HMorado">Ejemplo interactivo – Aritméticos</h3>
          <div className="flex gap-4">
            <input
              className="w-1/2 p-2 rounded-md bg-black/80 border border-white/20 text-white"
              type="number"
              value={numA}
              onChange={(e) => setNumA(e.target.value === '' ? '' : Number(e.target.value))}
            />
            <input
              className="w-1/2 p-2 rounded-md bg-black/80 border border-white/20 text-white"
              type="number"
              value={numB}
              onChange={(e) => setNumB(e.target.value === '' ? '' : Number(e.target.value))}
            />
          </div>
          {numA !== '' && numB !== '' && (
            <div className="text-white space-y-2 mt-4">
              <p>
                {numA} + {numB} ={' '}
                <span className="text-green-400 font-mono">{numA + numB}</span>
              </p>
              <p>
                {numA} * {numB} ={' '}
                <span className="text-green-400 font-mono">{numA * numB}</span>
              </p>
              <p>
                {numA} ** {numB} ={' '}
                <span className="text-green-400 font-mono">{numA ** numB}</span>
              </p>
              <p>
                {numA} % {numB} ={' '}
                <span className="text-green-400 font-mono">{numA % numB}</span>
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Asignación */}
      <div className="space-y-6">
        <SubtemaItem {...operatorsJs[1]} />
        <div className="bg-black/30 border-l-4 border-KRojo p-6 rounded-xl shadow-inner space-y-4">
          <h3 className="text-2xl font-phantom text-KRojo">Ejemplo interactivo – Asignación</h3>
          <p className="text-white">Valor x actual: <span className="text-green-400 font-mono">{valorX}</span></p>
          <div className="flex gap-4">
            <button
              onClick={() => setValorX((prev) => prev + 5)}
              className="bg-KRojo hover:bg-KRojo/80 text-white px-4 py-2 rounded font-bold"
            >
              +5
            </button>
            <button
              onClick={() => setValorX((prev) => prev * 2)}
              className="bg-KRojo hover:bg-KRojo/80 text-white px-4 py-2 rounded font-bold"
            >
              ×2
            </button>
          </div>
        </div>
      </div>

      {/* Comparación */}
      <div className="space-y-6">
        <SubtemaItem {...operatorsJs[2]} />
        <div className="bg-black/30 border-l-4 border-MAzul p-6 rounded-xl shadow-inner space-y-4">
          <h3 className="text-2xl font-phantom text-MAzul">🧪 Ejemplo interactivo – Comparación</h3>
          <div className="flex gap-4">
            <input
              className="w-1/2 p-2 rounded-md bg-black/80 border border-white/20 text-white"
              type="number"
              value={compA}
              onChange={(e) => setCompA(e.target.value === '' ? '' : Number(e.target.value))}
            />
            <input
              className="w-1/2 p-2 rounded-md bg-black/80 border border-white/20 text-white"
              type="number"
              value={compB}
              onChange={(e) => setCompB(e.target.value === '' ? '' : Number(e.target.value))}
            />
          </div>
          {compA !== '' && compB !== '' && (
            <div className="text-white space-y-2 mt-4">
              <p>
                {compA} == {compB} →{' '}
                <span className="text-green-400 font-mono">{compA == compB ? 'true' : 'false'}</span>
              </p>
              <p>
                {compA} === {compB} →{' '}
                <span className="text-green-400 font-mono">{compA === compB ? 'true' : 'false'}</span>
              </p>
              <p>
                {compA} `{'>'}` {compB} →{' '}
                <span className="text-green-400 font-mono">{compA > compB ? 'true' : 'false'}</span>
              </p>
              <p>
                {compA} `{'<'}` {compB} →{' '}
                <span className="text-green-400 font-mono">{compA < compB ? 'true' : 'false'}</span>
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Lógicos */}
      <div className="space-y-6">
        <SubtemaItem {...operatorsJs[3]} />
        <div className="bg-black/30 border-l-4 border-KRojo p-6 rounded-xl shadow-inner space-y-4">
          <h3 className="text-2xl font-phantom text-KRojo">🧪 Ejemplo interactivo – Lógicos</h3>
          <div className="flex gap-4">
            <button
              onClick={() => setBool1((b) => !b)}
              className="bg-KRojo hover:bg-KRojo/80 text-white px-4 py-2 rounded font-bold"
            >
              Toggle Bool1 (actual: {bool1.toString()})
            </button>
            <button
              onClick={() => setBool2((b) => !b)}
              className="bg-KRojo hover:bg-KRojo/80 text-white px-4 py-2 rounded font-bold"
            >
              Toggle Bool2 (actual: {bool2.toString()})
            </button>
          </div>
          <div className="text-white space-y-2 mt-4">
            <p>
              {bool1.toString()} && {bool2.toString()} →{' '}
              <span className="text-green-400 font-mono">{(bool1 && bool2).toString()}</span>
            </p>
            <p>
              {bool1.toString()} || {bool2.toString()} →{' '}
              <span className="text-green-400 font-mono">{(bool1 || bool2).toString()}</span>
            </p>
            <p>
              !{bool1.toString()} → <span className="text-green-400 font-mono">{(!bool1).toString()}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Ternario */}
      <div className="space-y-6">
        <SubtemaItem {...operatorsJs[4]} />
        <div className="bg-black/30 border-l-4 border-MAzul p-6 rounded-xl shadow-inner space-y-4">
          <h3 className="text-2xl font-phantom text-MAzul">🧪 Ejemplo interactivo – Ternario</h3>
          <input
            className="w-full p-2 rounded-md bg-black/80 border border-white/20 text-white"
            type="number"
            placeholder="Ingresa tu edad"
            value={edad}
            onChange={(e) => setEdad(e.target.value === '' ? '' : Number(e.target.value))}
          />
          {edad !== '' && (
            <p className="text-white mt-4">
              {edad} ≥ 18 ?{' '}
              <span className="text-green-400 font-mono">
                {edad >= 18 ? 'Mayor de edad' : 'Menor de edad'}
              </span>
            </p>
          )}
        </div>
      </div>

      {/* Nullish / OR lógico */}
      <div className="space-y-6">
        <SubtemaItem {...operatorsJs[5]} />
        <div className="bg-black/30 border-l-4 border-KRojo p-6 rounded-xl shadow-inner space-y-4">
          <h3 className="text-2xl font-phantom text-KRojo">🧪 Ejemplo interactivo – Nullish / OR lógico</h3>
          <input
            className="w-full p-2 rounded-md bg-black/80 border border-white/20 text-white"
            placeholder="Ingresa algo (puede estar vacío)"
            value={inputNullish}
            onChange={(e) => setInputNullish(e.target.value)}
          />
          <button
            onClick={manejarNullish}
            className="bg-KRojo hover:bg-KRojo/80 text-white px-4 py-2 rounded font-bold"
          >
            Evaluar
          </button>
          <p className="text-white mt-4">
            Resultado con ?? :{' '}
            <span className="text-green-400 font-mono">
              {inputNullish ?? 'Valor por defecto'}
            </span>
          </p>
          <p className="text-white">
            Resultado con || :{' '}
            <span className="text-green-400 font-mono">
              {inputNullish || 'fallback si falsy'}
            </span>
          </p>
        </div>
      </div>

      {/* Botón de regreso */}
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
