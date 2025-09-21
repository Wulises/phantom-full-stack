export const basicPropertiesCSS = [

  {
    title: 'Color',
    description: 'Propiedad para definir el color del texto.',
    code: `/* Ejemplo de color */
p {
  color: red;
}`,
    tip: 'Usa nombres de colores, códigos hexadecimales o RGB.'
  },
  {
    title: 'Fondo (background)',
    description: 'Define el color o imagen de fondo de un elemento.',
    code: `/* Fondo con color */
div {
  background-color: #f0f0f0;
}

/* Fondo con imagen */
section {
  background-image: url('imagen.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}`,
    tip: 'background-color es para color sólido, background-image para imágenes.'
  },
  {
    title: 'Texto',
    description: 'Propiedades para controlar la tipografía y estilo del texto.',
    code: `/* Tamaño y familia de fuente */
h1 {
  font-size: 24px;
  font-family: Arial, sans-serif;
}

/* Alineación y estilo */
p {
  text-align: justify;
  font-style: italic;
  font-weight: bold;
}`,
    tip: 'Usa fuentes web seguras o Google Fonts para mejor compatibilidad.'
  },
  {
    title: 'Borde (border)',
    description: 'Define el borde alrededor de un elemento.',
    code: `/* Borde sólido */
div {
  border: 2px solid black;
}

/* Borde redondeado */
button {
  border-radius: 8px;
  border: 1px dashed #333;
}`,
    tip: 'Puedes definir grosor, estilo y color del borde en una sola propiedad.'
  },
  {
    title: 'Espaciado (margen y padding)',
    description: 'Controla el espacio afuera (margin) y adentro (padding) de un elemento.',
    code: `/* Margen externo */
.container {
  margin: 20px;
}

/* Padding interno */
.box {
  padding: 10px 15px;
}`,
    tip: 'Usa margen para separar elementos y padding para dar espacio dentro del elemento.'
  },
  {
    title: 'Ancho y alto',
    description: 'Define el tamaño de un elemento.',
    code: `/* Tamaño fijo */
div {
  width: 200px;
  height: 100px;
}

/* Tamaño relativo */
section {
  width: 50%;
  height: auto;
}`,
    tip: 'Puedes usar unidades absolutas o relativas según el diseño que busques.'
  },
  {
    title: 'Visibilidad',
    description: 'Controla si un elemento es visible o no.',
    code: `/* Ocultar elemento */
p {
  visibility: hidden;
}

/* No mostrar y no ocupar espacio */
div {
  display: none;
}`,
    tip: 'visibility:hidden oculta pero mantiene el espacio, display:none elimina el elemento del flujo.'
  }
  
]
