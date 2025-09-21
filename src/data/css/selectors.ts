export const selectorsCSS = [

  {
    title: 'Selectores básicos',
    description: 'Permiten seleccionar elementos HTML por su tipo, clase o ID.',
    code: `/* Selector de tipo */
p {
  color: blue;
}

/* Selector de clase */
.titulo {
  font-size: 24px;
}

/* Selector de ID */
#principal {
  padding: 20px;
}`,
    tip: 'Usa clases para estilos reutilizables. No abuses del ID.',
  },
  {
    title: 'Selectores combinados',
    description: 'Permiten seleccionar elementos según relaciones entre ellos.',
    code: `/* Descendiente */
div p {
  color: red;
}

/* Hijo directo */
div > p {
  color: green;
}

/* Hermano adyacente */
h1 + p {
  font-style: italic;
}

/* Hermano general */
h1 ~ p {
  font-weight: bold;
}`,
    tip: 'Los combinadores te ayudan a ser más preciso al aplicar estilos.'
  },
  {
    title: 'Selectores de atributos',
    description: 'Seleccionan elementos con base en sus atributos.',
    code: `/* Elemento con atributo */
input[type="text"] {
  border: 1px solid #ccc;
}

/* Que empieza con */
a[href^="https"] {
  color: green;
}

/* Que termina con */
img[src$=".png"] {
  border-radius: 10px;
}`,
    tip: 'Muy útiles para formularios y validaciones.'
  },
  {
    title: 'Selectores avanzados',
    description: 'Selectores como :hover, :nth-child y más.',
    code: `/* Pseudo-clase */
button:hover {
  background-color: purple;
}

/* Pseudo-elemento */
p::first-line {
  font-weight: bold;
}

/* :nth-child */
li:nth-child(odd) {
  background: #eee;
}`,
    tip: 'Domina estos y serás el sensei del CSS.'
  }

]
