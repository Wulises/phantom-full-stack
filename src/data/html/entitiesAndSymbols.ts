export const entitiesAndSymbolsHTML = [

  {
    title: '¿Qué son las entidades HTML?',
    description: 'Son secuencias de caracteres que representan símbolos, caracteres especiales o espacios reservados que no se pueden escribir directamente en HTML.',
    code: `&lt;div&gt;Hola Desarrollador&lt;/div&gt;`,
    tip: 'Las entidades siempre comienzan con "&" y terminan con ";".'
  },

  {
    title: 'Símbolos comunes en HTML',
    description: 'Aquí tienes algunas de las entidades más usadas para símbolos especiales.',
    code: `&copy; → ©  
&amp; → &  
&nbsp; → (espacio no separable)  
&dollar; → $  
&raquo; → »  
&laquo; → «`,
    tip: 'Usa estas entidades para evitar errores de interpretación del HTML.'
  },

  {
    title: 'Caracteres reservados en HTML',
    description: 'Algunos caracteres tienen significado en HTML y deben escaparse si quieres mostrarlos literalmente.',
    code: `<!-- En vez de esto -->
<p> 5 < 10 </p>

<!-- Usa esto -->
<p> 5 &lt; 10 </p>`,
    tip: 'Siempre escapa los caracteres <, >, &, ", y \'.'
  },

  {
    title: 'Espacios especiales: &nbsp;',
    description: 'El carácter "non-breaking space" evita que dos palabras se separen en distintas líneas.',
    code: `<p> Nombre&nbsp;Kawakami </p>`,
    tip: 'Es útil para nombres compuestos o evitar saltos de línea no deseados.'
  },

  {
    title: 'Cómo insertar símbolos de moneda y matemáticos',
    description: 'Puedes representar múltiples símbolos matemáticos o monetarios.',
    code: `&euro; → €  
&pound; → £  
&yen; → ¥  
&plusmn; → ±  
&times; → ×  
&divide; → ÷`,
    tip: 'Ideal para aplicaciones de comercio o educación.'
  },

  {
    title: 'Emojis y símbolos extendidos con entidades Unicode',
    description: 'Puedes usar códigos Unicode con la forma &#xxxx; (decimal) o &#xXXXX; (hexadecimal).',
    code: `&#128151; → 💗  
&#x1F47C; → 👼  
&#x1F499; → 💙`,
    tip: 'Los emojis se pueden insertar con Unicode si quieres compatibilidad total sin depender de fuentes externas.'
  }

];
