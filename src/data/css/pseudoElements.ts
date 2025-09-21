export const pseudoElementsCSS = [
  {
    title: '¿Qué son las pseudo-clases?',
    description: 'Las pseudo-clases permiten aplicar estilos a estados específicos de un elemento, como cuando está en hover o cuando es el primer hijo',
    code: `a:hover {
  color: red
}

li:first-child {
  font-weight: bold
}

input:focus {
  outline: 2px solid blue
}`,
    tip: 'Las pseudo-clases se escriben con un solo dos puntos: `:`'
  },
  {
    title: 'Pseudo-clases más comunes',
    description: 'Estas son algunas de las pseudo-clases más usadas en el día a día',
    code: `:hover         /* Al pasar el mouse */
:focus         /* Cuando un input recibe foco */
:active        /* Mientras haces clic */
:first-child   /* Primer hijo de su padre */
:last-child    /* Último hijo */
:nth-child(2)  /* Segundo hijo */`,
    tip: 'Perfectas para hacer que tu interfaz sea más interactiva sin JavaScript'
  },
  {
    title: '¿Qué son los pseudoelementos?',
    description: 'Los pseudoelementos te permiten seleccionar y estilizar partes de un elemento, como la primera letra o insertar contenido antes o después',
    code: `p::first-line {
  font-weight: bold
}

p::first-letter {
  font-size: 2rem
}

div::before {
  content: '★ '
  color: gold
}

div::after {
  content: ' ✔'
  color: green
}`,
    tip: 'Los pseudoelementos usan doble dos puntos `::` (aunque `:before` también funciona por compatibilidad)'
  },
  {
    title: 'Combinar pseudo-clases y pseudoelementos',
    description: 'Puedes combinarlos para lograr efectos avanzados e interactivos',
    code: `a:hover::after {
  content: ' 🔗'
  color: gray
}

input:focus::placeholder {
  color: transparent
}`,
    tip: 'Combinar selectores te da control fino sobre los estados del DOM'
  },
  {
    title: 'Pseudoelementos personalizados con content',
    description: 'Usa `content` para insertar texto, iconos o incluso emojis sin modificar el HTML',
    code: `.badge::before {
  content: '🔥 '
  margin-right: 4px
}

.card::after {
  content: ' →'
  font-size: 1.2rem
}`,
    tip: 'Recuerda que `content` solo funciona con `::before` y `::after`'
  }
]