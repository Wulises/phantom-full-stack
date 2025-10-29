'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { jsonStorageJs } from '@/data/javascript/jsonStorage'
import SubtemaItem from '@/components/subTopicItems'
import Link from 'next/link'

export default function JsonStoragePage() {
  interface PerfilUsuario {
    nombre: string
    edad: string
    personaje: string
  }

  // === Estados ===
  const [nombre, setNombre] = useState('')
  const [edad, setEdad] = useState('')
  const [personaje, setPersonaje] = useState('Ingeniero')
  const [guardado, setGuardado] = useState<PerfilUsuario | null>(null)
  const [storageView, setStorageView] = useState<Record<string, unknown>>({})

  // === Cargar datos al iniciar ===
  useEffect(() => {
    const data = localStorage.getItem('perfilUsuario')
    if (data) setGuardado(JSON.parse(data))
    actualizarVistaStorage()
  }, [])

  // === Funciones ===
  const guardarPerfil = () => {
    if (!nombre.trim() || !edad.trim())
      return alert('❗ Completa todos los campos')
    const perfil = { nombre, edad, personaje }
    localStorage.setItem('perfilUsuario', JSON.stringify(perfil))
    setGuardado(perfil)
    actualizarVistaStorage()
  }

  const eliminarPerfil = () => {
    localStorage.removeItem('perfilUsuario')
    setGuardado(null)
    actualizarVistaStorage()
  }

  const limpiarTodo = () => {
    localStorage.clear()
    sessionStorage.clear()
    setGuardado(null)
    actualizarVistaStorage()
  }

  const actualizarVistaStorage = () => {
    const view: Record<string, unknown> = {}
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)!
      try {
        view[key] = JSON.parse(localStorage.getItem(key) || '')
      } catch {
        view[key] = localStorage.getItem(key)
      }
    }
    setStorageView(view)
  }

  // === Render ===
  return (
    <main className="min-h-screen bg-gradient-to-br from-velvet to-royal px-6 py-10 space-y-12">
      <motion.h1
        className="text-center text-5xl font-phantom text-MAzul mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        JSON y Almacenamiento Local
      </motion.h1>

      <p className="text-center text-sm text-white/60 italic mb-10">
        Guarda, lee y observa cómo tu información vive dentro del navegador.
      </p>

      {/* === Secciones === */}
      {jsonStorageJs.map((subtema, i) => (
        <div key={i} className="space-y-6">
          <SubtemaItem {...subtema} />

          {i === 0 && (
            <div className="bg-black/30 border-l-4 border-MAzul p-6 rounded-xl shadow-inner space-y-4">
              <h3 className="text-2xl font-phantom text-MAzul">
                Ejemplo – Perfil de usuario (JSON interactivo)
              </h3>

              <div className="grid md:grid-cols-3 gap-3">
                <input
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Tu nombre"
                  className="w-full p-2 rounded-md bg-black/80 border border-white/20 text-white"
                />
                <input
                  type="number"
                  value={edad}
                  onChange={(e) => setEdad(e.target.value)}
                  placeholder="Edad"
                  className="w-full p-2 rounded-md bg-black/80 border border-white/20 text-white"
                />
                <select
                  value={personaje}
                  onChange={(e) => setPersonaje(e.target.value)}
                  className="w-full p-2 rounded-md bg-black/80 border border-white/20 text-white"
                >
                  <option value="Ingeniero">Ingeniero</option>
                  <option value="Medico">Medico</option>
                  <option value="Arquitecto">Arquitecto</option>
                  <option value="Jardinera">Jardinera</option>
                </select>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={guardarPerfil}
                  className="bg-MAzul hover:bg-MAzul/80 text-black px-4 py-2 rounded font-bold"
                >
                  Guardar
                </button>
                <button
                  onClick={eliminarPerfil}
                  className="bg-KRojo hover:bg-KRojo/80 text-white px-4 py-2 rounded font-bold"
                >
                  Eliminar
                </button>
              </div>

              {guardado && (
                <div className="bg-black/60 p-4 rounded font-mono text-green-400 whitespace-pre-wrap">
                  <strong>Perfil leído:</strong>
                  <pre>{JSON.stringify(guardado, null, 2)}</pre>
                </div>
              )}
            </div>
          )}
        </div>
      ))}

      {/* === Vista del storage === */}
      <div className="bg-black/40 border-l-4 border-KRojo p-6 rounded-xl shadow-inner space-y-4">
        <h3 className="text-2xl font-phantom text-KRojo">
          Vista actual del localStorage
        </h3>
        <pre className="bg-black/60 text-green-400 font-mono p-4 rounded overflow-x-auto">
          {Object.keys(storageView).length
            ? JSON.stringify(storageView, null, 2)
            : '// (vacío) Nada almacenado todavía'}
        </pre>
        <button
          onClick={limpiarTodo}
          className="bg-KRojo hover:bg-KRojo/80 text-white px-4 py-2 rounded font-bold"
        >
          Limpiar almacenamiento
        </button>
      </div>

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
