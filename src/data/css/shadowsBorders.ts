export const shadowsBorders = [
  {
    title: 'Sombras de caja (box-shadow)',
    description: 'Agrega sombras alrededor de los elementos para profundidad y relieve',
    code: `.card {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1)
}`,
    tip: 'El primer valor es el desplazamiento horizontal, el segundo el vertical, luego el desenfoque y el color'
  },
  {
    title: 'Sombras de texto (text-shadow)',
    description: 'Aplica sombras al texto para mejorar legibilidad o dar estilo',
    code: `.title {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5)
}`,
    tip: 'Puedes usar varios valores separados por comas para sombras múltiples'
  },
  {
    title: 'Bordes redondeados (border-radius)',
    description: 'Redondea las esquinas de un elemento para un diseño más suave',
    code: `.button {
  border-radius: 8px
}`,
    tip: 'Puedes usar valores en px, %, o usar propiedades individuales para cada esquina'
  },
  {
    title: 'Outlines',
    description: 'Bordes externos usados para accesibilidad o foco sin afectar el tamaño del elemento',
    code: `.input:focus {
  outline: 2px solid #3498db
}`,
    tip: 'Útil para mejorar la accesibilidad visual sin cambiar el layout'
  },
  {
    title: 'Sombras avanzadas',
    description: 'Combina varias sombras para crear efectos más complejos y realistas',
    code: `.box {
  box-shadow:
    0 2px 4px rgba(0, 0, 0, 0.1),
    0 6px 12px rgba(0, 0, 0, 0.2)
}`,
    tip: 'Usa varias sombras para profundidad o efectos de luz'
  },
  {
    title: 'Bordes con imagen o gradiente',
    description: 'Puedes usar imágenes o gradientes en los bordes usando border-image o border-image-source',
    code: `.frame {
  border: 10px solid transparent
  border-image-source: linear-gradient(to right, red, orange)
  border-image-slice: 1
}`,
    tip: 'Es una forma creativa de darle estilo a los bordes más allá de colores sólidos'
  }
]