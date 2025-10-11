'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { dataTypesCoercion } from '@/data/javascript/dataTypesCoercion'
import SubtemaItem from '@/components/subTopicItems'
import Link from 'next/link'

export default function DataTypesCoercion() {
    // typeof interactivo
    const [inputTipo, setInputTipo] = useState('')
    const [tipoDetectado, setTipoDetectado] = useState('')
    const [errorTipo, setErrorTipo] = useState('')

    const manejarTipo = () => {
        setErrorTipo('')
        if (inputTipo.trim() === '') {
            setErrorTipo('Por favor ingresa un valor.')
            setTipoDetectado('')
            return
        }

        try {
            // Intentamos evaluar input, pero si es string sin comillas JSON.parse fallará
            // Así que chequeamos si es un valor primitivo entre comillas o no
            let valorEvaluado

            // Para manejar null, true, false, números y strings con comillas
            if (
                inputTipo === 'null' ||
                inputTipo === 'true' ||
                inputTipo === 'false' ||
                !isNaN(Number(inputTipo)) // números
            ) {
                valorEvaluado = JSON.parse(inputTipo)
            } else if (
                (inputTipo.startsWith('"') && inputTipo.endsWith('"')) ||
                (inputTipo.startsWith("'") && inputTipo.endsWith("'"))
            ) {
                // Cadena con comillas, parseamos
                valorEvaluado = JSON.parse(inputTipo)
            } else {
                // Si no, tomamos como string literal
                valorEvaluado = inputTipo
            }

            setTipoDetectado(typeof valorEvaluado)
        } catch (err) {
            setErrorTipo('Entrada inválida. Intenta escribir valores como "Hola", 42, true, null, etc.')
            setTipoDetectado('')
        }
    }

    // coerción implícita
    const [valorString, setValorString] = useState('5')
    const [valorNumber, setValorNumber] = useState(2)

    // coerción explícita
    const [valorConvertir, setValorConvertir] = useState('')
    const [resultadoConversion, setResultadoConversion] = useState({
        comoNumero: '',
        comoBoolean: '',
        comoString: '',
    })

    const manejarConversionExplicita = () => {
        setResultadoConversion({
            comoNumero: Number(valorConvertir).toString(),
            comoBoolean: Boolean(valorConvertir).toString(),
            comoString: String(valorConvertir),
        })
    }

    return (
        <main className="min-h-screen bg-gradient-to-br from-velvet to-royal px-6 py-10 space-y-12">
            <motion.h1
                className="text-center text-5xl font-phantom text-MAzul mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                Tipos de Datos y Coerción en JavaScript

                <p className="text-center text-sm text-white/60 italic mb-10">
                    Explora los tipos primitivos, objetos, typeof y cómo JavaScript transforma valores.
                </p>
            </motion.h1>


            {/* Tipos primitivos */}
            <div className="space-y-6">
                <SubtemaItem {...dataTypesCoercion[0]} />
            </div>

            {/* Tipos por referencia */}
            <div className="space-y-6">
                <SubtemaItem {...dataTypesCoercion[1]} />
            </div>

            {/* typeof */}
            <div className="space-y-6">
                <SubtemaItem {...dataTypesCoercion[2]} />

                <div className="bg-black/30 border-l-4 border-KRojo p-6 rounded-xl shadow-inner space-y-4">
                    <h3 className="text-2xl font-phantom text-KRojo">🧪 Ejemplo interactivo – typeof</h3>
                    <input
                        aria-label="Entrada para evaluar tipo con typeof"
                        className="w-full p-2 rounded-md bg-black/80 border border-white/20 text-white"
                        placeholder='Ej: "Hola", 42, true, null'
                        value={inputTipo}
                        onChange={(e) => setInputTipo(e.target.value)}
                    />
                    <button
                        onClick={manejarTipo}
                        className="bg-KRojo hover:bg-KRojo/80 text-white px-4 py-2 rounded-md font-bold"
                    >
                        Detectar tipo
                    </button>
                    {errorTipo && (
                        <p className="text-red-400 font-mono bg-black/60 p-4 rounded">{errorTipo}</p>
                    )}
                    {tipoDetectado && !errorTipo && (
                        <p className="text-green-400 font-mono bg-black/60 p-4 rounded">
                            Resultado: <strong>{tipoDetectado}</strong>
                        </p>
                    )}
                </div>
            </div>

            {/* Coerción implícita */}
            <div className="space-y-6">
                <SubtemaItem {...dataTypesCoercion[3]} />

                <div className="bg-black/30 border-l-4 border-MAzul p-6 rounded-xl shadow-inner space-y-4">
                    <h3 className="text-2xl font-phantom text-MAzul">Ejemplo interactivo – Coerción implícita</h3>
                    <label className="block text-white" htmlFor="valorStringInput">
                        Valor tipo string:
                        <input
                            id="valorStringInput"
                            aria-label="Valor tipo string para coerción implícita"
                            className="w-full mt-1 p-2 rounded-md bg-black/80 border border-white/20 text-white"
                            value={valorString}
                            onChange={(e) => setValorString(e.target.value)}
                        />
                    </label>

                    <label className="block text-white" htmlFor="valorNumberInput">
                        Valor tipo number:
                        <input
                            id="valorNumberInput"
                            aria-label="Valor tipo number para coerción implícita"
                            className="w-full mt-1 p-2 rounded-md bg-black/80 border border-white/20 text-white"
                            type="number"
                            value={valorNumber}
                            onChange={(e) => setValorNumber(Number(e.target.value))}
                        />
                    </label>

                    <div className="text-white mt-4 space-y-2">
                        <p>
                            "{valorString}" + {valorNumber} ={' '}
                            <span className="text-green-400 font-mono">
                                {valorString + valorNumber}
                            </span>
                        </p>
                        <p>
                            "{valorString}" - {valorNumber} ={' '}
                            <span className="text-green-400 font-mono">
                                {isNaN(parseFloat(valorString))
                                    ? 'NaN (valor string no convertible a número)'
                                    : parseFloat(valorString) - valorNumber}
                            </span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Coerción explícita */}
            <div className="space-y-6">

                <div className="bg-black/30 border-l-4 border-HMorado p-6 rounded-xl shadow-inner space-y-4">
                    <h3 className="text-2xl font-phantom text-HMorado">Ejemplo interactivo – Coerción explícita</h3>
                    <input
                        aria-label="Valor para convertir explícitamente"
                        className="w-full p-2 rounded-md bg-black/80 border border-white/20 text-white"
                        placeholder='Ingresa un valor (ej: "42", "", null)'
                        value={valorConvertir}
                        onChange={(e) => setValorConvertir(e.target.value)}
                    />
                    <button
                        onClick={manejarConversionExplicita}
                        className="bg-HMorado hover:bg-HMorado/80 text-white px-4 py-2 rounded-md font-bold shadow"
                    >
                        Convertir valor
                    </button>

                    <div className="text-white space-y-2 mt-4 bg-black/50 p-4 rounded">
                        <p>
                            <span className="text-HMorado">Number():</span>{' '}
                            <span className="font-mono">{resultadoConversion.comoNumero}</span>
                        </p>
                        <p>
                            <span className="text-HMorado">Boolean():</span>{' '}
                            <span className="font-mono">{resultadoConversion.comoBoolean}</span>
                        </p>
                        <p>
                            <span className="text-HMorado">String():</span>{' '}
                            <span className="font-mono">{resultadoConversion.comoString}</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Botón de regreso */}
            <div className="text-center mt-10">
                <Link href="/technologies/javaScript">
                    <button
                        aria-label="Volver al menú de subtemas de JavaScript"
                        className="bg-HMorado hover:bg-HMorado/80 text-white px-6 py-2 rounded-full shadow-md transition-all duration-300"
                    >
                        Volver al menú de subtemas
                    </button>
                </Link>
            </div>
        </main>
    )
}
