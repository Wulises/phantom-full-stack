export const advancedTypographyCSS = [
  {
    title: 'Fuentes personalizadas (Google Fonts)',
    description: 'Puedes importar fuentes externas como Google Fonts para mejorar la apariencia de tu texto',
    code: `/* En tu HTML o archivo global de CSS */
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap')

body {
  font-family: 'Roboto', sans-serif
}`,
    tip: 'Usa solo las variantes de fuente que realmente necesites para optimizar el rendimiento'
  },
  {
    title: 'Font-family y jerarquías',
    description: 'Siempre define una fuente principal y una o más de respaldo en caso de que falle la carga',
    code: `h1 {
  font-family: 'Merriweather', Georgia, serif
}

p {
  font-family: 'Open Sans', Arial, sans-serif
}`,
    tip: 'Las familias genéricas como serif o sans-serif actúan como fallback'
  },
  {
    title: 'Tamaño y escalabilidad (rem, em)',
    description: 'Usa unidades relativas para escalar mejor en diferentes pantallas y respetar preferencias del usuario',
    code: `html {
  font-size: 16px
}

h1 {
  font-size: 2.5rem
}

p {
  font-size: 1rem
}`,
    tip: '1rem = tamaño raíz, 1em = relativo al elemento padre'
  },
  {
    title: 'Propiedades de texto',
    description: 'Controla la apariencia del texto con propiedades como spacing, align, transform y decoration',
    code: `.title {
  text-align: center
  text-transform: uppercase
  letter-spacing: 2px
  text-decoration: underline
}`,
    tip: 'Juega con el espaciado entre letras para mejorar la legibilidad y estilo'
  },
  {
    title: 'Line height y legibilidad',
    description: 'line-height controla el espacio entre líneas de texto. Un valor adecuado mejora mucho la lectura',
    code: `p {
  line-height: 1.6
}`,
    tip: 'Valores entre 1.4 y 1.8 suelen ser ideales para párrafos'
  },
  {
    title: 'Responsive Typography',
    description: 'Usa media queries o funciones como clamp() para ajustar el tamaño de texto según el ancho de pantalla',
    code: `h1 {
  font-size: clamp(1.5rem, 5vw, 3rem)
}`,
    tip: 'clamp() permite definir un tamaño mínimo, uno preferido y uno máximo'
  },
  {
    title: 'Web Safe Fonts',
    description: 'Son fuentes que están preinstaladas en la mayoría de sistemas operativos',
    code: `/* Algunos ejemplos comunes */
font-family: Arial, Helvetica, sans-serif
font-family: 'Courier New', Courier, monospace
font-family: Georgia, 'Times New Roman', serif`,
    tip: 'Útiles como fallback cuando no puedes usar fuentes externas'
  },
  {
    title: 'Antialiasing y renderizado de texto',
    description: 'Algunos ajustes permiten mejorar la nitidez del texto en ciertas plataformas',
    code: `.text-smooth {
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
}`,
    tip: 'No tiene efecto en todos los navegadores, pero puede marcar la diferencia visual'
  }
]