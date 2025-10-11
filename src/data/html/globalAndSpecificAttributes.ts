export const globalAndSpecificAttributesHTML = [

  {
    title: '¿Qué son los atributos globales?',
    description: 'Son atributos que puedes aplicar a casi cualquier etiqueta HTML. No dependen del tipo de elemento y permiten añadir comportamiento, accesibilidad o estilo.',
    code: `<p id="mensaje" class="texto-principal" style="color: pink;"> Hola Phantom!!! </p>`,
    tip: 'Los atributos globales están disponibles en casi todas las etiquetas HTML.'
  },

  {
    title: 'Atributos globales más comunes',
    description: 'Algunos de los más usados para controlar estilo, interacción o accesibilidad.',
    code: `id              → Identificador único  
class           → Clase para CSS o JS  
style           → Estilos en línea  
title           → Texto al pasar el mouse  
hidden          → Oculta el elemento  
tabindex        → Control de navegación por teclado  
data-*          → Atributos personalizados  
lang            → Idioma del contenido  
contenteditable → Hace editable el contenido`,
    tip: 'Prefiere `class` y CSS externo antes de abusar de `style` en línea.'
  },

  {
    title: 'Uso de atributos data-*',
    description: 'Permiten almacenar información personalizada dentro de etiquetas HTML para luego usarla con JavaScript.',
    code: `<button data-producto-id="555"> Ver producto </button>`,
    tip: 'Ideales para almacenar información dinámica sin contaminar atributos estándar.'
  },

  // 🔧 SPECIFIC ATTRIBUTES
  {
    title: '¿Qué son los atributos específicos?',
    description: 'Son atributos que solo aplican a ciertas etiquetas, como formularios, enlaces, imágenes, etc.',
    code: `<a href="https://Queen.com" target="_blank" rel="noopener"> Makoto web </a>`,
    tip: 'No todas las etiquetas aceptan los mismos atributos. Lee la documentación.'
  },

  {
    title: 'Atributos específicos de <a>',
    description: 'Aplican solo a enlaces.',
    code: `href       → Dirección del enlace  
target     → Cómo abrirlo (_blank, _self...)  
rel        → Relación del destino con el documento  
download   → Indica que se descargue el recurso`,
    tip: 'Siempre usa `rel="noopener"` con `target="_blank"` por seguridad.'
  },

  {
    title: 'Atributos específicos de <img>',
    description: 'Se usan para manejar imágenes.',
    code: `src        → Ruta de la imagen  
alt        → Texto alternativo (accesibilidad)  
width      → Ancho de la imagen  
height     → Alto de la imagen  
loading    → Controla el lazy loading (lazy, eager)`,
    tip: 'El atributo `alt` es obligatorio para accesibilidad web.'
  },

  {
    title: 'Atributos específicos de formularios',
    description: 'Usados en <input>, <form>, <textarea>, etc.',
    code: `type        → Tipo de entrada (text, email, etc.)  
name        → Nombre para backend  
placeholder → Texto guía  
required    → Campo obligatorio  
readonly    → Solo lectura  
disabled    → Deshabilitado`,
    tip: 'Siempre valida los campos en el backend también.'
  }

];
