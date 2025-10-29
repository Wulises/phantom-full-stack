'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { objectsJs } from '@/data/javascript/objects'
import SubtemaItem from '@/components/subTopicItems'
import Link from 'next/link'

export default function ObjectsJs() {
  // === Estados ===
  const [nombrePropiedad, setNombrePropiedad] = useState('nombre')
  const [resultadoPropiedad, setResultadoPropiedad] = useState('')

  const [saludoMetodo, setSaludoMetodo] = useState('')

  const [propPersona, setPropPersona] = useState('edad')
  const [valorDestructuring, setValorDestructuring] = useState('')

  const [nombreAlumno, setNombreAlumno] = useState('Ann')
  const [saludoAlumno, setSaludoAlumno] = useState('')

  const [objIterado] = useState<{ [key: string]: string }>({
    nombre: 'Makoto',
    rol: 'Líder',
    habilidad: 'Nuke',
  })
  const [resultadoIteracion, setResultadoIteracion] = useState('')

  // === Funciones ===
  const accederPropiedad = () => {
    const persona = { nombre: 'Haru', edad: 27, ciudad: 'Tokyo' }
    setResultadoPropiedad(
      String(
        persona[nombrePropiedad as keyof typeof persona] ?? 'No encontrada'
      )
    )
  }

  const ejecutarSaludoMetodo = () => {
    const persona = {
      nombre: 'Ulises',
      saludar: function () {
        return `Hola, soy ${this.nombre}`
      },
    }
    setSaludoMetodo(persona.saludar())
  }

  const aplicarDestructuring = () => {
    const persona: { [key: string]: string | number } = {
      nombre: 'Kasumi',
      edad: 18,
      ciudad: 'Tokyo',
    }
    const { [propPersona]: valor } = persona
    setValorDestructuring(String(valor ?? 'No existe'))
  }

  const crearAlumno = () => {
    class Persona {
      nombre: string
      constructor(nombre: string) {
        this.nombre = nombre
      }
      saludar() {
        return `Hola, soy ${this.nombre}`
      }
    }
    const ann = new Persona(nombreAlumno)
    setSaludoAlumno(ann.saludar())
  }

  const manejarIteracion = () => {
    let resultado = ''
    for (const clave in objIterado) {
      resultado += `${clave}: ${objIterado[clave]}\n`
    }
    setResultadoIteracion(resultado)
  }

  // === JSX ===
  return (
    <main className="min-h-screen bg-gradient-to-br from-velvet to-royal px-6 py-10 space-y-12">
      <motion.h1
        className="text-center text-5xl font-phantom text-MAzul mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Objetos en JavaScript
      </motion.h1>

      <p className="text-center text-sm text-white/60 italic mb-10">
        Aprende a crear, acceder, iterar y estructurar objetos en JavaScript
      </p>

      {/* === Creación y acceso === */}
      <div className="space-y-6">
        <SubtemaItem {...objectsJs[0]} />
        <div className="bg-black/30 border-l-4 border-KRojo p-6 rounded-xl shadow-inner space-y-4">
          <h3 className="text-2xl font-phantom text-KRojo">
            Ejemplo – acceso a propiedad
          </h3>
          <p className="text-white/70 text-sm italic">
            Imagina que tienes un objeto <code> persona </code> con propiedades:
            <code>{` { nombre: 'Haru', edad: 27, ciudad: 'Tokyo' }`}</code>.
            <br />
            Escribe una de esas propiedades para ver su valor.
          </p>
          <input
            type="text"
            placeholder="Ejemplo: nombre, edad o ciudad"
            className="w-full p-2 rounded-md bg-black/80 border border-white/20 text-white"
            value={nombrePropiedad}
            onChange={(e) => setNombrePropiedad(e.target.value)}
          />
          <button
            onClick={accederPropiedad}
            className="bg-KRojo hover:bg-KRojo/80 text-white px-4 py-2 rounded-md font-bold"
          >
            Mostrar propiedad
          </button>
          {resultadoPropiedad && (
            <p className="text-green-400 font-mono bg-black/60 p-4 rounded">
              Resultado: {resultadoPropiedad}
            </p>
          )}
        </div>
      </div>

      {/* === Métodos y this === */}
      <div className="space-y-6">
        <SubtemaItem {...objectsJs[1]} />
        <div className="bg-black/30 border-l-4 border-HMorado p-6 rounded-xl shadow-inner space-y-4">
          <h3 className="text-2xl font-phantom text-HMorado">
            Ejemplo – métodos y this
          </h3>
          <p className="text-white/70 text-sm italic">
            Al hacer clic, el objeto <code>persona</code> ejecutará su propio
            método <code>saludar()</code> que usa <code>this</code> para
            referirse a sí mismo.
          </p>
          <button
            onClick={ejecutarSaludoMetodo}
            className="bg-HMorado hover:bg-HMorado/80 text-white px-4 py-2 rounded-md font-bold"
          >
            Ejecutar saludo
          </button>
          {saludoMetodo && (
            <p className="text-green-400 font-mono bg-black/60 p-4 rounded">
              {saludoMetodo}
            </p>
          )}
        </div>
      </div>

      {/* === Destructuring === */}
      <div className="space-y-6">
        <SubtemaItem {...objectsJs[2]} />
        <div className="bg-black/30 border-l-4 border-MAzul p-6 rounded-xl shadow-inner space-y-4">
          <h3 className="text-2xl font-phantom text-MAzul">
            Ejemplo – destructuring
          </h3>
          <p className="text-white/70 text-sm italic">
            Extrae una propiedad específica del objeto <code>persona</code>{' '}
            usando destructuring. Prueba escribiendo <code>nombre</code>,{' '}
            <code>edad</code> o <code>ciudad</code>.
          </p>
          <input
            type="text"
            placeholder="Ejemplo: edad"
            className="w-full p-2 rounded-md bg-black/80 border border-white/20 text-white"
            value={propPersona}
            onChange={(e) => setPropPersona(e.target.value)}
          />
          <button
            onClick={aplicarDestructuring}
            className="bg-MAzul hover:bg-MAzul/80 text-black px-4 py-2 rounded-md font-bold"
          >
            Obtener valor
          </button>
          {valorDestructuring && (
            <p className="text-green-400 font-mono bg-black/60 p-4 rounded">
              Resultado: {valorDestructuring}
            </p>
          )}
        </div>
      </div>

      {/* === Clases === */}
      <div className="space-y-6">
        <SubtemaItem {...objectsJs[3]} />
        <div className="bg-black/30 border-l-4 border-KRojo p-6 rounded-xl shadow-inner space-y-4">
          <h3 className="text-2xl font-phantom text-KRojo">
            Ejemplo – clase Persona
          </h3>
          <p className="text-white/70 text-sm italic">
            Escribe el nombre de un alumno para crear una nueva instancia de la
            clase <code>Persona</code> y ver cómo su método{' '}
            <code>saludar()</code> usa <code>this</code>.
          </p>
          <input
            type="text"
            placeholder="Ejemplo: Ann, Ryuji, Futaba..."
            className="w-full p-2 rounded-md bg-black/80 border border-white/20 text-white"
            value={nombreAlumno}
            onChange={(e) => setNombreAlumno(e.target.value)}
          />
          <button
            onClick={crearAlumno}
            className="bg-KRojo hover:bg-KRojo/80 text-white px-4 py-2 rounded-md font-bold"
          >
            Crear saludo
          </button>
          {saludoAlumno && (
            <p className="text-green-400 font-mono bg-black/60 p-4 rounded">
              {saludoAlumno}
            </p>
          )}
        </div>
      </div>

      {/* === for...in === */}
      <div className="space-y-6">
        <SubtemaItem {...objectsJs[4]} />
        <div className="bg-black/30 border-l-4 border-HMorado p-6 rounded-xl shadow-inner space-y-4">
          <h3 className="text-2xl font-phantom text-HMorado">
            Ejemplo – for...in
          </h3>
          <p className="text-white/70 text-sm italic">
            Usa un bucle for...in para recorrer todas las propiedades del objeto{' '}
          </p>
          <button
            onClick={manejarIteracion}
            className="bg-HMorado hover:bg-HMorado/80 text-white px-4 py-2 rounded-md font-bold"
          >
            Mostrar propiedades
          </button>
          {resultadoIteracion && (
            <pre className="text-green-400 font-mono bg-black/60 p-4 rounded whitespace-pre-wrap">
              {resultadoIteracion}
            </pre>
          )}
        </div>
      </div>

      {/* === Volver === */}
      <div className="text-center mt-10">
        <Link href="/technologies/javaScript">
          <button className="bg-MAzul hover:bg-MAzul/80 text-black px-6 py-2 rounded-full shadow-md transition-all duration-300">
            Volver al menú de subtemas
          </button>
        </Link>
      </div>
    </main>
  )
}
