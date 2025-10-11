export const minorUsefulTagsHTML = [

  {
    title: 'Etiqueta <br>',
    description: 'Inserta un salto de línea manual dentro de un párrafo o texto. No necesita etiqueta de cierre.',
    code: `<p> Hola <br> Mundo! </p>`,
    tip: 'Úsala con moderación, no reemplaza una estructura semántica adecuada.'
  },

  {
    title: 'Etiqueta <hr>',
    description: 'Dibuja una línea horizontal para separar contenido. Representa una división temática.',
    code: `<p> Primera sección </p>
<hr>
<p> Segunda sección </p>`,
    tip: 'También útil para dividir visualmente contenido en reportes, artículos, etc.'
  },

  {
    title: 'Etiqueta <small>',
    description: 'Muestra texto en tamaño más pequeño, útil para disclaimers, términos, etc.',
    code: `<p> Precios sujetos a cambios. <small> *Aplican restricciones </small> </p>`,
    tip: 'Úsala para información secundaria, como notas legales o aclaraciones.'
  },

  {
    title: 'Etiqueta <mark>',
    description: 'Resalta texto con un fondo amarillo (por defecto).',
    code: `<p>Hola <mark> Desarrollador </mark> front <mark> end </mark>.</p>`,
    tip: 'Ideal para mostrar resultados de búsqueda o resaltar conceptos clave.'
  },

  {
    title: 'Etiqueta <code>',
    description: 'Representa fragmentos de código en línea.',
    code: `<p>Usa <code> console.log() </code> para depurar. </p>`,
    tip: 'Combina bien con <pre> cuando necesitas mostrar bloques de código.'
  },

  {
    title: 'Etiqueta <kbd>',
    description: 'Representa entradas de teclado.',
    code: `<p> Presiona <kbd> Ctrl </kbd> + <kbd>C</kbd> para copiar.</p>`,
    tip: 'Muy útil para documentaciones o tutoriales.'
  },

  {
    title: 'Etiqueta <sup> y <sub>',
    description: 'Representan superíndices y subíndices respectivamente.',
    code: `<p> Agua: H <sub> 2 </sub> O </p>
<p> Área: m <sup> 2 </sup></p>`,
    tip: 'Fundamentales para contenido científico, matemático o académico.'
  },

  {
    title: 'Etiqueta <b> y <strong>',
    description: 'Ambas muestran texto en negrita, pero <strong> tiene peso semántico (énfasis).',
    code: `<p><b> Texto </b> está en negrita.</p>
<p><strong> ¡Importante! </strong> Tienes que guardar. </p>`,
    tip: 'Prefiere <strong> cuando quieras resaltar algo con importancia.'
  },

  {
    title: 'Etiqueta <i> y <em>',
    description: '<i> aplica cursiva visual, <em> da énfasis semántico además del estilo.',
    code: `<p><i> HTML </i> es un lenguaje de etiquetado. </p>
<p><em> No </em> lo olvides jamás. </p>`,
    tip: 'Para accesibilidad usa <em> si el texto necesita ser leído con énfasis.'
  }

]