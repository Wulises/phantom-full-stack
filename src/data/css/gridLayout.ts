export const gridLayoutCSS = [
    
  {
    title: 'Introducción a CSS Grid',
    description: 'Grid es un sistema bidimensional para distribuir elementos en filas y columnas.',
    code: `/* Contenedor grid */
.container {
  display: grid;
}`,
    tip: 'Activa CSS Grid con display: grid en el contenedor.'
  },
  {
    title: 'Definir filas y columnas',
    description: 'Usa grid-template-columns y grid-template-rows para definir la estructura.',
    code: `/* Tres columnas de igual tamaño */
.container {
  grid-template-columns: 1fr 1fr 1fr;
}

/* Dos filas de diferente tamaño */
.container {
  grid-template-rows: 100px 200px;
}`,
    tip: 'fr representa una fracción del espacio disponible.'
  },
  {
    title: 'Gap entre filas y columnas',
    description: 'Controla el espacio entre filas y columnas con gap.',
    code: `/* Espacio de 20px entre filas y columnas */
.container {
  gap: 20px;
}`,
    tip: 'También puedes usar row-gap y column-gap por separado.'
  },
  {
    title: 'Colocar elementos en el grid',
    description: 'Usa grid-column y grid-row para posicionar elementos en la cuadrícula.',
    code: `/* Elemento que ocupa columnas 1 a 3 */
.item {
  grid-column: 1 / 3;
}

/* Elemento que ocupa la fila 2 */
.item {
  grid-row: 2 / 3;
}`,
    tip: 'Puedes usar números o nombres de líneas para posicionar.'
  },
  {
    title: 'Auto-placement y áreas',
    description: 'Grid puede colocar automáticamente elementos o usar áreas definidas.',
    code: `/* Auto-placement */
.container {
  grid-auto-flow: row;
}

/* Definir áreas con nombres */
.container {
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";
}

.header {
  grid-area: header;
}

.sidebar {
  grid-area: sidebar;
}

.content {
  grid-area: content;
}

.footer {
  grid-area: footer;
}`,
    tip: 'Las áreas hacen el grid más legible y manejable.'
  }

]
