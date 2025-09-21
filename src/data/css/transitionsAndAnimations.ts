export const transitionsAndAnimationsCSS = [
  {
    title: 'Transiciones en CSS',
    description: 'Las transiciones permiten cambiar suavemente los valores de las propiedades CSS cuando ocurren cambios de estado',
    code: `.box {
  transition-property: background-color, transform
  transition-duration: 0.3s
  transition-timing-function: ease-in-out
}

.box:hover {
  background-color: teal
  transform: scale(1.1)
}`,
    tip: 'Usa transiciones para mejorar la experiencia de usuario con cambios suaves'
  },
  {
    title: 'Propiedades de transición',
    description: 'Las propiedades principales para controlar la transición son: property, duration, timing-function y delay',
    code: `/* Equivalente shorthand */
.element {
  transition: all 0.5s ease 0.2s
}`,
    tip: 'Usar shorthand simplifica el código y es muy común'
  },
  {
    title: 'Funciones timing-function',
    description: 'Controla la velocidad del cambio durante la transición',
    code: `ease       /* Comienzo lento, rápido al medio, lento al final */
linear     /* Velocidad constante */
ease-in    /* Comienza lento */
ease-out   /* Termina lento */
cubic-bezier(0.4, 0, 0.2, 1) /* Personalizada */`,
    tip: 'Prueba distintas funciones para efectos únicos'
  },
  {
    title: 'Animaciones con @keyframes',
    description: 'Define cambios de estilos en múltiples pasos y repítelos automáticamente',
    code: `@keyframes bounce {
  0%, 100% {
    transform: translateY(0)
  }
  50% {
    transform: translateY(-30px)
  }
}

.ball {
  animation-name: bounce
  animation-duration: 2s
  animation-iteration-count: infinite
  animation-timing-function: ease-in-out
}`,
    tip: 'Perfectas para crear efectos más complejos y dinámicos que transiciones'
  },
  {
    title: 'Propiedades de animación',
    description: 'Las propiedades más usadas son: name, duration, timing-function, delay, iteration-count, direction y fill-mode',
    code: `.loader {
  animation-name: spin
  animation-duration: 1s
  animation-iteration-count: infinite
  animation-direction: alternate
  animation-fill-mode: forwards
}`,
    tip: 'Combina estas propiedades para controlar el comportamiento de la animación'
  },
  {
    title: 'Animaciones abreviadas',
    description: 'Puedes usar la propiedad shorthand animation para definir todo en una línea',
    code: `.loader {
  animation: spin 1s infinite alternate forwards ease-in-out
}`,
    tip: 'Muy útil para simplificar código y mejorar legibilidad'
  },
  {
    title: 'Detener animaciones con animation-play-state',
    description: 'Controla si una animación está corriendo o pausada',
    code: `.pause {
  animation-play-state: paused
}

.play {
  animation-play-state: running
}`,
    tip: 'Útil para controles de reproducción manual'
  },
  {
    title: 'Animaciones en eventos con JavaScript',
    description: 'Puedes controlar animaciones agregando o removiendo clases que disparen las animaciones CSS',
    code: `button.addEventListener('click', () => {
  element.classList.add('animate')
  setTimeout(() => {
    element.classList.remove('animate')
  }, 1000)
})`,
    tip: 'Muy común para animaciones interactivas y temporizadas'
  }
]