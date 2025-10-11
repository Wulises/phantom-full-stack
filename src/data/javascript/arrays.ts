//src/data/javascript/arrays.ts
export const arraysJs = [
  {
    title: 'Creación y acceso a arrays',
    description: 'Aprende cómo crear arrays y acceder a sus elementos usando índices.',
    code: `const frutas = ['manzana', 'banana', 'fresa']
console.log(frutas[0]) // manzana`,
    tip: 'Los arrays en JS son indexados desde 0.',
    extra: 'Haru dice: “El primer elemento no es el 1… ¡es el 0!”'
  },
  {
    title: 'Métodos de mutación (push, pop, shift, unshift)',
    description: 'Manipula los valores de un array agregando o quitando elementos.',
    code: `const numeros = [1, 2, 3]
numeros.push(4)
numeros.pop()
numeros.unshift(0)
numeros.shift()
console.log(numeros)`,
    tip: 'Mutan el array original, ¡ten cuidado!',
    extra: 'Makoto aconseja: “Si vas a mutar… asegúrate de tener el control.”'
  },
  {
    title: 'Iterar arrays con for, forEach y map',
    description: 'Recorre elementos con distintas técnicas de iteración.',
    code: `const nombres = ['Ann', 'Makoto', 'Futaba']

nombres.forEach(nombre => {
  console.log('Hola, ' + nombre)
})

const mayusculas = nombres.map(n => n.toUpperCase())
console.log(mayusculas)`,
    tip: '`map` crea un nuevo array. `forEach` no.',
    extra: 'Sumire reflexiona: “Iterar es cuidar cada paso del grupo.”'
  },
  {
    title: 'Destructuring y spread en arrays',
    description: 'Extrae elementos o expande arrays fácilmente.',
    code: `const [primero, segundo] = [10, 20, 30]
console.log(primero) // 10

const a = [1, 2]
const b = [...a, 3, 4]
console.log(b)`,
    tip: 'Útil para copiar o combinar arrays.',
    extra: 'Kasumi dice: “Extiende tus posibilidades con el operador de expansión.”'
  },
  {
    title: 'Buscar y filtrar en arrays',
    description: 'Utiliza `filter`, `find`, `includes` y más para buscar elementos.',
    code: `const personas = ['Haru', 'Makoto', 'Sumire']

const makoto = personas.find(p => p === 'Makoto')
const soloH = personas.filter(p => p.startsWith('H'))
const tieneKasumi = personas.includes('Kasumi')

console.log(makoto, soloH, tieneKasumi)`,
    tip: '`find` te da el primero que coincida, `filter` todos.',
    extra: 'Haru susurra: “Buscar en un array es como encontrar afinidad en los corazones.”'
  },
]
