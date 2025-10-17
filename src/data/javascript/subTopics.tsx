'use client'

import {
  BookOpenCheck,
  FileCode2,
  CircleDot,
  Timer,
  Braces,
  Binary,
  Shuffle,
  Repeat,
  Divide,
  MoveRight,
  ScanSearch,
  Settings2,
  ListOrdered,
  CodeSquare,
  CircleDashed,
  PanelRight,
  Rocket,
  Layers,
} from 'lucide-react'

export const subTopicsJs = [
  {
    name: 'Fundamentos de JavaScript',
    description: 'Qué es JS, para qué sirve, historia y evolución',
    icono: <BookOpenCheck size={30} className='text-MAzul' />,
    route: 'fundaments'
  },
  {
    name: 'Sintaxis y declaraciones de variables básicas',
    description: 'Variables, constantes, comentarios, tipos de datos',
    icono: <FileCode2 size={30} className='text-MAzul' />,
    route: 'variables'
  },
  {
    name: 'Tipos de datos y coerción',
    description: 'Primitivos, objetos, typeof, coerción implícita/explicita',
    icono: <Binary size={30} className='text-MAzul' />,
    route: 'dataTypesCoercion'
  },
  {
    name: 'Operadores',
    description: 'Aritméticos, lógicos, comparación, asignación y más',
    icono: <Divide size={30} className='text-MAzul' />,
    route: 'operators'
  },
  {
    name: 'Estructuras de control',
    description: 'Condicionales (if, else, switch), bucles (for, while, do-while)',
    icono: <Repeat size={30} className='text-MAzul' />,
    route: 'controlStructures'
  },
  {
    name: 'Funciones',
    description: 'Declarativas, expresivas, flecha, callbacks y parámetros',
    icono: <Braces size={30} className='text-MAzul' />,
    route: 'functions'
  },
  {
    name: 'Ámbito y hoisting',
    description: 'Scope, var vs let/const, hoisting, temporal dead zone',
    icono: <MoveRight size={30} className='text-MAzul' />,
    route: 'scopeHoisting'
  },
  {
    name: 'Arreglos',
    description: 'Métodos, iteraciones, mutabilidad, destructuring',
    icono: <ListOrdered size={30} className='text-MAzul' />,
    route: 'arrays'
  },
  {
    name: 'Objetos',
    description: 'Creación, acceso, métodos, this, clases y prototipos',
    icono: <CircleDashed size={30} className='text-MAzul' />,
    route: 'objects'
  },
  {
    name: 'Desestructuración y spread/rest',
    description: 'Extraer y combinar datos de objetos y arrays',
    icono: <CircleDot size={30} className='text-MAzul' />,
    route: 'destructuringSpread'
  },
  {
    name: 'Funciones de orden superior',
    description: 'map, filter, reduce, forEach, find y más',
    icono: <Shuffle size={30} className='text-MAzul' />,
    route: 'higherOrderFunctions'
  },
  {
    name: 'Eventos en JavaScript',
    description: 'Listeners, propagación, preventDefault, delegation',
    icono: <Settings2 size={30} className='text-MAzul' />,
    route: 'events'
  },
  {
    name: 'Manipulación del DOM',
    description: 'Seleccionar, crear, modificar y eliminar elementos',
    icono: <CodeSquare size={30} className='text-MAzul' />,
    route: 'domManipulation'
  },
  {
    name: 'Temporizadores',
    description: 'setTimeout, setInterval, clearInterval',
    icono: <Timer size={30} className='text-MAzul' />,
    route: 'timers'
  },
  {
    name: 'JSON y almacenamiento local',
    description: 'localStorage, sessionStorage, JSON.parse/stringify',
    icono: <PanelRight size={30} className='text-MAzul' />,
    route: 'jsonStorage'
  },
  {
    name: 'Funciones asíncronas y Promesas',
    description: 'Callbacks, Promesas, async/await, manejo de errores',
    icono: <Rocket size={30} className='text-MAzul' />,
    route: 'asyncFunctions'
  },
  {
    name: 'Fetch API y llamadas HTTP',
    description: 'fetch, métodos HTTP, headers, manejo de respuestas',
    icono: <ScanSearch size={30} className='text-MAzul' />,
    route: 'fetchApi'
  },
  {
    name: 'Módulos de JS',
    description: 'import/export, organización de código por archivos',
    icono: <Layers size={30} className='text-MAzul' />,
    route: 'ModulesJs'
  },
]

/*
Su explicación clara

Su ejemplo de código

Una zona interactiva donde el usuario juegue con eso

Todo esto en un componente por tema (o subtema cuando valga la pena)

Basado en la lista que te pasé de los 21 subtemas principales (subTopicsJs)

Usando Next.js 13, Tailwind, React, TypeScript, etc.

Tú quieres una forma corta y clara de decirme:

“Oye Chat, recuerda el objetivo general de toda esta app, para que me entiendas aunque me vaya un rato o vuelva en días.”

Y sí: eso tiene TODO el sentido del mundo.
Así que aquí va cómo puedes decírmelo y lo que significa para mí:

✅ Frase para que yo entienda el objetivo general de tu app

🗣️ “Estoy creando un curso gamificado de JavaScript donde cada tema tiene teoría y un ejemplo interactivo, todo en un solo componente por tema.”

O versiones más cortas como:

“Mi app es un curso de JS interactivo, con teoría + práctica en cada tema.”

“Estoy armando un curso de JS con ejemplos jugables por tema.”

“Es un mega curso gamificado de JS, cada ruta es un subtema.”
Estoy creando un curso gamificado de JavaScript donde cada tema tiene teoría y un ejemplo interactivo, todo en un solo componente por tema.

Propuestas de ejemplos de código claros

Propuesta de interactividad realista y jugable

Toques temáticos de Persona 5 (frases, color, narrativa)

Sugerencia de estructura del componente

🎯 Cómo quieres trabajar siempre

Tema por tema, abordando todos los subtemas relevantes (no te quieres saltar nada)

Separando la data en /data/javascript/[tema].ts

Los ejemplos SIEMPRE deben tener interactividad real

Mantener la app visualmente coherente, divertida y didáctica

Nunca mostrar el extra directamente en la UI, solo como easter eggs internos

Siempre seguir el estilo visual "Phantom Full Stack", con sombras, colores y personajes

*/