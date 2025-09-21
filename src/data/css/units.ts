export const unitsCSS = [
    
    {
        title: 'Unidades absolutas',
        description: 'Son unidades fijas que no cambian con el entorno. Siempre representan la misma medida',
        code: `/* Pulgadas */
div {
    width: 2in;
}

/* Centímetros */
div {
    height: 5cm;
}

/* Puntos tipográficos */
p {
    font-size: 12pt;
}`,
        tip: 'Son poco utilizadas en web. Solo úsalas si necesitas impresión precisa'
    },
    {
        title: 'Unidades relativas al documento',
        description: 'Cambian su tamaño en función de la fuente raíz o del elemento padre',
        code: `/* em: relativo al elemento padre */
p {
    font-size: 1.5em;
}

/* rem: relativo al elemento raíz (html) */
h1 {
    margin-bottom: 2rem;
}`,
        tip: 'Prefiere rem para mantener consistencia en todo el diseño'
    },
    {
        title: 'Unidades relativas a la ventana',
        description: 'Se adaptan al tamaño del viewport (pantalla). Útiles para diseño responsive',
        code: `/* Ancho del viewport */
section {
    width: 80vw;
}

/* Alto del viewport */
section {
    height: 60vh;
}`,
        tip: 'vw y vh son clave para crear layouts adaptables sin media queries'
    },
    {
        title: 'Porcentajes (%)',
        description: 'Relativo al tamaño del contenedor padre',
        code: `div {
    width: 50%;
    padding: 10%;
}`,
        tip: 'Son muy útiles para márgenes, paddings y ancho de elementos fluidos'
    }

]
