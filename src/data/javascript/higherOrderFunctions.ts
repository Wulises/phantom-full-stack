export const higherOrderFunctionsJs = [
  {
    title: '¿Qué es una función de orden superior?',
    description: 'Una función que recibe otra función como argumento o devuelve una función. Esencial para patrones funcionales.',
    code: `function aplicarOperacion(a, b, operacion) {
  return operacion(a, b);
}
const suma = (x, y) => x + y;
console.log(aplicarOperacion(3, 4, suma)); // 7`,
    tip: 'Piensa en ellas como funciones que “controlan” o “modifican” otras funciones.',
    extra: '🌸 Haru te recuerda: “Delegar también es una forma de crear.”'
  },
  {
    title: '.forEach()',
    description: 'Ejecuta una función por cada elemento del array, sin retornar nada.',
    code: `const frutas = ["🍎", "🍌", "🍓"];
frutas.forEach((fruta, i) => {
  console.log(\`Fruta #\${i + 1}: \${fruta}\`);
});`,
    tip: 'Ideal para efectos secundarios, como mostrar en consola.',
    extra: '🎓 Makoto explica: “No cambia nada… solo recorre y ejecuta.”'
  },
  {
    title: '.map()',
    description: 'Crea un nuevo array transformando cada elemento del original.',
    code: `const numeros = [1, 2, 3];
const dobles = numeros.map(n => n * 2);
console.log(dobles); // [2, 4, 6]`,
    tip: 'Usa `.map()` cuando necesites un nuevo array basado en el original.',
    extra: '💃 Kasumi brilla: “Transformar es evolucionar.”'
  },
  {
    title: '.filter()',
    description: 'Retorna un nuevo array solo con los elementos que cumplan una condición.',
    code: `const nums = [1, 2, 3, 4, 5];
const pares = nums.filter(n => n % 2 === 0);
console.log(pares); // [2, 4]`,
    tip: 'No modifica el original. Muy útil para buscar o excluir cosas.',
    extra: '🎭 Sumire susurra: “Solo queda lo que importa de verdad.”'
  },
  {
    title: '.reduce()',
    description: 'Reduce todos los elementos a un solo valor, como una suma o concatenación.',
    code: `const nums = [1, 2, 3, 4];
const sumaTotal = nums.reduce((acc, n) => acc + n, 0);
console.log(sumaTotal); // 10`,
    tip: 'Recibe un acumulador y cada valor del array. Empieza con un valor inicial.',
    extra: '🌸 Haru analiza: “Paso a paso, se forma el todo.”'
  },
  {
    title: 'Composición de funciones',
    description: 'Puedes encadenar funciones de orden superior para transformar datos de forma limpia.',
    code: `const nums = [1, 2, 3, 4, 5];
const resultado = nums
  .filter(n => n % 2 !== 0)
  .map(n => n * 10);
console.log(resultado); // [10, 30, 50]`,
    tip: 'Encadena `.filter()`, `.map()`, y otras para un flujo claro y legible.',
    extra: '🎓 Makoto aclara: “Componer es armonizar, como en la música y el código.”'
  }
]