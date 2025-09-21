export const linksHTML = [

  {
    title: 'Etiqueta de anclaje (<a>)',
    description: 'Se usa para crear hipervínculos a otras páginas, archivos o ubicaciones dentro de la misma página.',
    code: `<a href="https://developer.mozilla.org"> Visitar MDN Web Docs </a>`,
    tip: 'Usa el atributo "target" con "_blank" para abrir el enlace en una nueva pestaña.'
  },

  {
    title: 'Enlace a una página interna',
    description: 'Puedes enlazar a otras páginas dentro del mismo sitio usando URLs relativas.',
    code: `<a href="/about.html"> Sobre nosotros </a>`,
    tip: 'Las URLs relativas facilitan el mantenimiento del sitio en distintos entornos (dev, prod, etc).'
  },

  {
    title: 'Enlace a una sección específica (ancla)',
    description: 'Los enlaces pueden apuntar a partes específicas de una página usando IDs.',
    code: `<a href="#contacto"> Ir a la sección de contacto </a>

<!-- En otro lugar de la página -->
<section id="contacto"> Contáctanos aquí </section>`,
    tip: 'Los enlaces ancla son ideales para navegación en una sola página o para saltar entre secciones.'
  },

  {
    title: 'Enlaces de correo y teléfono',
    description: 'Puedes usar "mailto:" y "tel:" en el href para enlazar correos electrónicos o números de teléfono.',
    code: `<a href="noir@PhantomThief.com"> Enviar correo </a>
<a href="tel:+5555777"> Llamar </a>`,
    tip: 'Útiles para secciones de contacto o footers. Estos enlaces abren la app predeterminada del usuario.'
  },

  {
    title: 'Enlace de descarga',
    description: 'El atributo "download" indica al navegador que descargue el archivo en lugar de abrirlo.',
    code: `<a href="/archivos/manual.pdf" download> Descargar manual (PDF) </a>`,
    tip: 'Puedes especificar un nombre con download="nombre-archivo.pdf".'
  },

  {
    title: 'Abrir enlace en nueva pestaña',
    description: 'Usar target="_blank" abre el enlace en una nueva pestaña. Agrega rel="noopener noreferrer" por seguridad.',
    code: `<a href="https://ejemplo.com" target="_blank" rel="noopener noreferrer"> Visitar ejemplo </a>`,
    tip: 'Esto previene vulnerabilidades de seguridad como "tabnabbing".'
  }

]