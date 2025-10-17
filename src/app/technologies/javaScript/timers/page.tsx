'use client'

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { timersJs } from '@/data/javascript/timers'
import SubtemaItem from '@/components/subTopicItems'
import Link from 'next/link'

export default function TimersPage() {
  // === setTimeout ===
  const [mensajeTimeout, setMensajeTimeout] = useState('')
  const handleTimeout = () => {
    setMensajeTimeout('⏳ Esperando...')
    setTimeout(() => {
      setMensajeTimeout('✅ ¡Tiempo cumplido! Haru sonríe.')
    }, 2000)
  }

  // === setInterval ===
  const [contador, setContador] = useState(0)
  const intervaloRef = useRef<NodeJS.Timeout | null>(null)

  const iniciarIntervalo = () => {
    if (intervaloRef.current) return
    intervaloRef.current = setInterval(() => {
      setContador(prev => prev + 1)
    }, 1000)
  }

  const detenerIntervalo = () => {
    if (intervaloRef.current) {
      clearInterval(intervaloRef.current)
      intervaloRef.current = null
    }
  }

  // === Cuenta regresiva ===
  const [segundos, setSegundos] = useState<number>(5)
  const [activo, setActivo] = useState(false)
  const countdownRef = useRef<NodeJS.Timeout | null>(null)
  const [mensajeCuenta, setMensajeCuenta] = useState('')

  const iniciarCuentaRegresiva = () => {
    setActivo(true)
    let tiempo = segundos
    countdownRef.current = setInterval(() => {
      if (tiempo <= 0) {
        clearInterval(countdownRef.current!)
        setMensajeCuenta('🎉 ¡Tiempo terminado!')
        setActivo(false)
      } else {
        setMensajeCuenta(`⌛ Tiempo restante: ${tiempo}s`)
        tiempo--
      }
    }, 1000)
  }

  const cancelarCuenta = () => {
    if (countdownRef.current) {
      clearInterval(countdownRef.current)
      countdownRef.current = null
      setMensajeCuenta('⛔ Cuenta cancelada por Sumire.')
      setActivo(false)
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
        Temporizadores en JavaScript
      </motion.h1>

      <p className="text-center text-sm text-white/60 italic mb-10">
        Aprende a controlar el tiempo con <code>setTimeout</code>, <code>setInterval</code> y más.
      </p>

      {/* === Introducción === */}
      <div className="space-y-6">
        <SubtemaItem {...timersJs[0]} />
      </div>

      {/* === setTimeout === */}
      <div className="space-y-6">
        <SubtemaItem {...timersJs[1]} />
        <div className="bg-black/30 border-l-4 border-MAzul p-6 rounded-xl shadow-inner space-y-4">
          <h3 className="text-2xl font-phantom text-MAzul">Ejemplo – setTimeout</h3>
          <button
            onClick={handleTimeout}
            className="bg-MAzul hover:bg-MAzul/80 text-black px-4 py-2 rounded font-bold"
          >
            Esperar 2 segundos
          </button>
          {mensajeTimeout && (
            <p className="text-green-400 font-mono bg-black/60 p-4 rounded">
              {mensajeTimeout}
            </p>
          )}
        </div>
      </div>

      {/* === setInterval === */}
      <div className="space-y-6">
        <SubtemaItem {...timersJs[2]} />
        <div className="bg-black/30 border-l-4 border-KRojo p-6 rounded-xl shadow-inner space-y-4">
          <h3 className="text-2xl font-phantom text-KRojo">Ejemplo – setInterval</h3>
          <div className="flex items-center gap-4">
            <button
              onClick={iniciarIntervalo}
              className="bg-green-700 hover:bg-white/40 text-white px-4 py-2 rounded font-bold"
            >
              Iniciar
            </button>
            <button
              onClick={detenerIntervalo}
              className="bg-KRojo hover:bg-KRojo/80 text-white px-4 py-2 rounded font-bold"
            >
              Detener
            </button>
          </div>
          <p className="text-green-400 font-mono bg-black/60 p-4 rounded">
            Contador: {contador}
          </p>
        </div>
      </div>

      {/* === Cuenta regresiva === */}
      <div className="space-y-6">
        <SubtemaItem {...timersJs[3]} />
        <div className="bg-black/30 border-l-4 border-HMorado p-6 rounded-xl shadow-inner space-y-4">
          <h3 className="text-2xl font-phantom text-HMorado">Ejemplo – Cuenta regresiva</h3>
          <input
            type="number"
            value={segundos}
            onChange={(e) => setSegundos(Number(e.target.value))}
            className="w-full p-2 rounded-md bg-black/80 border border-white/20 text-white"
            min={1}
            disabled={activo}
          />
          <div className="flex items-center gap-4">
            <button
              onClick={iniciarCuentaRegresiva}
              className="bg-HMorado hover:bg-HMorado/80 text-white px-4 py-2 rounded font-bold disabled:opacity-50"
              disabled={activo}
            >
              Iniciar cuenta regresiva
            </button>
            <button
              onClick={cancelarCuenta}
              className="bg-KRojo hover:bg-KRojo/80 text-white px-4 py-2 rounded font-bold"
            >
              Cancelar
            </button>
          </div>
          {mensajeCuenta && (
            <p className="text-green-400 font-mono bg-black/60 p-4 rounded">
              {mensajeCuenta}
            </p>
          )}
        </div>
      </div>

      {/* === Volver === */}
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