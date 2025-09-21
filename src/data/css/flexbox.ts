export const flexboxCSS = [
    
  {
    title: 'Conceptos básicos de Flexbox',
    description: 'Flexbox es un modelo de layout para distribuir espacio y alinear elementos.',
    code: `/* Contenedor flex */
.container {
  display: flex;
}`,
    tip: 'Aplica display: flex para activar Flexbox en un contenedor.'
  },
  {
    title: 'Flex-direction',
    description: 'Define la dirección principal del flujo de los elementos flex.',
    code: `/* Dirección horizontal (por defecto) */
.container {
  flex-direction: row;
}

/* Dirección vertical */
.container {
  flex-direction: column;
}`,
    tip: 'Usa row para filas y column para columnas.'
  },
  {
    title: 'Justify-content',
    description: 'Alinea elementos a lo largo del eje principal.',
    code: `/* Alinear al inicio */
.container {
  justify-content: flex-start;
}

/* Centrar */
.container {
  justify-content: center;
}

/* Espacio entre elementos */
.container {
  justify-content: space-between;
}`,
    tip: 'Útil para controlar la distribución horizontal o vertical según flex-direction.'
  },
  {
    title: 'Align-items',
    description: 'Alinea elementos a lo largo del eje transversal.',
    code: `/* Alinear al inicio */
.container {
  align-items: flex-start;
}

/* Centrar verticalmente */
.container {
  align-items: center;
}

/* Estirar para llenar contenedor */
.container {
  align-items: stretch;
}`,
    tip: 'Controla la alineación cruzada (vertical en fila, horizontal en columna).'
  },
  {
    title: 'Propiedades para los elementos flex',
    description: 'Controla el tamaño y crecimiento de los hijos flex.',
    code: `/* Crecer para llenar espacio */
.item {
  flex-grow: 1;
}

/* Encoger para evitar overflow */
.item {
  flex-shrink: 1;
}

/* Tamaño base */
.item {
  flex-basis: 200px;
}`,
    tip: 'flex-grow y flex-shrink controlan el crecimiento y encogimiento.'
  }

]