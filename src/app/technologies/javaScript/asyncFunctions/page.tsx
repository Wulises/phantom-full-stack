'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { asyncFunctionsJs } from '@/data/javascript/asyncFunctions'
import SubtemaItem from '@/components/subTopicItems'
import Link from 'next/link'

export default function AsyncFunctionsPage() {

  type Usuario = {
    id: number
    name: string
    email: string
  }

  const [callbackOutput, setCallbackOutput] = useState('')
  const [promiseOutput, setPromiseOutput] = useState('')
  const [apiData, setApiData] = useState<Usuario[] | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // === Ejemplo de callback ===
  const ejecutarCallback = () => {
    setCallbackOutput('Esperando...')
    setTimeout(() => {
      setCallbackOutput('✅ Callback ejecutado después de 1 segundo')
    }, 1000)
  }

  // === Ejemplo de promesa ===
  const ejecutarPromesa = () => {
    setPromiseOutput('⏳ Ejecutando promesa...')
    const promesa = new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        const exito = true
        if (exito) resolve('🎉 ¡Promesa resuelta con éxito!')
        else reject('💥 Promesa rechazada')
      }, 1500)
    })

    promesa
      .then(msg => setPromiseOutput(msg))
      .catch(err => setPromiseOutput(`❌ ${err}`))
  }

  // === Fetch con async/await + manejo de errores ===
  const obtenerUsuarios = async () => {
    setApiData(null)
    setLoading(true)
    setError(null)

    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      if (!res.ok) throw new Error('Error HTTP ' + res.status)
      const data = await res.json()
      setApiData(data)
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || 'Error desconocido')
      }
    } finally {
      setLoading(false)
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
        Funciones Asíncronas en JavaScript
      </motion.h1>

      <p className="text-center text-sm text-white/60 italic mb-10">
        Entiende cómo funciona la asincronía con callbacks, promesas, async/await y fetch.
      </p>

      {/* Subtemas + ejemplos interactivos */}
      <div className="space-y-8">
        {asyncFunctionsJs.map((subtema, i) => (
          <div key={i} className="space-y-6">
            <SubtemaItem {...subtema} />

            {/* Ejemplo callback */}
            {i === 1 && (
              <div className="bg-black/30 border-l-4 border-HMorado p-6 rounded-xl shadow-inner space-y-4">
                <h3 className="text-xl text-HMorado font-bold">Ejemplo – Callback</h3>
                <button
                  onClick={ejecutarCallback}
                  className="bg-HMorado hover:bg-HMorado/80 text-white px-4 py-2 rounded font-bold"
                >
                  Ejecutar Callback
                </button>
                {callbackOutput && (
                  <p className="text-green-400 font-mono bg-black/60 p-4 rounded">{callbackOutput}</p>
                )}
              </div>
            )}

            {/* Ejemplo promesa */}
            {i === 2 && (
              <div className="bg-black/30 border-l-4 border-KRojo p-6 rounded-xl shadow-inner space-y-4">
                <h3 className="text-xl text-KRojo font-bold">Ejemplo – Promesa</h3>
                <button
                  onClick={ejecutarPromesa}
                  className="bg-KRojo hover:bg-KRojo/80 text-white px-4 py-2 rounded font-bold"
                >
                  Ejecutar Promesa
                </button>
                {promiseOutput && (
                  <p className="text-green-400 font-mono bg-black/60 p-4 rounded">{promiseOutput}</p>
                )}
              </div>
            )}

            {/* Ejemplo fetch y manejo de errores */}
            {i === 5 && (
              <div className="bg-black/30 border-l-4 border-MAzul p-6 rounded-xl shadow-inner space-y-4">
                <h3 className="text-xl text-MAzul font-bold">
                  Ejemplo – Petición a API (async/await)
                </h3>
                <button
                  onClick={obtenerUsuarios}
                  className="bg-MAzul hover:bg-MAzul/80 text-black px-4 py-2 rounded font-bold"
                >
                  Obtener usuarios
                </button>

                {loading && (
                  <p className="text-yellow-300 font-mono bg-black/60 p-4 rounded">
                    ⏳ Cargando datos...
                  </p>
                )}

                {error && (
                  <p className="text-red-400 font-mono bg-black/60 p-4 rounded">❌ {error}</p>
                )}

                {apiData && (
                  <ul className="space-y-2 bg-black/50 p-4 rounded">
                    {apiData.map((user: Usuario) => (
                      <li key={user.id} className="text-green-400 font-mono">
                        👤 {user.name} – {user.email}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Botón volver */}
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