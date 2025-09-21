export const boxModelDisplayCSS = [
  
  {
    title: 'Box Model',
    description: 'El modelo de caja en CSS describe el diseño y espacio de cada elemento.',
    code: `/* Box Model: contenido, padding, borde, margen */
div {
  width: 200px;       /* ancho del contenido */
  padding: 10px;      /* espacio dentro del borde */
  border: 2px solid black; /* borde */
  margin: 20px;       /* espacio fuera del borde */
}`,
    tip: 'Cada caja está compuesta por contenido, padding, borde y margen.'
  },
  {
    title: 'Propiedad display',
    description: 'Controla cómo se muestra un elemento en la página.',
    code: `/* Elemento en línea */
span {
  display: inline;
}

/* Elemento en bloque */
div {
  display: block;
}

/* Elemento en línea bloque */
img {
  display: inline-block;
}

/* Elemento oculto */
p {
  display: none;
}`,
    tip: 'Display define el comportamiento del elemento en el flujo del documento.'
  },
  {
    title: 'Display: block vs inline',
    description: 'Diferencias entre elementos block y inline.',
    code: `/* Block ocupa todo el ancho disponible */
div {
  display: block;
}

/* Inline ocupa solo el ancho del contenido */
a {
  display: inline;
}`,
    tip: 'Los elementos block empiezan en una nueva línea, los inline no.'
  },
  {
    title: 'Box-sizing',
    description: 'Controla cómo se calcula el ancho y alto del elemento.',
    code: `/* Por defecto: content-box */
div {
  box-sizing: content-box;
}

/* Incluye padding y borde en ancho y alto */
div {
  box-sizing: border-box;
}`,
    tip: 'Usar border-box simplifica el manejo de tamaños y diseño.'
  },
  {
    title: 'Ocultar contenido con overflow',
    description: 'Controla qué pasa cuando el contenido excede el tamaño del contenedor.',
    code: `/* Muestra scroll si el contenido excede */
div {
  width: 150px;
  height: 100px;
  overflow: auto;
}

/* Oculta contenido que se salga */
div {
  overflow: hidden;
}`,
    tip: 'overflow puede ser visible, hidden, scroll o auto.'
  }

]
