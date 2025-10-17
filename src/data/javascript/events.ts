// data/javascript/events.ts

export const eventsJs = [
  {
    title: '¿Qué es un evento en JavaScript?',
    description: 'Un evento es cualquier interacción que ocurre en el navegador: clics, teclas, movimiento del mouse, etc. JavaScript puede “escuchar” estos eventos para ejecutar código cuando ocurren.',
    code: `document.addEventListener('click', () => {
  console.log('¡Hiciste clic en cualquier parte del documento!');
});`,
    tip: 'Usa `addEventListener` para registrar funciones que se ejecuten cuando ocurran eventos.',
    extra: '🌸 Kasumi sonríe: “La reacción correcta... empieza con un buen reflejo.”'
  },
  {
    title: 'Evento de clic con un botón',
    description: 'Puedes hacer que un botón responda a un clic, llamando una función específica.',
    code: `<button id="miBoton">Haz clic</button>

<script>
  document.getElementById("miBoton").addEventListener("click", () => {
    alert("¡Evento detectado!");
  });
</script>`,
    tip: 'Primero asegúrate de que el elemento exista antes de añadirle el evento.',
    extra: '🟣 Haru dice: “Un toque... puede iniciar grandes cosas.”'
  },
  {
    title: 'Prevent Default',
    description: 'Algunos eventos como enviar un formulario recargan la página. `preventDefault()` evita ese comportamiento por defecto.',
    code: `<form id="miFormulario">
  <input type="text" />
  <button type="submit">Enviar</button>
</form>

<script>
  document.getElementById("miFormulario").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Formulario interceptado sin recargar.");
  });
</script>`,
    tip: 'Ideal para SPAs (Single Page Applications) que no usan recargas.',
    extra: '🔵 Makoto analiza: “Evita el caos. Controla el flujo.”'
  },
  {
    title: 'Event Delegation',
    description: 'Consiste en escuchar eventos desde un contenedor padre, y detectar en qué hijo ocurrió. Útil para manejar muchos elementos dinámicamente.',
    code: `<ul id="lista">
  <li>Elemento 1</li>
  <li>Elemento 2</li>
</ul>

<script>
  document.getElementById("lista").addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      alert(\`Clic en: \${e.target.textContent}\`);
    }
  });
</script>`,
    tip: 'Evita tener que añadir un `addEventListener` por cada hijo individual.',
    extra: '🎭 Sumire susurra: “Desde las sombras, se puede guiar todo.”'
  },
  {
    title: 'Tipos de eventos comunes',
    description: 'Algunos de los eventos más utilizados incluyen: `click`, `mouseover`, `keydown`, `submit`, `change`, `input`, etc.',
    code: `document.addEventListener("keydown", (e) => {
  console.log(\`Tecla presionada: \${e.key}\`);
});`,
    tip: 'Cada tipo de evento puede acceder a un objeto “evento” con datos útiles.',
    extra: '🌸 Kasumi aclara: “Escuchar también es parte de la danza.”'
  }
]