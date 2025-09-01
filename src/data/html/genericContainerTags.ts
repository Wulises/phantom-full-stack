export const genericContainerTagsHTML = [

  {
    title: '<div>: Contenedor genérico de bloque',
    description: 'Se usa como contenedor de nivel bloque sin un significado semántico específico. Es útil para agrupar contenido y aplicar estilos con CSS.',
    code: `<div class="tarjeta">
  <h2> Título </h2>
  <p> Contenido aquí... </p>
</div>`,
    tip: 'Úsalo cuando no haya una etiqueta semántica más adecuada. No abuses: si puedes usar <section>, <article>, etc., mejor.'
  },

  {
    title: '<span>: Contenedor genérico en línea',
    description: 'Se usa para agrupar contenido en línea sin alterar el flujo del texto. Ideal para aplicar estilos o clases a una parte específica del texto.',
    code: `<p> Hola <span class="resaltado"> Desarrollador </span>, bienvenido a HTML. </p>`,
    tip: 'No afecta el layout, solo sirve como “envoltorio” para aplicar estilos o JS.'
  },

  {
    title: '¿Cuándo usar <div> o <span>?',
    description: 'Ambos se usan cuando necesitas aplicar estilos, manipular elementos con JavaScript o agrupar contenido, pero sin ningún significado semántico.',
    code: `<!-- Enlace con icono personalizado -->
<a href="/inicio">
  <span class="icono"> 🏠 </span> Inicio
</a>`,
    tip: 'Recuerda: <div> es para bloques completos, <span> para contenido en línea.'
  },

  {
    title: 'Ejemplo práctico con <div> y <span>',
    description: 'Combinando ambos para construir una interfaz básica con estilos.',
    code: `<div class="tarjeta-producto">
  <h2><span class="nombre-producto"> Persona 5 Royal </span></h2>
  <p><span class="precio"> $59.99 </span> - Juego de rol por turnos. </p>
</div>`,
    tip: 'Puedes usar tantos <div> y <span> como necesites, pero siempre con sentido estructural.'
  },

  {
    title: 'Evita el “divitis” y “spanitis”',
    description: 'El abuso de <div> y <span> sin razón semántica hace el código difícil de mantener.',
    code: `<!-- ❌ Malo -->
<div><div><span><span> Texto </span></span></div></div>

<!-- Bueno -->
<article>
  <h2> Título </h2>
  <p> Contenido </p>
</article>`,
    tip: 'Siempre intenta usar elementos semánticos cuando sea posible.'
  }

]
