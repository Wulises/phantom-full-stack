export const fundamentsHTML = [

  {
    title: 'Estructura básica de un documento HTML',
    description: 'Todo documento HTML comienza con una estructura estándar que incluye la declaración de tipo, el elemento raíz <html>, el <head> y el <body>.',
    code: `<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi primer sitio</title>
  </head>
  <body>
    <h1> Hola Mundo!!! </h1>
  </body>
</html>`,
    tip: 'Siempre incluye la declaración <!DOCTYPE html> para asegurar que los navegadores interpreten correctamente tu documento.'
  },
  {
    title: 'Etiqueta <head>',
    description: 'Contiene metadatos e información sobre el documento, como el título, codificación de caracteres, y enlaces a estilos o scripts.',
    code: `<head>
  <meta charset="UTF-8">
  <meta name="description" content="Descripción de mi sitio">
  <title> Hola desarrollador </title>
</head>`,
    tip: 'Aunque no se ve en pantalla, el <head> es crucial para SEO y accesibilidad.'
  },
  {
    title: 'Etiqueta <body>',
    description: 'Contiene todo el contenido visible del sitio: textos, imágenes, enlaces, formularios, etc.',
    code: `<body>
  <h1> Inicio del cuerpo </h1>
  <p> Bienvenida a mi mundo HTML </p>
</body>`,
    tip: 'Todo lo que quieras mostrar al usuario debe estar dentro de <body>.'
  }
]