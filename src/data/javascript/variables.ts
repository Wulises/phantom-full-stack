// src/data/javascript/variablesJs.ts

export const variablesJs = [
  {
    title: 'Declaración con let',
    description:
      'Permite declarar variables cuyo valor puede cambiar a lo largo del tiempo.',
    code: `let nombre = "Haru";\nnombre = "Kasumi";`,
    tip: 'Usa let cuando esperes que el valor cambie durante la ejecución.',
    extra: 'Kasumi dice: “Con let, puedes reasignar sin pelear con constantes.”'
  },
  {
    title: 'Declaración con const',
    description:
      'Declara constantes: valores que no puedes reasignar después de su declaración.',
    code: `const PI = 3.1416;\n// PI = 3.14; // Esto fallaría`,
    tip: 'Usa const cuando sabes que el valor no debe cambiar.',
    extra: 'Haru advierte: “Una vez definida la constante, no hay vuelta atrás.”'
  },
  {
    title: 'Booleanos',
    description: 'Tipo de dato que solo puede ser true o false.',
    code: `let estaActivo = true;\nlet esFalso = false;`,
    tip: 'Se usan mucho en condicionales, control de estado y banderas.',
    extra: 'Makoto sonríe: “Verdadero o falso: la base de muchas decisiones.”'
  },
  {
    title: 'Número (number)',
    description: 'Para valores numéricos (enteros o decimales).',
    code: `let edad = 25;\nlet precio = 99.99;`,
    tip: 'Puedes operar con ellos (suma, resta, multiplicación, etc.).',
    extra: 'Sumire murmura: “Con los números haces casi toda la lógica de cálculo.”'
  },
  {
    title: 'Texto (string)',
    description: 'Cadena de caracteres: letras, palabras, frases.',
    code: `let saludo = "Hola, mundo";\nlet nombre = 'Haru';`,
    tip: 'Puedes concatenar, cortar, invertir, y muchas operaciones más.',
    extra: 'Kasumi sonríe: “Las palabras también son parte de la lógica del juego.”'
  },
  {
    title: 'null y undefined',
    description:
      'Valores especiales que representan “ausencia de valor” de diferentes formas.',
    code: `let x = null;\nlet y; // undefined`,
    tip:
      'undefined es “no definido”; null es “valor nulo asignado explícitamente”.',
    extra: 'Haru reflexiona: “Ausencia de valor también es parte del control.”'
  }
]
