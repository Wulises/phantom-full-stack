export const filtersEffects = [
  {
    title: 'Filtros básicos en CSS',
    description: 'Los filtros permiten aplicar efectos visuales como desenfoque, brillo y contraste a elementos',
    code: `.image {
  filter: blur(5px) brightness(0.8) contrast(120%)
}`,
    tip: 'Combina varios filtros para efectos únicos y llamativos'
  },
  {
    title: 'Propiedad filter',
    description: 'Algunos filtros comunes son blur, brightness, contrast, grayscale, hue-rotate, invert, saturate y sepia',
    code: `.box {
  filter: grayscale(100%) sepia(50%)
}`,
    tip: 'Experimenta con diferentes combinaciones para mejorar el diseño'
  },
  {
    title: 'Backdrop-filter',
    description: 'Aplica filtros al fondo detrás de un elemento, útil para efectos de vidrio esmerilado',
    code: `.overlay {
  backdrop-filter: blur(10px)
  background-color: rgba(255, 255, 255, 0.3)
}`,
    tip: 'Funciona mejor con fondos translúcidos y requiere soporte del navegador'
  },
  {
    title: 'Transiciones con filtros',
    description: 'Puedes animar filtros con transiciones para crear efectos suaves',
    code: `.button {
  transition: filter 0.3s ease
}

.button:hover {
  filter: brightness(1.2) saturate(150%)
}`,
    tip: 'Ideal para hover effects y feedback visual'
  },
  {
    title: 'Filtros y rendimiento',
    description: 'Usa filtros con moderación porque pueden impactar el rendimiento, especialmente en dispositivos móviles',
    code: `/* Evita aplicar filtros pesados a muchos elementos simultáneamente */`,
    tip: 'Optimiza con uso inteligente para no afectar la experiencia de usuario'
  },
  {
    title: 'Ejemplo completo',
    description: 'Combinando filtros para un efecto glassmorphism',
    code: `.card {
  background-color: rgba(255, 255, 255, 0.25)
  backdrop-filter: blur(10px) saturate(180%)
  border-radius: 15px
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37)
}`,
    tip: 'Muy usado en diseños modernos para lograr profundidad y estilo'
  }
]