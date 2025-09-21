export const tablesHTML = [

  {
    title: 'Estructura básica de una tabla',
    description: 'Las tablas en HTML se construyen con <table>, <tr> (filas), <td> (celdas), y <th> (encabezados).',
    code: `<table>
  <tr>
    <th> Nombre </th>
    <th> Edad </th>
  </tr>
  <tr>
    <td> Haru </td>
    <td> 27 </td>
  </tr>
  <tr>
    <td> Sumire </td>
    <td> 25 </td>
  </tr>
</table>`,
    tip: 'Usa <th> para los encabezados y <td> para las celdas normales.'
  },

  {
    title: 'Atributos comunes en tablas',
    description: 'Puedes agregar bordes, espaciado y alineación con atributos o mejor aún, con CSS.',
    code: `<table border="1" cellpadding="10" cellspacing="0">
  <!-- contenido -->
</table>`,
    tip: 'Aunque estos atributos existen, se recomienda usar CSS para dar estilo.'
  },

  {
    title: 'Encabezados y títulos de tabla',
    description: 'Puedes usar <caption> para darle un título visible a la tabla.',
    code: `<table>
  <caption> Lista de estudiantes </caption>
  <tr>
    <th> Nombre </th>
    <th> Curso </th>
  </tr>
  <tr>
    <td> Kasumi </td>
    <td> Front-End </td>
  </tr>
</table>`,
    tip: 'El caption aparece arriba por defecto, pero puedes moverlo con CSS.'
  },

  {
    title: 'Celdas que abarcan varias columnas o filas',
    description: 'Los atributos colspan y rowspan permiten que una celda abarque varias columnas o filas.',
    code: `<table border="1">
  <tr>
    <th colspan="2"> Encabezado combinado </th>
  </tr>
  <tr>
    <td> Celda 1 </td>
    <td> Celda 2 </td>
  </tr>
  <tr>
    <td rowspan="2"> Fila combinada </td>
    <td> Dato A </td>
  </tr>
  <tr>
    <td> Dato B </td>
  </tr>
</table>`,
    tip: 'Úsalo con cuidado para no romper la estructura visual de tu tabla.'
  }

]
