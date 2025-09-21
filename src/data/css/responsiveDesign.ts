export const responsiveDesignCSS = [
  {
    title: '¿Qué es el diseño responsive?',
    description: 'El diseño responsive busca que una web se vea bien en todo tipo de dispositivos, adaptando su layout y contenido a diferentes tamaños de pantalla',
    code: `/* Este es un enfoque básico */
body {
  font-size: 16px
  padding: 20px
}`,
    tip: 'Piensa en dispositivos móviles primero: teléfonos, tablets, laptops y monitores'
  },
  {
    title: 'Enfoque Mobile First',
    description: 'El diseño mobile-first consiste en diseñar primero para pantallas pequeñas e ir agregando estilos a medida que aumentas el ancho de pantalla',
    code: `/* Estilos por defecto: móvil */
.container {
  padding: 1rem
}

/* Estilos para pantallas grandes */
@media (min-width: 768px) {
  .container {
    padding: 2rem
  }
}`,
    tip: 'Con Mobile First, tus estilos base funcionan bien en móviles sin sobrescrituras'
  },
  {
    title: 'Media Queries',
    description: 'Las media queries permiten aplicar estilos condicionalmente según el tamaño de la pantalla u otras características del dispositivo',
    code: `@media (max-width: 600px) {
  body {
    background-color: lightblue
  }
}

@media (min-width: 1200px) {
  body {
    max-width: 1200px
    margin: 0 auto
  }
}`,
    tip: 'Las más comunes son: max-width y min-width'
  },
  {
    title: 'Unidades relativas',
    description: 'Usar unidades como %, vw, vh, em y rem mejora la adaptabilidad en lugar de usar píxeles fijos',
    code: `/* Ocupa el 80% del ancho del viewport */
.container {
  width: 80vw
}

/* Altura del 50% de la ventana */
.section {
  height: 50vh
}`,
    tip: 'Evita usar px para todo, prefiere unidades relativas'
  },
  {
    title: 'Imágenes y elementos fluidos',
    description: 'Para que una imagen sea responsive, su ancho debe adaptarse al contenedor',
    code: `img {
  max-width: 100%
  height: auto
}`,
    tip: 'max-width: 100% es la clave para imágenes escalables'
  },
  {
    title: 'Breakpoints comunes',
    description: 'Son anchos de pantalla donde cambias el diseño. No hay reglas fijas, pero estos son los más usados',
    code: `/* Teléfonos */
@media (max-width: 600px) {}

/* Tablets */
@media (min-width: 601px) and (max-width: 900px) {}

/* Laptops */
@media (min-width: 901px) and (max-width: 1200px) {}

/* Escritorios grandes */
@media (min-width: 1201px) {}`,
    tip: 'Usa los breakpoints que tengan sentido para tu contenido'
  },
  {
    title: 'Diseño fluido vs diseño adaptativo',
    description: 'El diseño fluido usa porcentajes y unidades relativas para adaptarse. El adaptativo usa media queries y rompe en puntos específicos',
    code: `/* Fluido */
.container {
  width: 80%
}

/* Adaptativo */
@media (min-width: 768px) {
  .container {
    width: 600px
  }
}`,
    tip: 'Lo ideal es una combinación de ambos'
  }
]