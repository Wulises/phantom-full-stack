'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { jsModulesJs } from '@/data/javascript/jsModules'
import SubtemaItem from '@/components/subTopicItems'
import Link from 'next/link'

// Ejemplo básico de export/import simulado
const suma = (a: number, b: number) => a + b
const resta = (a: number, b: number) => a - b

export default function JsModulesPage() {
  const [resultado, setResultado] = useState<number | null>(null)
  const [cargando, setCargando] = useState(false)
  const [dinamico, setDinamico] = useState<string | null>(null)

  // Simulación de uso de funciones exportadas
  const usarFunciones = () => {
    const r1 = suma(3, 2)
    const r2 = resta(10, 4)
    setResultado(r1 + r2)
  }

  // Import dinámico simulado (ejemplo real)
  const cargarModuloPesado = async () => {
    setCargando(true)
    try {
      const mod = await import('@/utils/fakeHeavyModule')
      console.log(mod)
      setDinamico(mod?.mensaje || 'Módulo cargado sin mensaje')
    } catch (error) {
      console.error('Error al cargar el módulo:', error) // Imprime el error en consola
      setDinamico('❌ Error al cargar el módulo')
    } finally {
      setCargando(false)
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
        Módulos en JavaScript
      </motion.h1>

      <p className="text-center text-sm text-white/60 italic mb-10">
        Aprende a dividir tu código en archivos, importar, exportar y trabajar
        con módulos.
      </p>

      {/* Teoría */}
      <div className="space-y-6">
        {jsModulesJs.map((subtema, i) => (
          <div key={i} className="space-y-6">
            <SubtemaItem {...subtema} />
          </div>
        ))}
      </div>

      {/* Interactivo 1 – Simulación de import/export */}
      <div className="bg-black/30 border-l-4 border-MAzul p-6 rounded-xl shadow-inner space-y-4">
        <h3 className="text-2xl font-phantom text-MAzul">
          Ejemplo – Usando funciones importadas
        </h3>
        <p className="text-white/70">
          Simulamos haber importado funciones <code>suma</code> y{' '}
          <code>resta</code> desde otro módulo. Al hacer clic, se ejecutan ambas
          y se muestra la suma total.
        </p>
        <button
          onClick={usarFunciones}
          className="bg-MAzul hover:bg-MAzul/80 text-black px-4 py-2 rounded font-bold"
        >
          Ejecutar funciones
        </button>
        {resultado !== null && (
          <p className="text-green-400 font-mono bg-black/60 p-4 rounded">
            Resultado combinado: {resultado}
          </p>
        )}
      </div>

      {/* Interactivo 2 – Import dinámico */}
      <div className="bg-black/30 border-l-4 border-HMorado p-6 rounded-xl shadow-inner space-y-4">
        <h3 className="text-2xl font-phantom text-HMorado">
          Ejemplo – Import dinámico
        </h3>
        <p className="text-white/70">
          Al hacer clic, se importa un módulo pesado (falso) solo cuando lo
          necesitas.
        </p>
        <button
          onClick={cargarModuloPesado}
          className="bg-HMorado hover:bg-HMorado/80 text-white px-4 py-2 rounded font-bold"
        >
          Cargar módulo dinámicamente
        </button>
        {cargando && <p className="text-yellow-400">Cargando módulo...</p>}
        {dinamico && (
          <p className="text-green-400 font-mono bg-black/60 p-4 rounded">
            {dinamico}
          </p>
        )}
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
