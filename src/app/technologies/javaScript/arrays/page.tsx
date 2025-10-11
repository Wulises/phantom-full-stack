'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { arraysJs } from '@/data/javascript/arrays'
import SubtemaItem from '@/components/subTopicItems'
import Link from 'next/link'

export default function ArraysJs() {
  const [numeros, setNumeros] = useState<number[]>([1, 2, 3])
  const [nombres, setNombres] = useState(['Ann', 'Makoto', 'Futaba'])
  const [arrayInput, setArrayInput] = useState('1,2,3')
  const [spreadArray, setSpreadArray] = useState<number[]>([])
  const [buscarInput, setBuscarInput] = useState('')
  const [resultadoBusqueda, setResultadoBusqueda] = useState('')

  // Nuevo estado para array personalizado
  const [inputArrayStr, setInputArrayStr] = useState('')
  const [customArray, setCustomArray] = useState<string[]>([])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [elementoSeleccionado, setElementoSeleccionado] = useState<string | null>(null)

  const handleCrearArray = () => {
    const arr = inputArrayStr
      .split(',')
      .map(el => el.trim())
      .filter(el => el !== '')

    if (arr.length !== 3) {
      alert('Debes ingresar exactamente 3 elementos separados por coma')
      return
    }

    setCustomArray(arr)
    setElementoSeleccionado(null)
  }

  const handleSeleccionarIndice = () => {
    const el = customArray[selectedIndex]
    setElementoSeleccionado(el)
  }

  // === Handlers ===

  const handleMutacion = (tipo: 'push' | 'pop' | 'shift' | 'unshift') => {
    const copia = [...numeros]
    switch (tipo) {
      case 'push':
        copia.push(99)
        break
      case 'pop':
        copia.pop()
        break
      case 'unshift':
        copia.unshift(0)
        break
      case 'shift':
        copia.shift()
        break
    }
    setNumeros(copia)
  }

  const handleMap = () => {
    setNombres(nombres.map(n => n.toUpperCase()))
  }

  const handleSpread = () => {
    if (!arrayInput.includes(',')) {
      alert('Debes separar los números con comas (ej: 1,2,3)')
      return
    }

    const nums = arrayInput
      .split(',')
      .map(n => parseInt(n.trim()))
      .filter(n => !isNaN(n))

    if (nums.length === 0) {
      alert('No se encontraron números válidos')
      return
    }

    setSpreadArray([...nums, 100, 200])
  }


  const handleBusqueda = () => {
    const personas = ['Haru', 'Makoto', 'Sumire']
    const encontrado = personas.find(p => p === buscarInput)
    const filtrados = personas.filter(p => p.startsWith(buscarInput))
    const incluye = personas.includes(buscarInput)

    const resultado = `
      find: ${encontrado || 'no encontrado'},
      filter: [${filtrados.join(', ')}],
      includes: ${incluye}
    `
    setResultadoBusqueda(resultado)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-velvet to-royal px-6 py-10 space-y-12">
      <motion.h1
        className="text-center text-5xl font-phantom text-MAzul mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Arrays en JavaScript
      </motion.h1>

      <p className="text-center text-sm text-white/60 italic mb-10">
        Aprende a crear, modificar, recorrer, buscar y combinar arrays de forma moderna.
      </p>

      {/* Creación y acceso */}
      <div className="space-y-6">
        <SubtemaItem {...arraysJs[0]} />
        <div className="bg-black/30 border-l-4 border-KRojo p-6 rounded-xl space-y-4">
          <h3 className="text-xl font-phantom text-KRojo">Ejemplo interactivo</h3>

          <input
            type="text"
            className="w-full p-2 rounded-md bg-black/80 border border-white/20 text-white"
            placeholder="Ej: manzana,banana,fresa"
            value={inputArrayStr}
            onChange={(e) => setInputArrayStr(e.target.value)}
          />

          <button
            onClick={handleCrearArray}
            className="bg-KRojo hover:bg-KRojo/80 text-white px-4 py-2 rounded-md font-bold"
          >
            Crear array
          </button>

          {customArray.length > 0 && (
            <div className="space-y-2">
              <p className="text-white">
                Array creado: <span className="text-green-400 font-mono">[{customArray.join(', ')}]</span>
              </p>

              <label className="text-KRojo">Selecciona índice (0-2):</label>
              <select
                className="w-full p-2 rounded-md bg-black/80 border border-white/20 text-white"
                value={selectedIndex}
                onChange={(e) => setSelectedIndex(Number(e.target.value))}
              >
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
              </select>

              <button
                onClick={handleSeleccionarIndice}
                className="bg-KRojo hover:bg-KRojo/80 text-black px-4 py-2 rounded-md font-bold mt-2"
              >
                Mostrar elemento
              </button>

              {elementoSeleccionado && (
                <p className="text-green-400 font-mono">
                  Elemento en índice {selectedIndex}: {elementoSeleccionado}
                </p>
              )}
            </div>
          )}
        </div>

      </div>

      {/* Métodos de mutación */}
      <div className="space-y-6">
        <SubtemaItem {...arraysJs[1]} />
        <div className="bg-black/30 border-l-4 border-MAzul p-6 rounded-xl space-y-4">
          <h3 className="text-xl font-phantom text-MAzul">Mutaciones (push, pop...)</h3>
          <div className="flex flex-wrap gap-3">
            {['push', 'pop', 'unshift', 'shift'].map(tipo => (
              <button
                key={tipo}
                onClick={() => handleMutacion(tipo as any)}
                className="bg-MAzul hover:bg-MAzul/80 text-black px-4 py-2 rounded-md font-bold"
              >
                {tipo}
              </button>
            ))}
          </div>
          <p className="text-green-400 font-mono">[{numeros.join(', ')}]</p>
        </div>
      </div>

      {/* Iterar forEach / map */}
      <div className="space-y-6">
        <SubtemaItem {...arraysJs[2]} />
        <div className="bg-black/30 border-l-4 border-HMorado p-6 rounded-xl space-y-4">
          <h3 className="text-xl font-phantom text-HMorado">Iterar y transformar</h3>
          <button
            onClick={handleMap}
            className="bg-HMorado hover:bg-HMorado/80 text-white px-4 py-2 rounded-md font-bold"
          >
            Convertir a mayúsculas
          </button>
          <p className="text-green-400 font-mono">[{nombres.join(', ')}]</p>
        </div>
      </div>

      {/* Destructuring y spread */}
      <div className="space-y-6">
        <SubtemaItem {...arraysJs[3]} />
        <div className="bg-black/30 border-l-4 border-KRojo p-6 rounded-xl space-y-4">
          <h3 className="text-xl font-phantom text-KRojo">Spread operator</h3>
          <input
            type="text"
            className="w-full p-2 rounded-md bg-black/80 border border-white/20 text-white"
            placeholder="Ej: 1,2,3"
            value={arrayInput}
            onChange={(e) => setArrayInput(e.target.value)}
          />
          <button
            onClick={handleSpread}
            className="bg-KRojo hover:bg-KRojo/80 text-white px-4 py-2 rounded-md font-bold"
          >
            Aplicar spread
          </button>
          <p className="text-green-400 font-mono">[{spreadArray.join(', ')}]</p>
        </div>
      </div>

      {/* Buscar y filtrar */}
      <div className="space-y-6">
        <SubtemaItem {...arraysJs[4]} />
        <div className="bg-black/30 border-l-4 border-MAzul p-6 rounded-xl space-y-4">
          <h3 className="text-xl font-phantom text-MAzul">Buscar en array</h3>
          <input
            type="text"
            placeholder="Ingresa nombre (ej: Haru)"
            className="w-full p-2 rounded-md bg-black/80 border border-white/20 text-white"
            value={buscarInput}
            onChange={(e) => setBuscarInput(e.target.value)}
          />
          <button
            onClick={handleBusqueda}
            className="bg-MAzul hover:bg-MAzul/80 text-black px-4 py-2 rounded-md font-bold"
          >
            Buscar
          </button>
          {resultadoBusqueda && (

            <pre className='bg-black/90 text-green-400 rounded-md text-base overflow-auto border border-white/10 shadow-inner whitespace-pre font-mono'>
              <p className="text-green-400 font-mono whitespace-pre-wrap">
                {resultadoBusqueda}
              </p>
            </pre>

          )}
        </div>
      </div>

      {/* Volver al menú */}
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