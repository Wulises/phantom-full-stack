'use client'
import {
  Palette,
  Paintbrush,
  Text,
  Box,
  AlignCenterVertical,
  Rows,
  Columns3,
  MonitorSmartphone,
  Type,
  Sparkles,
  MoveRight,
  WandSparkles,
  Settings2,
  Layers,
  Eye,
} from 'lucide-react'

export const subTopicsCss = [

  // FUNDAMENTOS
  {
    name: 'Fundamentos de CSS',
    description: 'Qué es CSS, cómo aplicarlo y su sintaxis básica',
    icono: <Palette size={30} className='text-KRojo' />,
    route: 'fundaments'
  },

  // SELECTORES
  {
    name: 'Selectores CSS',
    description: 'Selectores básicos, combinados, atributos y avanzados',
    icono: <WandSparkles size={30} className='text-KRojo' />,
    route: 'cssSelectors'
  },

  // PROPIEDADES BÁSICAS
  {
    name: 'Propiedades básicas',
    description: 'Color, fondo, texto, borde, espacio y más',
    icono: <Paintbrush size={30} className='text-KRojo' />,
    route: 'basicProperties'
  },

  // BOX MODEL
  {
    name: 'Box Model y Display',
    description: 'Margen, borde, padding y display',
    icono: <Box size={30} className='text-KRojo' />,
    route: 'boxModelDisplay'
  },

  // POSICIONAMIENTO
  {
    name: 'Posicionamiento',
    description: 'Position, z-index, float y clear',
    icono: <AlignCenterVertical size={30} className='text-KRojo' />,
    route: 'positioning'
  },

  // FLEXBOX
  {
    name: 'Flexbox',
    description: 'Layout flexible con flex-direction, justify, align...',
    icono: <Rows size={30} className='text-KRojo' />,
    route: 'flexbox'
  },

  // GRID
  {
    name: 'Grid Layout',
    description: 'Distribuye contenido en filas y columnas',
    icono: <Columns3 size={30} className='text-KRojo' />,
    route: 'gridLayout'
  },

  // RESPONSIVE DESIGN
  {
    name: 'Responsive Design',
    description: 'Media queries, unidades relativas, mobile first...',
    icono: <MonitorSmartphone size={30} className='text-KRojo' />,
    route: 'responsiveDesign'
  },

  // TIPOGRAFÍA AVANZADA
  {
    name: 'Tipografía avanzada',
    description: 'Fuentes, espaciado, estilos y más detalles visuales',
    icono: <Type size={30} className='text-KRojo' />,
    route: 'advancedTypography'
  },

  // TRANSICIONES Y ANIMACIONES
  {
    name: 'Transiciones y animaciones',
    description: 'Transiciones suaves y animaciones con keyframes',
    icono: <Sparkles size={30} className='text-KRojo' />,
    route: 'transitionsAndAnimations'
  },

  // TRANSFORMACIONES
  {
    name: 'Transformaciones',
    description: 'Girar, mover, escalar y transformar elementos',
    icono: <MoveRight size={30} className='text-KRojo' />,
    route: 'transformations'
  },

  // VARIABLES CSS
  {
    name: 'Variables CSS',
    description: 'Personaliza con variables nativas y reusables',
    icono: <Settings2 size={30} className='text-KRojo' />,
    route: 'cssVariables'
  },

  // ORGANIZACIÓN Y BEM
  {
    name: 'Organización y buenas prácticas',
    description: 'BEM, organización de archivos y arquitectura CSS',
    icono: <Layers size={30} className='text-KRojo' />,
    route: 'cssBestPractices'
  },

  // ACCESIBILIDAD VISUAL
  {
    name: 'Accesibilidad visual',
    description: 'Contrastes, foco visible y legibilidad',
    icono: <Eye size={30} className='text-KRojo' />,
    route: 'visualAccessibility'
  }

]