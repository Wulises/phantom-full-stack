'use client'

import {
    Ruler,
    Paintbrush,
    Layers,
    Rows,
    Columns3,
    AlignCenterVertical,
    MonitorSmartphone,
    Settings2,
    Eye,
    MoveRight,
    Sparkles,
    Type,
    CircleDot,
    Eraser,
    FileCode2,
    SlidersHorizontal,
    Crop,
    SquareDashedBottomCode,
    Contrast,
    Box
} from 'lucide-react'

export const subTopicsCss = [
  
    {
        name: 'Fundamentos de CSS',
        description: 'Qué es CSS, cómo aplicarlo y su sintaxis básica',
        icono: <FileCode2 size={30} className='text-KRojo' />,
        route: 'fundaments'
    },
    {
        name: 'Selectores CSS',
        description: 'Selectores básicos, combinados, atributos y avanzados',
        icono: <CircleDot size={30} className='text-KRojo' />,
        route: 'selectors'
    },
    {
        name: 'Especificidad y cascadeo',
        description: 'Cómo funciona la prioridad de estilos, herencia y uso de !important',
        icono: <SlidersHorizontal size={30} className='text-KRojo' />,
        route: 'specificity'
    },
    {
        name: 'Unidades de medida',
        description: 'Diferencias entre px, %, em, rem, vw, vh y otras unidades',
        icono: <Ruler size={30} className='text-KRojo' />,
        route: 'units'
    },
    {
        name: 'Propiedades básicas',
        description: 'Color, fondo, texto, borde, espaciado y más',
        icono: <Paintbrush size={30} className='text-KRojo' />,
        route: 'basicProperties'
    },
    {
        name: 'Box Model y Display',
        description: 'Margen, borde, padding, contenido y tipos de display',
        icono: <SquareDashedBottomCode size={30} className='text-KRojo' />,
        route: 'boxModelDisplay'
    },
    {
        name: 'Posicionamiento',
        description: 'Uso de position, z-index, float y clear',
        icono: <AlignCenterVertical size={30} className='text-KRojo' />,
        route: 'positioning'
    },
    {
        name: 'Flexbox',
        description: 'Layout flexible con flex-direction, justify, align y más',
        icono: <Rows size={30} className='text-KRojo' />,
        route: 'flexbox'
    },
    {
        name: 'Grid Layout',
        description: 'Distribución en filas y columnas con CSS Grid',
        icono: <Columns3 size={30} className='text-KRojo' />,
        route: 'gridLayout'
    },
    {
        name: 'Responsive Design',
        description: 'Media queries, unidades relativas, enfoque mobile first',
        icono: <MonitorSmartphone size={30} className='text-KRojo' />,
        route: 'responsiveDesign'
    },
    {
        name: 'Overflow y scroll',
        description: 'Controla el desbordamiento de contenido y barras de scroll',
        icono: <MoveRight size={30} className='text-KRojo' />,
        route: 'overflowScroll'
    },
    {
        name: 'Tipografía avanzada',
        description: 'Fuentes, espaciado, estilos y propiedades tipográficas',
        icono: <Type size={30} className='text-KRojo' />,
        route: 'advancedTypography'
    },
    {
        name: 'Pseudo-clases y pseudoelementos',
        description: 'Hover, active, first-child, before, after y más',
        icono: <Eye size={30} className='text-KRojo' />,
        route: 'pseudoElements'
    },
    {
        name: 'Transformaciones',
        description: 'Mover, rotar, escalar y sesgar elementos con transform',
        icono: <Crop size={30} className='text-KRojo' />,
        route: 'transformations'
    },
    {
        name: 'Transiciones y animaciones',
        description: 'Efectos suaves con transition y animaciones con keyframes',
        icono: <Sparkles size={30} className='text-KRojo' />,
        route: 'transitionsAndAnimations'
    },
    {
        name: 'Variables CSS',
        description: 'Define y reutiliza estilos con variables personalizadas',
        icono: <Settings2 size={30} className='text-KRojo' />,
        route: 'cssVariables'
    },
    {
        name: 'Filtros y efectos visuales',
        description: 'Aplica blur, sombra, brillo y más con filter y backdrop-filter',
        icono: <Contrast size={30} className='text-KRojo' />,
        route: 'filtersEffects'
    },
    {
        name: 'Sombras y bordes avanzados',
        description: 'Sombra de texto, sombra de caja, bordes redondeados y outlines',
        icono: <Box size={30} className='text-KRojo' />,
        route: 'shadowsBorders'
    },
    {
        name: 'Organización y buenas prácticas',
        description: 'BEM, estructuras de carpetas y modularización de estilos',
        icono: <Layers size={30} className='text-KRojo' />,
        route: 'cssBestPractices'
    },
    {
        name: 'Accesibilidad visual',
        description: 'Contrastes adecuados, foco visible, legibilidad de texto',
        icono: <Eye size={30} className='text-KRojo' />,
        route: 'visualAccessibility'
    },
    {
        name: 'Reset y normalización',
        description: 'Elimina o estandariza los estilos por defecto del navegador',
        icono: <Eraser size={30} className='text-KRojo' />,
        route: 'resetCss'
    }
    
]
