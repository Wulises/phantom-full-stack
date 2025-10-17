// data/javascript/domManipulation.ts

export const domManipulationJs = [
  {
    title: '¿Qué es la manipulación del DOM?',
    description: 'El DOM (Document Object Model) es una representación en árbol de los elementos HTML. Manipular el DOM significa cambiar, crear o eliminar elementos de esa estructura con JavaScript.',
    code: `const p = document.createElement('p');
p.textContent = '¡Hola, mundo!';
document.body.appendChild(p);`,
    tip: 'Crea nodos con `createElement`, modifica propiedades y usa `appendChild`, `removeChild`, `replaceChild` según el caso.',
    extra: '🔵 Makoto reflexiona: “Un cambio en la estructura puede transformar toda la realidad.”'
  },
  {
    title: 'Seleccionar elementos del DOM',
    description: 'Puedes acceder a elementos con `getElementById`, `querySelector`, `getElementsByClassName`, etc.',
    code: `const miDiv = document.getElementById('miDiv');
const items = document.querySelectorAll('.item');
console.log(miDiv, items);`,
    tip: 'Prefiere `querySelector` y `querySelectorAll` por su flexibilidad.',
    extra: '🟣 Haru observa: “Elegir bien es el primer paso hacia el control.”'
  },
  {
    title: 'Modificar contenido y atributos',
    description: 'Puedes cambiar `textContent`, `innerHTML`, atributos como `src`, `href` o clases con `classList`.',
    code: `const img = document.querySelector('img');
if (img) {
  img.src = 'nueva-imagen.jpg';
  img.alt = 'Descripción actualizada';
}
const titulo = document.getElementById('titulo');
if (titulo) {
  titulo.textContent = 'Título nuevo';
}`,
    tip: 'Sé cuidadoso con `innerHTML` (riesgo de inyección). Prefiere métodos seguros como `textContent` o manipulación de clases.',
    extra: '🌸 Kasumi comenta: “Cada parte cambia, pero la armonía debe conservarse.”'
  },
  {
    title: 'Agregar, eliminar y reemplazar nodos',
    description: 'Puedes insertar, quitar o cambiar nodos usando métodos como `appendChild`, `removeChild`, `replaceChild`, `insertBefore`.',
    code: `const parent = document.getElementById('contenedor');
const nuevo = document.createElement('div');
nuevo.textContent = 'Nuevo nodo';
if (parent) {
  parent.appendChild(nuevo);
  // remover:
  // parent.removeChild(nuevo);
}`,
    tip: 'Verifica que el nodo padre exista antes de manipular sus hijos.',
    extra: '🎭 Sumire dice: “Todo cambio visible requiere una base firme.”'
  },
  {
    title: 'Escuchar cambios con MutationObserver',
    description: 'Puedes detectar cambios en el DOM (atributos, hijos, etc.) usando `MutationObserver`.',
    code: `const target = document.getElementById('observado');
if (target) {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach(m => {
      console.log('Cambio detectado:', m);
    });
  });
  observer.observe(target, { childList: true, attributes: true });
}`,
    tip: 'Muy útil para UI dinámicas donde otros scripts modifican el DOM.',
    extra: '🔵 Makoto advierte: “Estar atento a los cambios es anticipar el futuro.”'
  }
]