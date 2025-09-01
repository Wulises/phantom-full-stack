export const elementsSemanticsHTML = [

  {
    title: '¿Qué son los elementos semánticos?',
    description: 'Son etiquetas que describen claramente su significado tanto para el navegador como para el desarrollador.',
    code: `<!-- NO semántico -->
<div id="header"></div>

<!-- Semántico -->
<header></header>`,
    tip: 'Usar elementos semánticos mejora la accesibilidad, SEO y legibilidad del código.'
  },

  {
    title: '<header>',
    description: 'Define una cabecera para un documento o sección. Normalmente contiene títulos, logotipos o menús de navegación.',
    code: `<header>
  <h1> Mi Sitio Web </h1>
  <nav>...</nav>
</header>`,
    tip: 'Puede usarse varias veces en una página (por ejemplo, en cada sección).'
  },

  {
    title: '<nav>',
    description: 'Define una sección destinada a enlaces de navegación.',
    code: `<nav>
  <ul>
    <li><a href="/"> Inicio </a></li>
    <li><a href="/blog"> Blog </a></li>
  </ul>
</nav>`,
    tip: 'Ideal para menús principales, barras laterales o navegación interna.'
  },

  {
    title: '<main>',
    description: 'Representa el contenido principal del documento. Solo debe haber uno por página.',
    code: `<main>
  <article>
    <h2> Artículo principal </h2>
    <p> Contenido aquí... </p>
  </article>
</main>`,
    tip: 'Debe contener lo que es único de esa página (excluyendo menús, pie de página, etc).'
  },

  {
    title: '<section>',
    description: 'Agrupa contenido temáticamente relacionado. Puede tener su propio encabezado.',
    code: `<section>
  <h2> Sobre Nosotros HXM </h2>
  <p> Somos un equipo de desarrolladores... </p>
</section>`,
    tip: 'Ideal para dividir páginas en bloques lógicos.'
  },

  {
    title: '<article>',
    description: 'Se usa para contenido independiente que puede reutilizarse, como publicaciones de blog, noticias, etc.',
    code: `<article>
  <h2> Título del Post </h2>
  <p> Contenido del artículo... </p>
</article>`,
    tip: 'Debe tener sentido por sí mismo fuera del contexto de la página.'
  },

  {
    title: '<aside>',
    description: 'Contiene contenido tangencial, como barras laterales, anuncios o enlaces relacionados.',
    code: `<aside>
  <h3> Enlaces útiles </h3>
  <ul>
    <li><a href="#"> Guía HTML </a></li>
  </ul>
</aside>`,
    tip: 'No es contenido principal, pero puede complementar el contenido.'
  },

  {
    title: '<footer>',
    description: 'Define el pie de una página o sección. Generalmente contiene info de contacto, derechos, enlaces secundarios.',
    code: `<footer>
  <p>&copy; 2025 Mi Sitio. Todos los derechos reservados. </p>
</footer>`,
    tip: 'Al igual que <header>, puede haber varios <footer> en una página.'
  },

  {
    title: 'Otros elementos semánticos útiles',
    description: 'HTML también incluye etiquetas como <figure>, <figcaption>, <mark>, <time> y <summary> con significados claros.',
    code: `<figure>
  <img src="foto.jpg" alt="Foto hARU">
  <figcaption> Foto guardada en 2025 </figcaption>
</figure>

<mark>Este texto está resaltado</mark>
<time datetime="2025-08-26"> 31 de Agosto de 2025 </time>`,
    tip: 'Estos elementos enriquecen el contenido y facilitan el entendimiento del contexto por parte de lectores y motores de búsqueda.'
  }

];
