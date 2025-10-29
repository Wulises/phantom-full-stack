export const jsonStorageJs = [
  {
    title: '¿Qué es JSON y almacenamiento local?',
    description:
      'JSON (JavaScript Object Notation) es un formato ligero para intercambio de datos. localStorage y sessionStorage permiten guardar datos en el navegador como cadenas.',
    code: `const usuario = { nombre: "Susana", edad: 58 };
localStorage.setItem("usuario", JSON.stringify(usuario));

const dato = localStorage.getItem("usuario");
if (dato) {
  const obj = JSON.parse(dato);
  console.log(obj.nombre); // "Susana"
}`,
    tip: 'Siempre convierte objetos con `JSON.stringify` al guardar y usa `JSON.parse` al leer.',
    extra:
      '🕹️ Haru te recuerda: “Los recuerdos guardados pueden volver completos con cuidado.”',
  },
  {
    title: 'sessionStorage vs localStorage',
    description:
      'Ambos permiten almacenamiento en el navegador. La diferencia principal es la duración: `sessionStorage` se borra al cerrar la pestaña, `localStorage` persiste.',
    code: `sessionStorage.setItem("activo", "true");
console.log(sessionStorage.getItem("activo"));

localStorage.setItem("persistente", "valor");
console.log(localStorage.getItem("persistente"));`,
    tip: 'Usa sessionStorage para datos temporales de sesión, localStorage para persistentes entre sesiones.',
    extra:
      '🎓 Makoto dice: “Lo temporal y lo persistente tienen su lugar correcto.”',
  },
  {
    title: 'Eliminar y limpiar datos',
    description:
      'Puedes eliminar una clave específica o limpiar todo el almacenamiento.',
    code: `localStorage.removeItem("usuario");
sessionStorage.clear();`,
    tip: 'Siempre remueve solo lo que realmente ya no necesitas; limpiar todo puede romper estado inesperado.',
    extra: '🎭 Sumire susurra: “Eliminar también es cuidar lo que permanece.”',
  },
  {
    title: 'Ejemplo práctico – contador persistente',
    description:
      'Un contador que persiste su valor entre recargas usando localStorage.',
    code: `const clave = "contadorPersistente";
const cuenta = parseInt(localStorage.getItem(clave) || "0", 10);
let contador = isNaN(cuenta) ? 0 : cuenta;

function incrementar() {
  contador++;
  localStorage.setItem(clave, contador.toString());
  console.log("Contador:", contador);
}

incrementar();`,
    tip: 'Al iniciar, lee la clave con JSON.parse / parseInt; al actualizar, guarda el nuevo valor.',
    extra: '💃 Kasumi dice: “La constancia persiste en el tiempo.”',
  },
  {
    title: 'Manejo de objetos complejos',
    description:
      'Si usas objetos o arrays más complejos, conviértelos siempre con JSON para almacenarlos.',
    code: `const notas = [
  { id: 1, texto: "Estudiar JS" },
  { id: 2, texto: "Leer novela" },
];
localStorage.setItem("notas", JSON.stringify(notas));

const raw = localStorage.getItem("notas");
if (raw) {
  const arr = JSON.parse(raw) as { id: number; texto: string }[];
  console.log(arr[1].texto); // "Leer novela"
}`,
    tip: 'Ten cuidado con `undefined` o funciones: JSON no serializa funciones o valores no válidos.',
    extra:
      '🌸 Haru analiza: “No todos los procesos caben en cadenas… pero puedes reconstruirlos.”',
  },
]
