'use client'
import { useState } from 'react'

export default function Interactivo() {
  const [activo, setActivo] = useState(false)

  return (
    <div className="space-y-4">
      <button
        onClick={() => setActivo(!activo)}
        className="bg-HMorado px-4 py-2 text-white rounded hover:bg-Haru transition"
      >
        Cambiar color
      </button>

      <div className={`p-4 rounded text-center transition-all duration-300 ${activo ? 'bg-green-500' : 'bg-pink-500'}`}>
        {activo ? 'Activo 💚' : 'Inactivo 💖'}
      </div>
    </div>
  )
}
