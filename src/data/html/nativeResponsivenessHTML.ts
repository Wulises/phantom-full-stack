export const nativeResponsivenessHTML = [

  {
    title: 'Meta viewport',
    description: 'Permite que el sitio se adapte correctamente al ancho de distintos dispositivos (teléfonos, tabletas, etc).',
    code: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`,
    tip: 'Siempre inclúyelo en el <head> para diseño responsive. Es el paso #1.'
  },

  {
    title: 'Atributo width con % o unidades relativas',
    description: 'Usar porcentajes permite que el contenido se ajuste al ancho del contenedor o pantalla.',
    code: `<img src="haru.jpg" alt="Haru" style="width: 100%;">`,
    tip: 'Evita usar unidades fijas como px. Prefiere %, vw, em, rem.'
  },

  {
    title: 'Uso del elemento <picture>',
    description: 'Permite cargar imágenes diferentes dependiendo del tamaño del dispositivo.',
    code: `<picture>
  <source media="(max-width: 600px)" srcset="haru-movil.jpg">
  <source media="(min-width: 601px)" srcset="haru-desktop.jpg">
  <img src="haru-default.jpg" alt="Haru">
</picture>`,
    tip: 'Muy útil para rendimiento y optimización en mobile-first design.'
  },

  {
    title: 'Atributo srcset para <img>',
    description: 'Permite definir múltiples resoluciones para una misma imagen, según el dispositivo.',
    code: `<img 
  src="haru.jpg" 
  srcset="haru-1x.jpg 1x, haru-2x.jpg 2x" 
  alt="Haru en HD">`,
    tip: 'Usa srcset si no necesitas condicionar por media queries.'
  },

  {
    title: 'Uso de contenedores fluidos',
    description: 'Puedes hacer que el layout se adapte usando etiquetas HTML envolventes.',
    code: `<div style="max-width: 1200px; margin: 0 auto;">
  <p> Contenido centrado y fluido </p>
</div>`,
    tip: 'Con CSS puedes dar mayor control, pero la idea base parte del HTML.'
  }

]