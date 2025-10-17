export const asyncFunctionsJs = [
  {
    title: '¿Qué es programación asíncrona en JavaScript?',
    description:
      'La programación asíncrona permite ejecutar operaciones que toman tiempo (peticiones HTTP, timers, I/O) sin bloquear el hilo principal. JS usa callbacks, promesas o async/await para eso.',
    code: `console.log("Inicio");
setTimeout(() => {
  console.log("Mensaje retrasado");
}, 1000);
console.log("Fin");`,
    tip: 'Aunque uses async/await o promesas, muchas operaciones fundamentales detrás usan callbacks.',
    extra: '🕰️ Haru piensa: “El tiempo no se detiene… pero podemos manejarlo con elegancia.”'
  },
  {
    title: 'Callbacks – la forma “clásica”',
    description:
      'Un callback es una función que pasas como argumento para que sea llamada después de que algo ocurra. Se vuelve difícil de mantener si anidas muchos (callback hell).',
    code: `function ejecutarDespues(ms, fn) {
  setTimeout(fn, ms);
}
ejecutarDespues(1000, () => {
  console.log("Esto se ejecuta después de 1 segundo");
});`,
    tip: 'Úsalos para cosas simples, pero no abuses de la anidación profunda.',
    extra: '🎭 Sumire susurra: “Las promesas resolvieron muchos dolores del callback hell.”'
  },
  {
    title: 'Promesas (Promise)',
    description:
      'Una promesa representa una operación eventual: puede resolverse (resolve) o fallar (reject). Permite un encadenamiento limpio con `.then` y `.catch`.',
    code: `const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    const exito = true;
    if (exito) resolve("¡Éxito!");
    else reject("Algo falló");
  }, 1000);
});

promesa
  .then(msg => console.log(msg))
  .catch(err => console.log("Error:", err));`,
    tip: 'Los métodos `.then` reciben el resultado, `.catch` maneja errores.',
    extra: '💡 Makoto aclara: “Una promesa es una promesa… pero puede no cumplirse.”'
  },
  {
    title: 'async / await',
    description:
      '`async` convierte una función en una promesa implícita, y `await` “detiene” la ejecución hasta que esa promesa se resuelva (o falle). Esto permite escribir código asíncrono con estilo síncrono.',
    code: `async function fetchDatos() {
  try {
    const resp = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await resp.json();
    console.log(data);
  } catch (err) {
    console.log("Error al obtener datos:", err);
  }
}

fetchDatos();`,
    tip: 'Siempre usa `try / catch` dentro de una función `async` para capturar errores.',
    extra: '🌸 Haru analiza: “Esperar no es perder tiempo si sabes qué esperar.”'
  },
  {
    title: 'Manejo de errores en código asíncrono',
    description:
      'Tanto con promesas como con `async/await`, debes anticipar errores: con `.catch` o `try/catch`. No hacerlo puede romper tu app silenciosamente.',
    code: `async function fetchConError() {
  try {
    const resp = await fetch("https://noexiste.xyz"); 
    const data = await resp.json();
    console.log(data);
  } catch (err) {
    console.log("Capturado:", err.message || err);
  }
}

fetchConError();`,
    tip: 'Nunca des por hecho que una operación externa funcionará; siempre maneja fallas.',
    extra: '💃 Kasumi dice: “Los errores también cuentan tu historia.”'
  },
  {
    title: 'Ejemplo práctico – petición y renderización',
    description:
      'Un ejemplo donde hacemos una petición a una API, obtenemos los resultados, manejamos estados de carga / error y mostramos datos vívidos en pantalla.',
    code: `async function getUsuarios() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!resp.ok) throw new Error("Error HTTP " + resp.status);
  const users = await resp.json();
  return users;
}

getUsuarios()
  .then(users => console.log(users))
  .catch(err => console.log("Error:", err));`,
    tip: 'Verifica `resp.ok` antes de parsear JSON para manejar errores HTTP explícitos.',
    extra: '🎯 Haru te recuerda: “La mejor petición es la que sabe responder con claridad.”'
  }
]