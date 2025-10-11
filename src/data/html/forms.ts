export const formsHTML = [

  {
    title: 'Formulario básico',
    description: 'Un formulario se define con la etiqueta <form> y puede contener distintos tipos de campos.',
    code: `<form action="/submit" method="post">
  <label for="nombre"> Nombre: </label>
  <input type="text" id="nombre" name="nombre">
  <button type="submit"> Enviar </button>
</form>`,
    tip: 'El atributo "action" indica a dónde se enviarán los datos; "method" puede ser "get" o "post".'
  },

  {
    title: 'Tipos de inputs',
    description: 'HTML incluye múltiples tipos de campos para recolectar datos.',
    code: `<input type="text">      <!-- Texto -->
<input type="email">     <!-- Correo -->
<input type="password">  <!-- Contraseña -->
<input type="number">    <!-- Números -->
<input type="date">      <!-- Fecha -->
<input type="file">      <!-- Archivos -->
<input type="checkbox">  <!-- Casilla -->
<input type="radio">     <!-- Opción única -->`,
    tip: 'Selecciona el tipo correcto según el dato que necesitas, mejora la validación automática.'
  },

  {
    title: 'Etiquetas asociadas con campos',
    description: 'La etiqueta <label> mejora la accesibilidad y experiencia del usuario.',
    code: `<label for="correo"> Correo: </label>
<input type="email" id="correo" name="correo">`,
    tip: 'El atributo "for" debe coincidir con el id del input correspondiente.'
  },

  {
    title: 'Select y opciones desplegables',
    description: 'Usa <select> y <option> para crear listas desplegables.',
    code: `<label for="pais"> País: </label>
<select id="pais" name="pais">
  <option value="mx"> México </option>
  <option value="jp"> Japón </option>
  <option value="uk"> Inglaterra </option>
</select>`,
    tip: 'El atributo "value" de cada <option> es lo que se enviará al servidor.'
  },

  {
    title: 'Área de texto (textarea)',
    description: 'Para entradas de texto largas, se usa la etiqueta <textarea>.',
    code: `<label for="mensaje"> Mensaje: </label>
<textarea id="mensaje" name="mensaje" rows="4" cols="50">
    Escribe aquí tu mensaje...
</textarea>`,
    tip: 'Puedes controlar el tamaño visual con los atributos "rows" y "cols".'
  },

  {
    title: 'Botones en formularios',
    description: 'Puedes usar distintos botones: enviar, reiniciar, o personalizados.',
    code: `<button type="submit"> Enviar </button>
<button type="reset"> Reiniciar </button>
<button type="button"> Solo botón </button>`,
    tip: 'No olvides el atributo "type", especialmente si usas botones dentro de formularios.'
  },

  {
    title: 'Validación HTML',
    description: 'Los formularios permiten validación básica usando atributos como required, minlength, maxlength, pattern, etc.',
    code: `<input type="text" required minlength="3" maxlength="10">
<input type="email" required>
<input type="text" pattern="[A-Za-z]{3,}">`,
    tip: 'La validación nativa evita el envío si los datos no cumplen las condiciones.'
  }

];
