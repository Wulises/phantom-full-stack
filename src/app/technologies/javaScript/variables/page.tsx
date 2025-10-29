'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { variablesJs } from '@/data/javascript/variables'
import Link from 'next/link'
import SubtemaItem from '@/components/subTopicItems'

export default function VariablesJs() {
  const [nombre, setNombre] = useState('')
  const [constante] = useState('Haru')
  const [nuevoValor, setNuevoValor] = useState('')
  const [errorConst, setErrorConst] = useState('')
  const [flag, setFlag] = useState(true)
  const [numero, setNumero] = useState<number | ''>('')
  const [texto, setTexto] = useState('')
  const [valorNulo, setValorNulo] = useState<null | string>('')
  const [valorIndefinido, setValorIndefinido] = useState<string | undefined>('')

  const handleConstChange = () => {
    setErrorConst('¡No puedes reasignar una constante! Intenta usar `let` si necesitas cambiar el valor.')
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-velvet to-royal px-6 py-10 space-y-12">
      <motion.h1
        className="text-center text-5xl font-phantom text-MAzul mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Variables en JavaScript
      </motion.h1>

      <p className="text-center text-sm text-white/60 italic mb-10">
        Explorando las bases de <code>let</code>, <code>const</code>, <code>boolean</code>, <code>number</code>, <code>string</code>, <code>null</code> y <code>undefined</code>.
      </p>

      {/* let */}
      <div className="space-y-6">
        <SubtemaItem {...variablesJs[0]} />
        <div className="bg-velvet border-l-4 border-HMorado p-6 rounded-xl shadow-inner space-y-4">
          <h3 className="text-2xl font-phantom text-HMorado">Ejemplo interactivo – let</h3>
          <label className="text-white/90 text-lg">Escribe tu nombre:</label>
          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full p-2 rounded-md bg-black/80 border border-white/20 text-white"
            placeholder="Ej. Haru"
          />
          {nombre && (
            <pre className="text-green-400 bg-black/70 p-4 rounded text-sm font-mono">
              {`let nombre = "${nombre.toUpperCase()}";`}
            </pre>
          )}
        </div>
      </div>

      {/* const */}
      <div className="space-y-6">
        <SubtemaItem {...variablesJs[1]} />
        <div className="bg-black/30 border-l-4 border-KRojo p-6 rounded-xl shadow-inner space-y-4">
          <h3 className="text-2xl font-phantom text-KRojo"> Ejemplo interactivo – const </h3>
          <p className="text-white text-lg">
            Constante:<code className="text-green-400"> {constante} </code>
          </p>
          <input
            value={nuevoValor}
            onChange={(e) => setNuevoValor(e.target.value)}
            placeholder="Intentar reasignar..."
            className="w-full p-2 rounded-md bg-black/80 border border-white/20 text-white"
          />
          <button
            onClick={handleConstChange}
            className="bg-KRojo hover:bg-KRojo/80 text-black px-4 py-2 rounded-md font-bold shadow"
          >
            Reasignar Constante
          </button>
          {errorConst && (
            <p className="bg-KRojo/10 border border-KRojo text-KRojo font-mono p-4 rounded-md">
              {errorConst}
            </p>
          )}
        </div>
      </div>

      {/* boolean */}
      <div className="space-y-6">
        <SubtemaItem {...variablesJs[2]} />
        <div className="bg-black/30 border-l-4 border-MAzul p-6 rounded-xl shadow-inner space-y-4">
          <h3 className="text-2xl font-phantom text-MAzul">Ejemplo interactivo – boolean</h3>
          <p className="text-white text-lg">
            Estado actual:{' '}
            <span className={`font-semibold ${flag ? 'text-green-500' : 'text-KRojo'}`}>
              {flag ? ' Activado' : ' Desactivado'}
            </span>
          </p>
          <button
            onClick={() => setFlag(!flag)}
            className="bg-MAzul hover:bg-MAzul/80 text-black px-4 py-2 rounded-md font-bold"
          >
            Cambiar Estado
          </button>
        </div>
      </div>

      {/* number */}
      <div className="space-y-6">
        <SubtemaItem {...variablesJs[3]} />
        <div className="bg-black/30 border-l-4 border-HMorado p-6 rounded-xl shadow-inner space-y-4">
          <h3 className="text-2xl font-phantom text-HMorado">Ejemplo interactivo – number</h3>
          <input
            type="number"
            value={numero}
            onChange={(e) => {
              const value = e.target.value
              setNumero(value === '' ? '' : Number(value))
            }}
            className="w-full p-2 rounded-md bg-black/80 border border-white/20 text-white"
            placeholder="Escribe un número"
          />
          {numero !== '' && (
            <p className="text-white/90">
              El doble de tu número es:{' '}
              <span className="text-green-400 font-mono">{numero * 2}</span>
            </p>
          )}
        </div>
      </div>

      {/* string */}
      <div className="space-y-6">
        <SubtemaItem {...variablesJs[4]} />
        <div className="bg-black/30 border-l-4 border-HMorado p-6 rounded-xl shadow-inner space-y-4">
          <h3 className="text-2xl font-phantom text-HMorado">Ejemplo interactivo – string</h3>
          <input
            type="text"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            className="w-full p-2 rounded-md bg-black/80 border border-white/20 text-white"
            placeholder="Escribe algo"
          />
          {texto && (
            <p className="text-white/90">
              Texto invertido:{' '}
              <span className="text-green-400 font-mono">{texto.split('').reverse().join('')}</span>
            </p>
          )}
        </div>
      </div>

      {/* null y undefined */}
      <div className="space-y-6">
        <SubtemaItem {...variablesJs[5]} />
        <div className="bg-black/30 border-l-4 border-KRojo p-6 rounded-xl shadow-inner space-y-4">
          <h3 className="text-2xl font-phantom text-KRojo">Ejemplo interactivo – null y undefined</h3>
          <button
            className="bg-KRojo px-4 py-2 rounded text-black font-bold"
            onClick={() => {
              setValorNulo(null)
              setValorIndefinido(undefined)
            }}
          >
            Asignar null y undefined
          </button>
          <p className="text-white text-sm mt-2">
            Valor null: <code className="font-mono text-KRojo"> {String(valorNulo)} </code>
          </p>
          <p className="text-white text-sm">
            Valor undefined: <code className="font-mono text-KRojo"> {String(valorIndefinido)} </code>
          </p>
        </div>
      </div>

      {/* Botón volver */}
      <div className="text-center mt-6">
        <Link href="/technologies/javaScript">
          <button className="bg-HMorado hover:bg-HMorado/80 text-white px-6 py-2 rounded-full shadow-md transition-all duration-300">
            Volver al menú de subtemas
          </button>
        </Link>
      </div>
    </main>
  )
}