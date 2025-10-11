// src/data/javascript/functionsJs.ts

export const functionsJs = [
  {
    title: 'Función declarativa (function)',
    description:
      'La forma clásica de declarar funciones en JavaScript usando la palabra clave `function`.',
    code: `function saludar(nombre) {
  return "Hola, " + nombre + "!";
}
console.log(saludar("Haru"));`,
    tip: 'Úsala cuando necesites funciones “nombradas” con hoisting parcial.',
    extra: 'Makoto recomienda: “Una función bien nombrada es más legible que mil comentarios.”'
  },
  {
    title: 'Función expresiva / asignada a variable',
    description:
      'Asignar una función a una variable permite flexibilidad y funciones anónimas.',
    code: `const sumar = function(a, b) {
  return a + b;
};
console.log(sumar(5, 3));`,
    tip: 'Esta forma es útil cuando pasas funciones como valores.',
    extra: 'Haru dice: “La función puede viajar dentro de variables.”'
  },
  {
    title: 'Función flecha (arrow function)',
    description:
      'Sintaxis más corta y conveniente. No tiene su propio `this` en muchos casos.',
    code: `const multiplicar = (a, b) => a * b;
console.log(multiplicar(4, 2));`,
    tip: 'Ideal para funciones pequeñas y callbacks inline.',
    extra: 'Kasumi comenta: “La flecha apunta directo al resultado.”'
  },
  {
    title: 'Callback / funciones como argumentos',
    description:
      'Puedes pasar funciones como parámetros para ejecutar código más tarde.',
    code: `function operacion(a, b, fn) {
  return fn(a, b);
}
const resta = (a, b) => a - b;
console.log(operacion(10, 4, resta));`,
    tip: 'Muy útil para programación funcional y manejo de eventos.',
    extra: 'Sumire dice: “Pasa la función, deja que ella decida el momento de ejecución.”'
  },
  {
    title: 'Parámetros por default y rest/spread',
    description:
      'Puedes dar valores predeterminados y recoger múltiples argumentos con rest.',
    code: `function saludar(nombre = "invitado") {
  return "Hola, " + nombre;
}
function suma(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}
console.log(saludar());
console.log(suma(1, 2, 3, 4));`,
    tip: 'Muy útil cuando no todos los parámetros se pasan o quieres funciones versátiles.',
    extra: 'Haru susurra: “El default es un respaldo elegante para no romper el flujo.”'
  },
  {
    title: 'Funciones async / Promesas (visión anticipada)',
    description:
      'Aunque se cubre a detalle luego, aquí puedes ver funciones asíncronas y promesas.',
    code: `async function obtenerDatos() {
  const resp = await fetch("/api/datos");
  return resp.json();
}
obtenerDatos().then(data => console.log(data));`,
    tip: 'Útil si en este tema quieres mostrar una pequeña vista de futuro.',
    extra: 'Makoto adelanta: “Lo asíncrono puede esperar… pero necesita buena estructura.”'
  }
]
