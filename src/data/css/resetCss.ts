export const resetCss = [
  {
    title: '¿Qué es un reset CSS?',
    description: 'Elimina o estandariza los estilos por defecto del navegador para evitar inconsistencias',
    code: `/* Reset básico */
* {
  margin: 0
  padding: 0
  box-sizing: border-box
}`,
    tip: 'Usa reset para empezar con una base limpia y uniforme en todos los navegadores'
  },
  {
    title: 'Normalize CSS',
    description: 'Normaliza estilos para mantener consistencia sin eliminar todo el estilo por defecto',
    code: `/* Ejemplo básico de normalize */
html {
  line-height: 1.15
  -webkit-text-size-adjust: 100%
}

body {
  margin: 0
}`,
    tip: 'Normalize es más suave que un reset completo y conserva estilos útiles'
  },
  {
    title: 'Box-sizing border-box',
    description: 'Incluye padding y borde en el tamaño total de los elementos para un control más fácil',
    code: `*, *::before, *::after {
  box-sizing: border-box
}`,
    tip: 'Esta propiedad facilita el diseño y evita cálculos complicados'
  },
  {
    title: 'Eliminar estilos en listas y enlaces',
    description: 'Quita estilos por defecto para listas y enlaces para personalizarlos',
    code: `ul, ol {
  list-style: none
}

a {
  text-decoration: none
  color: inherit
}`,
    tip: 'Así puedes aplicar tus propios estilos sin interferencias'
  },
  {
    title: 'Fuente base y herencia',
    description: 'Establece fuente base y asegura que se herede correctamente en todos los elementos',
    code: `body {
  font-family: Arial, sans-serif
  font-size: 16px
  line-height: 1.5
  color: #333
}`,
    tip: 'Garantiza legibilidad y coherencia en toda la página'
  }
]