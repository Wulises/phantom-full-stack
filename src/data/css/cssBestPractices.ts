export const cssBestPractices = [
  {
    title: 'BEM - Block Element Modifier',
    description: 'Metodología para nombrar clases de forma clara y modular',
    code: `/* Bloque */
.button {
  background-color: blue
}

/* Elemento */
.button__icon {
  margin-right: 8px
}

/* Modificador */
.button--large {
  padding: 16px 24px
}`,
    tip: 'Usa BEM para evitar conflictos y mejorar la legibilidad del código'
  },
  {
    title: 'Estructura de carpetas',
    description: 'Organiza tus archivos CSS o SCSS en carpetas según funcionalidad',
    code: `styles/
  base/
    _reset.scss
    _typography.scss
  components/
    _button.scss
    _card.scss
  layout/
    _grid.scss
    _header.scss`,
    tip: 'Mantener una estructura clara facilita el mantenimiento y escalabilidad'
  },
  {
    title: 'Modularización de estilos',
    description: 'Divide el CSS en archivos pequeños y reutilizables',
    code: `@import 'base/reset'
@import 'base/typography'
@import 'components/button'
@import 'layout/grid'`,
    tip: 'Evita archivos CSS gigantescos y difíciles de mantener'
  },
  {
    title: 'Uso de variables CSS',
    description: 'Define colores, tamaños y otros valores reutilizables con variables',
    code: `:root {
  --primary-color: #3498db
  --padding-base: 16px
}

.button {
  background-color: var(--primary-color)
  padding: var(--padding-base)
}`,
    tip: 'Facilita cambios globales y consistencia en el diseño'
  },
  {
    title: 'Evitar !important',
    description: 'Usa !important solo en casos muy específicos para no complicar la cascada',
    code: `/* Mejor evitar */
.button {
  color: red !important
}`,
    tip: 'Prefiere especificidad y buenas prácticas para controlar estilos'
  },
  {
    title: 'Comentarios claros',
    description: 'Agrega comentarios para explicar partes complejas o importantes',
    code: `/* Contenedor principal */
.container {
  max-width: 1200px
  margin: 0 auto
}`,
    tip: 'Ayuda a otros desarrolladores (o a ti en el futuro) a entender el código'
  },
  {
    title: 'Accesibilidad',
    description: 'Considera contrastes, tamaños de texto y estados visibles para todos los usuarios',
    code: `button:focus {
  outline: 3px solid #ffbf47
}`,
    tip: 'Diseña pensando en todos, mejora la usabilidad y cumple estándares'
  }
]