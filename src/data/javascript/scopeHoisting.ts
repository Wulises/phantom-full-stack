// src/data/javascript/scopeHoistingJs.ts

export const scopeHoistingJs = [
  {
    title: 'Scope global y local',
    description:
      'Las variables declaradas fuera de cualquier función tienen scope global; las declaradas dentro, scope local.',
    code: `let globalVar = 'Soy global';

function ejemplo() {
  let localVar = 'Soy local';
  console.log(globalVar); // Accede a variable global
  console.log(localVar);  // Accede a variable local
}

ejemplo();
console.log(localVar); // Error: no está definida fuera de la función`,
    tip: 'Recuerda que variables locales solo existen dentro de su función o bloque.',
    extra: 'Makoto aconseja: “Controlar el alcance es como mantener el orden: todo en su lugar.”'
  },
  {
    title: 'Scope de bloque con let y var',
    description:
      'Las variables declaradas con let y const tienen alcance de bloque, var solo de función.',
    code: `if (true) {
  let x = 5;
  var y = 10;
}
console.log(x); // Error: x no existe fuera del bloque
console.log(y); // 10, var no respeta bloque`,
    tip: 'Usa let para evitar fugas de variables fuera de bloques.',
    extra: 'Kasumi comenta: “Los límites son importantes… incluso para las variables.”'
  },
  {
    title: 'Hoisting de variables declaradas con var',
    description:
      'Las variables declaradas con var son elevadas (hoisted) al inicio del scope, pero inicializadas con undefined.',
    code: `console.log(a); // undefined
var a = 3;
console.log(a); // 3`,
    tip: 'No confundas hoisting con inicialización; var es declarada arriba, pero asignada después.',
    extra: 'Sumire recuerda: “Sube sin valor… como quien llega temprano pero sin preparación.”'
  },
  {
    title: 'Hoisting con let y const',
    description:
      'Las variables con let y const también se elevan, pero están en una "zona muerta temporal" hasta ser declaradas.',
    code: `console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 5;`,
    tip: 'No accedas a let o const antes de declararlas para evitar errores.',
    extra: 'Haru dice: “No coseches antes de sembrar… incluso las variables necesitan su tiempo.”'
  },
  {
    title: 'Hoisting de funciones declarativas',
    description:
      'Las funciones declarativas completas se elevan, por eso pueden llamarse antes de su declaración.',
    code: `saludar();

function saludar() {
  console.log('Hola!');
}`,
    tip: 'Puedes llamar funciones declarativas antes de que aparezcan en el código.',
    extra: 'Makoto enseña: “Preparadas desde el principio, las funciones declarativas son confiables.”'
  },
  {
    title: 'Funciones expresivas y hoisting',
    description:
      'Las funciones asignadas a variables (expresivas) solo se elevan como variables, no como funciones.',
    code: `saludarFlecha(); // Error: no es función

const saludarFlecha = () => {
  console.log('Hola desde flecha!');
};`,
    tip: 'No puedes llamar funciones expresivas antes de su asignación.',
    extra: 'Kasumi sonríe: “Una función expresiva debe declararse antes de volar.”'
  }
]
