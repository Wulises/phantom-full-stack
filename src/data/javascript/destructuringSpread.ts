export const destructuringAndSpread = [
  {
    title: 'Desestructuración de objetos',
    description:
      'Extrae propiedades de un objeto en variables individuales de forma concisa.',
    code: `const persona = { nombre: "Rogelio", edad: 50 };
const { nombre, edad } = persona;
console.log(nombre); // "Rogelio"
console.log(edad);   // 50`,
    tip: 'Útil cuando necesitas acceder a múltiples propiedades rápidamente.',
    extra:
      '🌸 Haru dice: “Desestructurar es como conocerte mejor, parte por parte.”',
  },
  {
    title: 'Desestructuración de arrays',
    description:
      'Extrae valores de un array en variables individuales usando su posición.',
    code: `const colores = ["rojo", "verde", "azul"];
const [primero, segundo] = colores;
console.log(primero); // "rojo"
console.log(segundo); // "verde"`,
    tip: 'Ideal para acceder rápido a elementos en arrays conocidos.',
    extra:
      '🎓 Makoto aclara: “En los arrays, cada posición tiene su razón de ser.”',
  },
  {
    title: 'Rest en desestructuración de objetos',
    description:
      'Puedes capturar el "resto" de propiedades en una nueva variable.',
    code: `const usuario = { id: 1, nombre: "Haru", rol: "admin" };
const { nombre, ...resto } = usuario;
console.log(nombre); // "Haru"
console.log(resto);  // { id: 1, rol: "admin" }`,
    tip: 'Útil para separar propiedades específicas del resto.',
    extra:
      '🌸 Haru reflexiona: “A veces lo que queda es justo lo que necesitas.”',
  },
  {
    title: 'Rest en desestructuración de arrays',
    description:
      'Puedes capturar el resto de elementos de un array después de extraer los primeros.',
    code: `const numeros = [1, 2, 3, 4, 5];
const [primero, ...otros] = numeros;
console.log(primero); // 1
console.log(otros);   // [2, 3, 4, 5]`,
    tip: 'Perfecto para manejar cabeceras de listas o valores iniciales.',
    extra:
      '🎭 Sumire comenta: “El inicio es importante, pero lo que viene después también brilla.”',
  },
  {
    title: 'Spread en objetos',
    description: 'Permite copiar o combinar objetos fácilmente.',
    code: `const base = { nombre: "Haru", edad: 25 };
const extendido = { ...base, rol: "usuario" };
console.log(extendido); // { nombre: "Haru", edad: 25, rol: "usuario" }`,
    tip: 'Spread siempre va al copiar/combinar, rest al desestructurar.',
    extra: '💃 Kasumi comparte: “Expandirse también es crecer.”',
  },
  {
    title: 'Spread en arrays',
    description: 'Puedes combinar arrays o clonar uno nuevo fácilmente.',
    code: `const a = [1, 2];
const b = [3, 4];
const combinado = [...a, ...b];
console.log(combinado); // [1, 2, 3, 4]`,
    tip: 'Evita modificar el array original, trabaja con copias.',
    extra:
      '🎓 Makoto dice: “Combinar sin alterar... esa es la elegancia de JavaScript.”',
  },
]
