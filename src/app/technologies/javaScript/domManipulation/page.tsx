'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { domManipulationJs } from '@/data/javascript/domManipulation'
import SubtemaItem from '@/components/subTopicItems'
import Link from 'next/link'

export default function DomManipulationPage() {
  // Estados para interactividad
  const [seleccionInfo, setSeleccionInfo] = useState<string>('')
  const [modContenidoMsg, setModContenidoMsg] = useState<string>('')
  const [nodosMsg, setNodosMsg] = useState<string>('')
  const [observadoMsg, setObservadoMsg] = useState<string>('')

  const contenedorRef = useRef<HTMLDivElement>(null)
  const observadoRef = useRef<HTMLDivElement>(null)

  // Observador para el DOM
  useEffect(() => {
    const target = observadoRef.current
    if (!target) return

    const observer = new MutationObserver((mutations) => {
      mutations.forEach(m => {
        setObservadoMsg(`Cambio detectado: tipo = ${m.type}`)
      })
    })

    observer.observe(target, { childList: true, attributes: true })

    return () => observer.disconnect()
  }, [])

  // Funciones interactivas

  const handleSeleccion = () => {
    const miDiv = document.getElementById('miDiv')
    const items = document.querySelectorAll('.item')
    if (miDiv || items) {
      setSeleccionInfo(`miDiv: ${miDiv?.tagName} | items encontrados: ${items.length}`)
    } else {
      setSeleccionInfo('No se encontró el elemento.')
    }
  }

  const handleModificar = () => {
    const titulo = document.getElementById('titulo')
    if (titulo) {
      titulo.textContent = 'Título cambiado 🎉'
    }
    const img = document.querySelector('img') as HTMLImageElement | null
    if (img) {
      img.src = '/images/makoto.png'
      img.alt = 'Imagen modificada'
    }
    setModContenidoMsg('Contenido y atributos modificados.')
  }

  const handleAgregarNodo = () => {
    const parent = contenedorRef.current
    if (parent) {
      const nuevo = document.createElement('div')
      nuevo.textContent = 'Nodo dinámico añadido'
      parent.appendChild(nuevo)
      setNodosMsg('Nodo añadido al contenedor.')
    }
  }

  const handleEliminarNodo = () => {
    const parent = contenedorRef.current
    if (parent && parent.lastChild) {
      parent.removeChild(parent.lastChild)
      setNodosMsg('Último nodo eliminado.')
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
        Manipulación del DOM
      </motion.h1>

      <p className="text-center text-sm text-white/60 italic mb-10">
        Modifica la estructura de la página en tiempo real con JavaScript.
      </p>

      {/* Qué es DOM */}
      <div className="space-y-6">
        <SubtemaItem {...domManipulationJs[0]} />
      </div>

      {/* Selección de elementos */}
      <div className="space-y-6">
        <SubtemaItem {...domManipulationJs[1]} />
        <div className="bg-black/30 border-l-4 border-HMorado p-6 rounded-xl shadow-inner space-y-4">
          <h3 className="text-2xl font-phantom text-HMorado">Ejemplo – Selección de elementos</h3>
          <div id="miDiv" className="bg-black/80 text-white p-4">Este es un div con id “miDiv”.</div>
          <div className="flex space-x-2">
            <span className="item bg-black/80 px-2 py-1 text-white">item A</span>
            <span className="item bg-black/80 px-2 py-1 text-white">item B</span>
          </div>
          <button
            onClick={handleSeleccion}
            className="bg-HMorado hover:bg-HMorado/80 text-white px-4 py-2 rounded font-bold"
          >
            Mostrar info
          </button>
          {seleccionInfo && (
            <p className="text-green-400 font-mono bg-black/60 p-4 rounded">{seleccionInfo}</p>
          )}
        </div>
      </div>

      {/* Modificar contenido y atributos */}
      <div className="space-y-6">
        <SubtemaItem {...domManipulationJs[2]} />
        <div className="bg-black/30 border-l-4 border-MAzul p-6 rounded-xl shadow-inner space-y-4">
          <h3 className="text-2xl font-phantom text-MAzul">Ejemplo – Modificar contenido/atributos</h3>
          <h4 id="titulo" className="text-white text-xl">Título original</h4>
          <img src="/images/Haru.png" alt="Original" width={555} height={555} className="mt-2 w-full h-auto rounded-lg object-contain" />
          <button
            onClick={handleModificar}
            className="bg-MAzul hover:bg-MAzul/80 text-black px-4 py-2 rounded font-bold"
          >
            Modificar contenido
          </button>
          {modContenidoMsg && (
            <p className="text-green-400 font-mono bg-black/60 p-4 rounded">{modContenidoMsg}</p>
          )}
        </div>
      </div>

      {/* Agregar / eliminar nodos */}
      <div className="space-y-6">
        <SubtemaItem {...domManipulationJs[3]} />
        <div className="bg-black/30 border-l-4 border-KRojo p-6 rounded-xl shadow-inner space-y-4">
          <h3 className="text-2xl font-phantom text-KRojo">Ejemplo – Agregar / Eliminar nodos</h3>
          <div
            ref={contenedorRef}
            className="bg-black/80 p-4 rounded space-y-2 text-white"
          >
            Contenedor de nodos dinámicos:
          </div>
          <div className="space-x-2">
            <button
              onClick={handleAgregarNodo}
              className="bg-KRojo hover:bg-KRojo/80 text-white px-4 py-2 rounded font-bold"
            >
              Agregar nodo
            </button>
            <button
              onClick={handleEliminarNodo}
              className="bg-KRojo hover:bg-KRojo/80 text-white px-4 py-2 rounded font-bold"
            >
              Eliminar nodo
            </button>
          </div>
          {nodosMsg && (
            <p className="text-green-400 font-mono bg-black/60 p-4 rounded">{nodosMsg}</p>
          )}
        </div>
      </div>

      {/* MutationObserver */}
      <div className="space-y-6">
        <SubtemaItem {...domManipulationJs[4]} />
        <div className="bg-black/30 border-l-4 border-HMorado p-6 rounded-xl shadow-inner space-y-4">
          <h3 className="text-2xl font-phantom text-HMorado">Ejemplo – MutationObserver</h3>
          <div
            ref={observadoRef}
            className="bg-black/80 p-4 rounded text-white"
          >
            Área observada (añade o modifica aquí algo)
          </div>
          {observadoMsg && (
            <p className="text-green-400 font-mono bg-black/60 p-4 rounded">{observadoMsg}</p>
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