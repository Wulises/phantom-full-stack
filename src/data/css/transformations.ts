export const transformationsCSS = [
  {
    title: '¿Qué es transform en CSS?',
    description: 'La propiedad transform te permite aplicar efectos visuales como rotar, escalar, mover o sesgar un elemento sin alterar su posición real en el DOM',
    code: `.box {
  transform: rotate(45deg)
}`,
    tip: 'Las transformaciones no afectan el flujo del documento, pero sí su representación visual'
  },
  {
    title: 'Transform: translate()',
    description: 'Desplaza el elemento en los ejes X o Y (o ambos) sin cambiar su posición real',
    code: `.box {
  transform: translateX(50px)
}

.box {
  transform: translate(50px, 20px)
}`,
    tip: 'Usa valores negativos para mover hacia la izquierda o arriba'
  },
  {
    title: 'Transform: rotate()',
    description: 'Rota el elemento en el sentido de las agujas del reloj o en contra',
    code: `.box {
  transform: rotate(90deg)
}

.box:hover {
  transform: rotate(-45deg)
}`,
    tip: 'Puedes animar la rotación con transition para efectos suaves'
  },
  {
    title: 'Transform: scale()',
    description: 'Escala el tamaño del elemento en ancho, alto o ambos',
    code: `.box {
  transform: scale(1.5)         /* Escala uniforme */
}

.box {
  transform: scale(2, 0.5)      /* Escala X 2x y Y 0.5x */
}`,
    tip: 'Ideal para efectos de zoom o interacciones hover'
  },
  {
    title: 'Transform: skew()',
    description: 'Sesga (inclina) el elemento a lo largo del eje X y/o Y',
    code: `.box {
  transform: skewX(20deg)
}

.box {
  transform: skew(20deg, 10deg)
}`,
    tip: 'Puede dar un efecto dinámico pero se debe usar con cuidado para mantener la legibilidad'
  },
  {
    title: 'Transform: matrix()',
    description: 'Una forma avanzada de combinar múltiples transformaciones en una sola función',
    code: `.box {
  transform: matrix(1, 0, 0, 1, 50, 100)
}`,
    tip: 'Poco común, se usa más en gráficos complejos o animaciones SVG'
  },
  {
    title: 'Transformaciones combinadas',
    description: 'Puedes aplicar múltiples transformaciones en una sola línea',
    code: `.box {
  transform: translateX(50px) rotate(15deg) scale(1.2)
}`,
    tip: 'El orden importa: primero se aplica translate, luego rotate, luego scale'
  },
  {
    title: 'Transform-origin',
    description: 'Define el punto de origen desde el cual se aplican las transformaciones',
    code: `.box {
  transform: rotate(45deg)
  transform-origin: top left
}`,
    tip: 'Por defecto, el origen es el centro del elemento'
  },
  {
    title: 'Transform-style y 3D',
    description: 'Puedes usar transformaciones en 3D como rotateX, rotateY, y usar perspective para profundidad',
    code: `.scene {
  perspective: 800px
}

.card {
  transform: rotateY(180deg)
  transform-style: preserve-3d
}`,
    tip: 'Ideal para efectos como flips en tarjetas o animaciones 3D'
  }
]