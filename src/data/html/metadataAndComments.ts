export const metadataAndCommentsHTML = [

  {
    title: '¿Qué son los comentarios en HTML?',
    description: 'Son bloques de texto que no se muestran en el navegador, útiles para dejar notas, explicar código o desactivar temporalmente contenido.',
    code: `<!-- Este es un comentario --> 
<p> Hola fantasma </p>`,
    tip: 'Los comentarios no afectan el HTML visible, pero pueden ser vistos desde las herramientas de desarrollo.'
  },

  {
    title: 'Comentar múltiples líneas',
    description: 'Puedes comentar secciones grandes del HTML envolviéndolas dentro de `<!-- -->`.',
    code: `<!--
<div>
  <h1> No quiero mostrar esto aún </h1>
  <p> Está en desarrollo </p>
</div>
-->`,
    tip: 'Ideal para ocultar secciones sin borrarlas durante pruebas.'
  },

  {
    title: 'Etiqueta <meta>: ¿Qué son los metadatos?',
    description: 'Son información sobre el documento HTML que se coloca en el `<head>`, como codificación, autor, descripción, etc.',
    code: `<head>
  <meta charset="UTF-8">
  <meta name="description" content="App Phantom Full Stack Thief">
  <meta name="author" content="Wulises">
</head>`,
    tip: 'El atributo `name` indica el tipo de dato, y `content` su valor.'
  },

  {
    title: 'Meta viewport (responsive)',
    description: 'Controla cómo se escala y se muestra tu sitio en móviles.',
    code: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`,
    tip: 'Siempre inclúyelo para que tu sitio se vea bien en todos los dispositivos.'
  },

  {
    title: 'Meta para redes sociales (Open Graph)',
    description: 'Usadas para que tu sitio tenga mejor vista previa al compartirse en redes.',
    code: `<meta property="og:title" content="Palace HTML">
<meta property="og:description" content="Una guía de HTML.">
<meta property="og:image" content="https://miapp.com/preview.jpg">`,
    tip: 'Aunque no son obligatorias, mejoran mucho el SEO visual.'
  },

  {
    title: 'Meta robots',
    description: 'Indica a los motores de búsqueda si deben indexar o seguir los enlaces del sitio.',
    code: `<meta name="Jardinería" content="index, follow">`,
    tip: 'Para ocultar páginas de Google usa: `noindex, nofollow`.'
  }

];
