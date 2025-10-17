'use client'

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { eventsJs } from '@/data/javascript/events'
import SubtemaItem from '@/components/subTopicItems'
import Link from 'next/link'

export default function EventsPage() {
  // === Estados para interacciones ===
  const [clicMensaje, setClicMensaje] = useState('')
  const [formMensaje, setFormMensaje] = useState('')
  const [delegacionMensaje, setDelegacionMensaje] = useState('')
  const [tecla, setTecla] = useState<string>('')

  const listaRef = useRef<HTMLUListElement>(null)

  // === Detección de tecla presionada ===
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setTecla(`Tecla presionada: ${e.key}`)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // === Delegación de eventos (click en <li>) ===
  useEffect(() => {
    const handleDelegacion = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'LI') {
        setDelegacionMensaje(`Clic en: ${target.textContent}`)
      }
    }
    const ul = listaRef.current
    if (ul) {
      ul.addEventListener('click', handleDelegacion)
    }
    return () => {
      if (ul) ul.removeEventListener('click', handleDelegacion)
    }
  }, [])

  
  // === Hanlder ===
    const handleEventClick = () => {
      setClicMensaje('¡Evento detectado!')
      alert('!Evento detecado!')
    }

  return (
    <main className="min-h-screen bg-gradient-to-br from-velvet to-royal px-6 py-10 space-y-12">
      <motion.h1
        className="text-center text-5xl font-phantom text-MAzul mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Eventos en JavaScript
      </motion.h1>

      <p className="text-center text-sm text-white/60 italic mb-10">
        Detecta interacciones del usuario y responde con poder Phantom.
      </p>

      {/* Qué es un evento */}
      <div className="space-y-6">
        <SubtemaItem {...eventsJs[0]} />
      </div>

      {/* Clic en botón */}
      <div className="space-y-6">
        <SubtemaItem {...eventsJs[1]} />
        <div className="bg-black/30 border-l-4 border-HMorado p-6 rounded-xl shadow-inner space-y-4">
          <h3 className="text-2xl font-phantom text-HMorado">Ejemplo – Evento de clic</h3>
          <button
            onClick={() => handleEventClick()}
            className="bg-HMorado hover:bg-HMorado/80 text-white px-4 py-2 rounded font-bold"
          >
            Haz clic aquí
          </button>
          {clicMensaje && (
            <p className="text-green-400 font-mono bg-black/60 p-4 rounded">{clicMensaje}</p>
          )}
        </div>
      </div>

      {/* preventDefault con formulario */}
      <div className="space-y-6">
        <SubtemaItem {...eventsJs[2]} />
        <div className="bg-black/30 border-l-4 border-MAzul p-6 rounded-xl shadow-inner space-y-4">
          <h3 className="text-2xl font-phantom text-MAzul">Ejemplo – Formulario sin recarga</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              setFormMensaje('Formulario interceptado sin recargar.')
            }}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Escribe algo"
              className="w-full p-2 rounded-md bg-black/80 border border-white/20 text-white"
            />
            <button
              type="submit"
              className="bg-MAzul hover:bg-MAzul/80 text-black px-4 py-2 rounded font-bold"
            >
              Enviar
            </button>
          </form>
          {formMensaje && (
            <p className="text-green-400 font-mono bg-black/60 p-4 rounded">{formMensaje}</p>
          )}
        </div>
      </div>

      {/* Delegación de eventos */}
      <div className="space-y-6">
        <SubtemaItem {...eventsJs[3]} />
        <div className="bg-black/30 border-l-4 border-KRojo p-6 rounded-xl shadow-inner space-y-4">
          <h3 className="text-2xl font-phantom text-KRojo">Ejemplo – Delegación de eventos</h3>
          <ul
            ref={listaRef}
            className="bg-black/50 p-4 rounded space-y-2 text-white list-disc list-inside"
          >
            <li className="cursor-pointer hover:text-KRojo">Elemento 1</li>
            <li className="cursor-pointer hover:text-KRojo">Elemento 2</li>
            <li className="cursor-pointer hover:text-KRojo">Elemento 3</li>
          </ul>
          {delegacionMensaje && (
            <p className="text-green-400 font-mono bg-black/60 p-4 rounded">
              {delegacionMensaje}
            </p>
          )}
        </div>
      </div>

      {/* keydown */}
      <div className="space-y-6">
        <SubtemaItem {...eventsJs[4]} />
        <div className="bg-black/30 border-l-4 border-HMorado p-6 rounded-xl shadow-inner space-y-4">
          <h3 className="text-2xl font-phantom text-HMorado">Ejemplo – Tecla presionada</h3>
          <p className="text-white/80">Presiona cualquier tecla y observa:</p>
          {tecla && (
            <p className="text-green-400 font-mono bg-black/60 p-4 rounded">{tecla}</p>
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