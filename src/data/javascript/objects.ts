export const objectsJs = [
  {
    title: 'Creación y acceso a objetos',
    description:
      'Aprende a definir objetos y acceder a sus propiedades con notación punto o corchetes.',
    code: `const persona = {
  nombre: 'Aramis',
  edad:   24,
  hobby:  'Hacking'
}

console.log(persona.nombre)  // Aramis
console.log(persona['edad']) // 24`,
    tip: 'Puedes usar comillas y corchetes si la propiedad tiene espacios o caracteres especiales.',
    extra:
      'Futaba dice: “Cada objeto es una red de significados, como una mente conectada.”',
  },
  {
    title: 'Modificar y agregar propiedades',
    description: 'Cambia o agrega propiedades a un objeto dinámicamente.',
    code: `const libro = {
  titulo: 'Metaverse Dive',
  autor: 'Makoto'
}

libro.paginas = 320
libro['genero'] = 'Ficción'

console.log(libro) // { titulo: 'Metaverse Dive', autor: 'Makoto', paginas: 320, genero: 'Ficción' }`,
    tip: 'Los objetos son mutables, puedes agregar o editar propiedades en cualquier momento.',
    extra:
      'Makoto aconseja: “No temas modificar lo que ya está... si sabes por qué lo haces.”',
  },
  {
    title: 'Recorrer objetos con for...in y Object.keys',
    description: 'Explora propiedades con bucles y utilidades nativas.',
    code: `const stats = {
  fuerza: 80,
  agilidad: 90,
  inteligencia: 100
}

for (let key in stats) {
  console.log(key + ': ' + stats[key])
}

const claves = Object.keys(stats)
console.log(claves)`,
    tip: '`for...in` recorre propiedades enumerables. `Object.keys()` devuelve un array de claves.',
    extra:
      'Sumire reflexiona: “Recorrer un objeto es como ver los valores ocultos tras su fachada.”',
  },
  {
    title: 'Destructuring en objetos',
    description: 'Extrae propiedades fácilmente con sintaxis concisa.',
    code: `const config = {
  modo: 'oscuro',
  idioma: 'es',
  notificaciones: true
}

const { modo, idioma } = config
console.log(modo, idioma)`,
    tip: 'El nombre de la variable debe coincidir con la clave del objeto.',
    extra:
      'Haru recuerda: “Desestructurar es tomar lo esencial, sin romper el todo.”',
  },
  {
    title: 'Métodos dentro de objetos',
    description:
      'Define funciones como parte de un objeto para encapsular comportamiento.',
    code: `const robot = {
  nombre: 'Aigis',
  saludar() {
    return 'Hola, soy ' + this.nombre
  }
}

console.log(robot.saludar()) // Hola, Soy Aigis`,
    tip: '`this` se refiere al objeto actual dentro de sus métodos.',
    extra:
      'Kasumi dice: “Un método es la forma en que un objeto expresa su voluntad.”',
  },
  {
    title: 'Object.assign y spread operator',
    description: 'Clona o combina objetos fácilmente.',
    code: `const base = { fuerza: 50 }
const extra = { agilidad: 70 }

const fusion1 = Object.assign({}, base, extra)
const fusion2 = { ...base, ...extra }

console.log(fusion1, fusion2)`,
    tip: '`Object.assign` y `spread` clonan o fusionan objetos, ¡sin mutar el original!',
    extra:
      'Makoto observa: “Fusionar es elegir qué se queda y qué se sobreescribe.”',
  },
]
