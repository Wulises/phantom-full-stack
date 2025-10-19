'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { fetchApiJs } from '@/data/javascript/fetchApi'
import SubtemaItem from '@/components/subTopicItems'
import Link from 'next/link'

interface Usuario {
  id: number
  name: string
  email: string
}

export default function FetchApiPage() {
  const [usuarios, setUsuarios] = useState<Usuario[] | null>(null)
  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Estado para agregar nuevo usuario
  const [nuevoNombre, setNuevoNombre] = useState('')
  const [nuevoEmail, setNuevoEmail] = useState('')

  // Estado para edición inline
  const [editandoId, setEditandoId] = useState<number | null>(null)
  const [editNombre, setEditNombre] = useState('')
  const [editEmail, setEditEmail] = useState('')

  
  const obtenerUsuarios = async () => {
    setCargando(true)
    setError(null)
    try {
      const resp = await fetch('https://jsonplaceholder.typicode.com/users')
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`)
      const data: Usuario[] = await resp.json()
      setUsuarios(data)
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError('❌ Error al obtener usuarios: ' + err.message)
      } else {
        setError('❌ Error desconocido al obtener usuarios')
      }
    } finally {
      setCargando(false)
    }
  }

  // Eliminar usuario localmente
  const eliminarUsuario = (id: number) => {
    if (!usuarios) return
    setUsuarios(usuarios.filter(u => u.id !== id))
  }

  // Iniciar edición
  const iniciarEdicion = (usuario: Usuario) => {
    setEditandoId(usuario.id)
    setEditNombre(usuario.name)
    setEditEmail(usuario.email)
  }

  // Guardar edición
  const guardarEdicion = () => {
    if (!usuarios || editandoId === null) return
    setUsuarios(
      usuarios.map(u =>
        u.id === editandoId ? { ...u, name: editNombre, email: editEmail } : u
      )
    )
    setEditandoId(null)
  }

  // Cancelar edición
  const cancelarEdicion = () => {
    setEditandoId(null)
  }

  // Agregar nuevo usuario
  const agregarUsuario = () => {
    if (!nuevoNombre.trim() || !nuevoEmail.trim() || !usuarios) return
    const nuevoUsuario: Usuario = {
      id: usuarios.length ? Math.max(...usuarios.map(u => u.id)) + 1 : 1,
      name: nuevoNombre.trim(),
      email: nuevoEmail.trim(),
    }
    setUsuarios([...usuarios, nuevoUsuario])
    setNuevoNombre('')
    setNuevoEmail('')
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-velvet to-royal px-6 py-10 space-y-12">
      <motion.h1
        className="text-center text-5xl font-phantom text-MAzul mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Fetch API Interactivo
      </motion.h1>

      <p className="text-center text-sm text-white/60 italic mb-10">
        Obtén usuarios, y edita, elimina o agrega localmente (sin base de datos).
      </p>

      {/* Subtemas y teoría */}
      <div className="space-y-6">
        {fetchApiJs.map((subtema, i) => (
          <div key={i} className="space-y-6">
            <SubtemaItem {...subtema} />
          </div>
        ))}
      </div>

      {/* Botón obtener usuarios */}
      <div className="text-center mb-8">
        <button
          onClick={obtenerUsuarios}
          className="bg-MAzul hover:bg-MAzul/80 text-black px-6 py-2 rounded font-bold"
          disabled={cargando}
        >
          {cargando ? 'Cargando...' : 'Obtener usuarios'}
        </button>
        {error && <p className="mt-2 text-red-400">{error}</p>}
      </div>

      {/* Lista editable de usuarios */}
      {usuarios && (
        <div className="bg-black/30 border-l-4 border-MAzul p-6 rounded-xl shadow-inner space-y-4">
          <h3 className="text-2xl font-phantom text-MAzul mb-4">Usuarios</h3>
          <ul className="space-y-3">
            {usuarios.map(u => (
              <li key={u.id} className="flex items-center space-x-3">
                {editandoId === u.id ? (
                  <>
                    <input
                      type="text"
                      value={editNombre}
                      onChange={e => setEditNombre(e.target.value)}
                      className="w-full p-2 rounded-md bg-MAzul/50 border border-MAzul/20 text-white mb-2"
                    />
                    <input
                      type="email"
                      value={editEmail}
                      onChange={e => setEditEmail(e.target.value)}
                      className="w-full p-2 rounded-md bg-MAzul/50 border border-MAzul/20 text-white mb-2"
                    />
                    <button
                      onClick={guardarEdicion}
                      className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-white font-semibold"
                    >
                      Guardar
                    </button>
                    <button
                      onClick={cancelarEdicion}
                      className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white font-semibold"
                    >
                      Cancelar
                    </button>
                  </>
                ) : (
                  <>
                    <span className="flex-1 font-mono text-green-400">
                      {u.name} – <span className="text-white/70">{u.email}</span>
                    </span>
                    <button
                      onClick={() => iniciarEdicion(u)}
                      className="bg-MAzul/70 hover:bg-MAzul/50 px-3 py-1 rounded text-black font-semibold"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => eliminarUsuario(u.id)}
                      className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white font-semibold"
                    >
                      Eliminar
                    </button>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Formulario para agregar nuevo usuario */}
      <div className="bg-black/30 border-l-4 border-HMorado p-6 rounded-xl shadow-inner space-y-4">
        <h3 className="text-2xl font-phantom text-HMorado mb-2">Agregar nuevo usuario</h3>
        <input
          type="text"
          placeholder="Nombre"
          value={nuevoNombre}
          onChange={e => setNuevoNombre(e.target.value)}
          className="w-full p-2 rounded-md bg-black/80 border border-white/20 text-white mb-2"
        />
        <input
          type="email"
          placeholder="Email"
          value={nuevoEmail}
          onChange={e => setNuevoEmail(e.target.value)}
          className="w-full p-2 rounded-md bg-black/80 border border-white/20 text-white mb-2"
        />
        <button
          onClick={agregarUsuario}
          className="bg-HMorado hover:bg-HMorado/80 text-white px-6 py-2 rounded font-bold"
          disabled={!nuevoNombre.trim() || !nuevoEmail.trim()}
        >
          Agregar usuario
        </button>
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