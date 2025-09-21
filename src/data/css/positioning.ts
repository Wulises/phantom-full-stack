export const positioningCSS = [
    
  {
    title: 'Propiedad position',
    description: 'Define cómo se posiciona un elemento en la página.',
    code: `/* Posiciones posibles */
div {
  position: static; /* Por defecto */
  position: relative; /* Relativo a su posición normal */
  position: absolute; /* Relativo a su contenedor más cercano con posición */
  position: fixed; /* Fijo respecto a la ventana */
  position: sticky; /* Se pega al scroll en cierto punto */
}`,
    tip: 'El valor por defecto es static, que no permite posicionamiento explícito.'
  },
  {
    title: 'Propiedades top, right, bottom, left',
    description: 'Controlan la posición cuando el elemento tiene position distinto a static.',
    code: `div {
  position: absolute;
  top: 10px;
  right: 20px;
}`,
    tip: 'Estas propiedades mueven el elemento relativo a su contenedor posicionado.'
  },
  {
    title: 'Z-index',
    description: 'Controla la superposición de elementos en el eje Z.',
    code: `div {
  position: relative;
  z-index: 10; /* Mayor valor va arriba */
}`,
    tip: 'Un elemento con mayor z-index se muestra encima de los demás.'
  },
  {
    title: 'Float y Clear',
    description: 'Float permite colocar elementos a los lados; clear limpia esos floats.',
    code: `/* Flotar un elemento a la izquierda */
img {
  float: left;
  margin-right: 10px;
}

/* Limpiar float */
div {
  clear: both;
}`,
    tip: 'Float es útil para diseños simples, pero cuidado con su impacto en el flujo.'
  }

]
