export const controlStructuresJs = [
  {
    title: 'Condicional if/else',
    description: 'Permite ejecutar un bloque de código solo si se cumple una condición.',
    code: `let edad = 18;
if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}`,
    tip: 'Úsalo para tomar decisiones basadas en condiciones.',
    extra: 'Makoto dice: “Analiza primero, actúa después: esa es la lógica del if.”'
  },
  {
    title: 'Condicional switch',
    description: 'Evalúa una expresión y ejecuta el caso que coincida.',
    code: `let color = "rojo";
switch (color) {
  case "rojo":
    console.log("El color es rojo");
    break;
  case "azul":
    console.log("El color es azul");
    break;
  default:
    console.log("Color no reconocido");
}`,
    tip: 'Ideal cuando tienes muchas condiciones sobre el mismo valor.',
    extra: 'Haru aconseja: “Switch es como un menú elegante: cada opción tiene su lugar.”'
  },
  {
    title: 'Bucle for',
    description: 'Ejecuta un bloque de código un número determinado de veces.',
    code: `for (let i = 0; i < 5; i++) {
  console.log("Iteración " + i);
}`,
    tip: 'Perfecto para iteraciones con un número conocido de repeticiones.',
    extra: 'Kasumi dice: “Avanza paso a paso, como en un entrenamiento.”'
  },
  {
    title: 'Bucle while',
    description: 'Ejecuta un bloque mientras la condición sea verdadera.',
    code: `let i = 0;
while (i < 3) {
  console.log("Repetición " + i);
  i++;
}`,
    tip: 'Úsalo cuando no sepas cuántas veces se repetirá el bucle.',
    extra: 'Sumire comenta: “Mientras haya motivo, sigue ejecutando.”'
  },
  {
    title: 'Bucle do-while',
    description: 'Ejecuta el bloque de código al menos una vez, y luego repite mientras la condición sea verdadera.',
    code: `let i = 0;
do {
  console.log("Número " + i);
  i++;
} while (i < 3);`,
    tip: 'Garantiza al menos una ejecución, incluso si la condición es falsa al inicio.',
    extra: 'Haru sonríe: “Primero actúa, luego verifica: esa es la esencia del do-while.”'
  }
]
