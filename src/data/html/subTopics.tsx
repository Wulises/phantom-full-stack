'use client'

import {
    BookOpen,
    Code,
    Tag,
    TextCursorInput,
    Link2,
    Image,
    Table2,
    LayoutTemplate,
    List,
    FileText,
    Languages,
    Smartphone,
    Accessibility,
} from 'lucide-react'

export const subTopicsHtml = [


    // FUNDAMENTOS
    {
        name: 'Fundamentos',
        description: 'Estructura base del documento HTML',
        icono: <BookOpen size={30} className='text-Haru' />,
        route: 'fundaments'
    },


    // METADATOS Y COMENTARIOS
    {
        name: 'Comentarios y metadatos',
        description: 'Comentarios, etiquetas <meta> y <title>',
        icono: <Code size={30} className='text-Haru' />,
        route: 'metadataAndComments'
    },

    // ETIQUETAS DE TEXTO
    {
        name: 'Texto y formato',
        description: 'Encabezados, párrafos, negritas, itálicas...',
        icono: <FileText size={30} className='text-Haru' />,
        route: 'textFormats'
    },

    // LISTAS
    {
        name: 'Listas',
        description: 'Listas ordenadas, desordenadas y de definición',
        icono: <List size={30} className='text-Haru' />,
        route: 'lists'
    },

    // ENLACES
    {
        name: 'Enlaces',
        description: 'Cómo crear hipervínculos, rutas y navegación',
        icono: <Link2 size={30} className='text-Haru' />,
        route: 'links'
    },

    // IMÁGENES Y MULTIMEDIA
    {
        name: 'Imágenes y multimedia',
        description: 'Insertar imágenes, audio y video',
        icono: <Image size={30} className='text-Haru' />,
        route: 'multiMedia'
    },

    // TABLAS
    {
        name: 'Tablas',
        description: 'Construcción de tablas con filas y celdas',
        icono: <Table2 size={30} className='text-Haru' />,
        route: 'tables'
    },

    // FORMULARIOS
    {
        name: 'Formularios y entradas',
        description: 'Inputs, selects, botones y envío de datos',
        icono: <TextCursorInput size={30} className='text-Haru' />,
        route: 'forms'
    },

    // ATRIBUTOS
    {
        name: 'Atributos globales y específicos',
        description: 'class, id, href, src, alt, etc.',
        icono: <Tag size={30} className='text-Haru' />,
        route: 'globalAndSpecificAttributes'
    },

    // ENTIDADES Y SÍMBOLOS
    {
        name: 'Entidades y símbolos',
        description: 'Caracteres especiales como &copy;, &lt;, etc.',
        icono: <Languages size={30} className='text-Haru' />,
        route: 'entitiesAndSymbols'
    },

    // ETIQUETAS MENORES ÚTILES
    {
        name: 'Etiquetas útiles menores',
        description: '<abbr>, <kbd>, <mark>, <sup>, etc.',
        icono: <FileText size={30} className='text-Haru' />,
        route: 'minorUsefulTags'
    },

    // CONTENEDORES GENÉRICOS
    {
        name: 'Contenedores genéricos',
        description: '<div> y <span> como elementos estructurales',
        icono: <LayoutTemplate size={30} className='text-Haru' />,
        route: 'genericContainerTags'
    },

    // ELEMENTOS SEMÁNTICOS
    {
        name: 'Elementos semánticos',
        description: '<header>, <main>, <article>, etc.',
        icono: <LayoutTemplate size={30} className='text-Haru' />,
        route: 'elementsSemantics'
    },

    // RESPONSIVIDAD NATIVA
    {
        name: 'Responsividad nativa',
        description: 'Meta viewport, <picture>, srcset, etc.',
        icono: <Smartphone size={30} className='text-Haru' />,
        route: 'nativeResponsiveness'
    },

    // ACCESIBILIDAD
    {
        name: 'Accesibilidad básica (con ARIA)',
        description: 'Buenas prácticas con alt, label, roles y ARIA',
        icono: <Accessibility size={30} className='text-Haru' />,
        route: 'accessibility'
    }

]