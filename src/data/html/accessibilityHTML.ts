export const accessibilityHTML = [

  {
    title: 'Uso del atributo alt en imágenes',
    description: 'El atributo alt describe el contenido de la imagen para lectores de pantalla.',
    code: `<img src="makoto.jpg" alt="Foto de Makoto">`,
    tip: 'Nunca dejes imágenes decorativas sin alt (o usa alt="").'
  },

  {
    title: 'Uso correcto de etiquetas semánticas',
    description: 'Etiquetas como <nav>, <main>, <section>, <header> ayudan a dispositivos de asistencia a entender la estructura.',
    code: `<main>
  <section>
    <h2> Biografía </h2>
    <p> Makoto nació en... </p>
  </section>
</main>`,
    tip: 'Evita abusar de <div> cuando hay alternativas semánticas.'
  },

  {
    title: 'Uso de etiquetas de formulario con <label>',
    description: 'Asocia <label> con <input> para mejorar la navegación con teclado o lectores.',
    code: `<label for="email"> Correo: </label>
<input id="email" type="email">`,
    tip: 'Puedes también envolver el input dentro del label.'
  },

  {
    title: 'Uso de roles ARIA',
    description: 'ARIA (Accessible Rich Internet Applications) define roles para elementos que no son semánticos.',
    code: `<div role="navigation" aria-label="Menú principal">
  <ul>
    <li><a href="/"> Inicio </a></li>
  </ul>
</div>`,
    tip: 'Usa roles cuando no puedas usar etiquetas semánticas (último recurso).'
  },

  {
    title: 'Atributo aria-hidden',
    description: 'Indica que un elemento debe ser ignorado por tecnologías de asistencia.',
    code: `<div aria-hidden="true">
  <img src="decorativo.jpg" alt="">
</div>`,
    tip: 'Ideal para contenido puramente visual sin función textual.'
  }

]