export const overflowScrollCSS = [
  {
    title: '¿Qué es overflow en CSS?',
    description: 'La propiedad overflow controla qué pasa cuando el contenido de un elemento se desborda de su caja contenedora',
    code: `/* Ocultar el contenido desbordado */
.box {
  overflow: hidden
}

/* Mostrar scroll si es necesario */
.box {
  overflow: auto
}`,
    tip: 'El valor por defecto de overflow es visible'
  },
  {
    title: 'Valores comunes de overflow',
    description: 'Puedes controlar el comportamiento del desbordamiento con diferentes valores según lo que necesites',
    code: `overflow: visible   /* Muestra el contenido aunque se salga */
overflow: hidden    /* Corta el contenido que se sale */
overflow: scroll    /* Siempre muestra barras de scroll */
overflow: auto      /* Muestra scroll solo si es necesario */`,
    tip: 'Usa auto para un comportamiento más limpio y dinámico'
  },
  {
    title: 'Overflow en direcciones específicas',
    description: 'Puedes controlar el desbordamiento horizontal o vertical por separado con overflow-x y overflow-y',
    code: `.box {
  overflow-x: auto   /* Scroll horizontal solo si se necesita */
  overflow-y: hidden /* Oculta el scroll vertical */
}`,
    tip: 'Ideal cuando tienes listas horizontales o columnas'
  },
  {
    title: 'Scroll personalizado (scrollbar)',
    description: 'Con pseudo-elementos específicos puedes estilizar la barra de scroll en navegadores WebKit',
    code: `/* Estilo básico de scroll en Chrome/Safari */
.box::-webkit-scrollbar {
  width: 8px
}

.box::-webkit-scrollbar-thumb {
  background-color: #888
  border-radius: 4px
}

.box::-webkit-scrollbar-thumb:hover {
  background-color: #555
}`,
    tip: 'No todos los navegadores soportan personalización del scroll'
  },
  {
    title: 'Desbordamiento y posicionamiento',
    description: 'El uso de overflow también afecta a elementos posicionados o con transformaciones',
    code: `.container {
  overflow: hidden
  position: relative
}

/* Elemento absolutamente posicionado se recorta si se sale */
.child {
  position: absolute
  top: 0
  left: 100%
}`,
    tip: 'Combinar overflow y position te ayuda a controlar lo que se ve y lo que no'
  },
  {
    title: 'Scroll snapping (CSS Scroll Snap)',
    description: 'Permite que el scroll se detenga automáticamente en ciertos puntos definidos',
    code: `.scroll-container {
  scroll-snap-type: x mandatory
  overflow-x: scroll
  display: flex
}

.item {
  scroll-snap-align: start
  flex: 0 0 100%
}`,
    tip: 'Útil para sliders, carruseles o navegación por secciones'
  },
  {
    title: 'Ocultar scroll pero mantener scrollable',
    description: 'Truco común para ocultar la barra de scroll pero permitir el desplazamiento',
    code: `.scroll-hidden {
  overflow: auto
  scrollbar-width: none        /* Firefox */
  -ms-overflow-style: none     /* IE y Edge */

  /* WebKit */
}

.scroll-hidden::-webkit-scrollbar {
  display: none
}`,
    tip: 'Funciona en la mayoría de los navegadores modernos'
  }
]