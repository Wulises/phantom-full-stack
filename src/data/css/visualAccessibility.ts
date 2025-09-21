export const visualAccessibility = [
  {
    title: 'Contrastes adecuados',
    description: 'Asegura que el texto tenga suficiente contraste con el fondo para ser legible',
    code: `.text {
  color: #222
  background-color: #fff
}`,
    tip: 'Usa herramientas para verificar ratios de contraste como WebAIM'
  },
  {
    title: 'Foco visible',
    description: 'Resalta los elementos enfocados para mejorar la navegación con teclado',
    code: `button:focus, a:focus {
  outline: 3px solid #ffbf47
  outline-offset: 2px
}`,
    tip: 'No elimines el foco por defecto sin reemplazarlo por uno visible'
  },
  {
    title: 'Tamaño legible de texto',
    description: 'Usa tamaños de fuente accesibles y escalables',
    code: `body {
  font-size: 16px
}

h1 {
  font-size: 2rem
}`,
    tip: 'Evita usar tamaños muy pequeños que dificulten la lectura'
  },
  {
    title: 'Espaciado y line-height',
    description: 'Aumenta el espacio entre líneas y párrafos para mejorar la lectura',
    code: `p {
  line-height: 1.5
  margin-bottom: 1rem
}`,
    tip: 'El espacio adecuado evita que el texto se vea amontonado'
  },
  {
    title: 'Uso de colores seguros para daltonismo',
    description: 'Evita combinaciones que sean difíciles de distinguir para personas con daltonismo',
    code: `.alert {
  background-color: #f44336
  color: #fff
}`,
    tip: 'Usa patrones además de colores para transmitir información importante'
  },
  {
    title: 'Evitar destellos y animaciones rápidas',
    description: 'No uses animaciones que puedan causar problemas a personas con epilepsia',
    code: `@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.001ms !important
    transition-duration: 0.001ms !important
    animation-iteration-count: 1 !important
  }
}`,
    tip: 'Respeta las preferencias del usuario para reducir movimiento'
  }
]