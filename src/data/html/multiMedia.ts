export const multimediaHTML = [

  {
    title: 'Etiqueta <img>',
    description: 'Se usa para mostrar imágenes en la página. Requiere al menos el atributo "src" y "alt".',
    code: `<img src="/images/haru.png" alt="Imagen de Haru">`,
    tip: 'Siempre incluye el atributo "alt" para accesibilidad y SEO.'
  },

  {
    title: 'Atributos comunes de <img>',
    description: 'Puedes usar "width" y "height" para controlar el tamaño, y "title" para mostrar un texto al pasar el cursor.',
    code: `<img src="/imagenes/morgana.png" alt="Un gato" width="200" height="150" title="¡Hola, soy un gato!">`,
    tip: 'Evita usar solo width o solo height; especifica ambos o usa CSS/tailwindcss.'
  },

  {
    title: 'Insertar video con <video>',
    description: 'Muestra videos directamente en la página. Usa "controls" para mostrar los botones de reproducción.',
    code: `<video src="/videos/cinematic.mp4" controls width="320" height="240">
  Tu navegador no soporta el elemento <video>.
</video>`,
    tip: 'Agrega un texto alternativo por si el navegador no soporta el video.'
  },

  {
    title: 'Insertar audio con <audio>',
    description: 'Permite reproducir archivos de sonido. Usa "controls" para que el usuario controle la reproducción.',
    code: `<audio src="/audios/soundtrack.mp3" controls>
  Tu navegador no soporta el elemento <audio>.
</audio>`,
    tip: 'Ideal para podcasts, música o efectos de sonido en tu sitio.'
  },

  {
    title: 'Usar múltiples fuentes en <video> y <audio>',
    description: 'Puedes incluir varias fuentes para compatibilidad con diferentes navegadores.',
    code: `<video controls width="320" height="240">
  <source src="/videos/cinematic.mp4" type="video/mp4">
  <source src="/videos/cinematic.webm" type="video/webm">
  Tu navegador no soporta el video.
</video>`,
    tip: 'Agrega varios formatos para asegurar compatibilidad en todos los navegadores.'
  }

]
