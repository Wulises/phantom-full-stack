export const cssVariables = [
  {
    title: '¿Qué son las variables CSS?',
    description: 'Son custom properties que te permiten almacenar valores reutilizables para estilos, mejorando mantenimiento y consistencia',
    code: `:root {
  --main-color: #3498db
  --padding: 16px
  --font-stack: 'Helvetica Neue', sans-serif
}

.box {
  color: var(--main-color)
  padding: var(--padding)
  font-family: var(--font-stack)
}`,
    tip: 'Las variables se definen con --nombre y se usan con var(--nombre)'
  },
  {
    title: 'Ámbito de las variables',
    description: 'Las variables pueden tener alcance global (en :root) o local en cualquier selector',
    code: `:root {
  --global-color: crimson
}

.section {
  --local-color: teal
  color: var(--local-color)   /* Usa el local si existe */
}

.box {
  color: var(--global-color) /* Usa la global */
}`,
    tip: 'Si una variable no existe localmente, busca en el padre o :root'
  },
  {
    title: 'Variables con fallback',
    description: 'Puedes definir un valor alternativo si la variable no está definida',
    code: `.box {
  color: var(--color-no-existe, black)
}`,
    tip: 'Útil para evitar errores y asegurar estilos por defecto'
  },
  {
    title: 'Variables y herencia',
    description: 'Las variables pueden heredar valores si están definidas en un elemento padre',
    code: `.parent {
  --main-bg: lightgray
}

.child {
  background-color: var(--main-bg)
}`,
    tip: 'Muy útil para temas o configuraciones globales que cambian según el contexto'
  },
  {
    title: 'Cambiar variables con JavaScript',
    description: 'Puedes modificar variables en tiempo real usando JS para efectos dinámicos',
    code: `const root = document.documentElement
root.style.setProperty('--main-color', 'coral')`,
    tip: 'Perfecto para temas oscuros, modos personalizados o animaciones'
  },
  {
    title: 'Variables en calc()',
    description: 'Puedes usar variables dentro de funciones CSS como calc() para cálculos dinámicos',
    code: `:root {
  --base-size: 16px
}

.box {
  width: calc(var(--base-size) * 2)
  height: calc(var(--base-size) * 3)
}`,
    tip: 'Potencia mucho la flexibilidad en layouts y tamaños'
  },
  {
    title: 'Variables para temas',
    description: 'Define conjuntos de variables para distintos temas y cambia el tema cambiando la clase del body o root',
    code: `:root {
  --bg-color: white
  --text-color: black
}

.dark-theme {
  --bg-color: black
  --text-color: white
}

body {
  background-color: var(--bg-color)
  color: var(--text-color)
}`,
    tip: 'Así haces temas claros y oscuros fácilmente sin repetir estilos'
  },
  {
    title: 'Variables y media queries',
    description: 'Puedes cambiar variables según el tamaño de pantalla con media queries',
    code: `:root {
  --font-size: 16px
}

@media (min-width: 768px) {
  :root {
    --font-size: 20px
  }
}

p {
  font-size: var(--font-size)
}`,
    tip: 'Útil para responsive design y ajustes dinámicos'
  }
]