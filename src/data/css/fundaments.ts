export const fundamentsCSS = [
  {
    title: '¿Qué es CSS?',
    description: 'CSS es un lenguaje utilizado para describir la presentación de un documento HTML o XML.',
    code: `/* Ejemplo básico de CSS */
h1 {
  color: blue;
}
p {
  font-size: 18px;
}`,
    tip: 'CSS se usa para cambiar el estilo visual de una página web.'
  },
  {
    title: 'Sintaxis básica de CSS',
    description: 'CSS se compone de selectores, propiedades y valores.',
    code: `/* Sintaxis básica */
selector {
  propiedad: valor;
}`,
    tip: 'Recuerda que la propiedad debe ser seguida de un valor adecuado.'
  },
  {
    title: 'Incluir CSS en HTML',
    description: 'CSS puede ser incluido en un documento HTML de manera interna, externa o inline.',
    code: `<head>
  <link rel="stylesheet" href="styles.css"> <!-- Enlace a un archivo CSS externo -->
</head>`,
    tip: 'Es una buena práctica usar archivos externos para mantener el código limpio.'
  },
  {
    title: 'Estilos inline, internos y externos',
    description: 'Existen tres formas principales de incluir CSS en HTML: inline, internal y external.',
    code: `<!-- Estilo inline -->
<h1 style="color: red;">Título en rojo</h1>

<!-- Estilo interno -->
<head>
  <style>
    h1 { color: blue; }
  </style>
</head>

<!-- Estilo externo -->
<link rel="stylesheet" href="styles.css">`,
    tip: 'Para proyectos grandes, es recomendable usar CSS externo.'
  }
];
