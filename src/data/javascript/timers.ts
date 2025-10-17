export const timersJs = [
  {
    title: '¿Qué son los temporizadores en JavaScript?',
    description:
      'Los temporizadores permiten ejecutar código después de un cierto tiempo o de manera repetida. Se usan funciones como `setTimeout` y `setInterval`.',
    code: `console.log("Inicio");
setTimeout(() => {
  console.log("Esto se muestra después de 2 segundos");
}, 2000);`,
    tip: 'setTimeout ejecuta una función una sola vez después del tiempo indicado (en milisegundos).',
    extra: '🕒 Haru comenta: “Hasta las flores necesitan su tiempo para florecer.”'
  },
  {
    title: 'setInterval: ejecutar repetidamente',
    description:
      '`setInterval` permite ejecutar una función muchas veces en intervalos regulares de tiempo.',
    code: `let contador = 0;
const intervalo = setInterval(() => {
  contador++;
  console.log(\`Contador: \${contador}\`);
  if (contador === 5) clearInterval(intervalo);
}, 1000);`,
    tip: 'Usa `clearInterval` para detener un intervalo activo.',
    extra: '🎓 Makoto explica: “Repetir puede ser bueno… pero solo si sabes cuándo detenerte.”'
  },
  {
    title: 'clearTimeout y clearInterval',
    description:
      'Puedes guardar el ID de un temporizador y usar `clearTimeout` o `clearInterval` para cancelarlo antes de que se ejecute.',
    code: `const id = setTimeout(() => {
  console.log("Nunca me verás");
}, 3000);

clearTimeout(id);`,
    tip: 'Guarda siempre el resultado de `setTimeout`/`setInterval` para poder cancelarlos.',
    extra: '🎭 Sumire susurra: “A veces, cancelar a tiempo es la mejor decisión.”'
  },
  {
    title: 'Temporizador con cuenta regresiva',
    description:
      'Un ejemplo clásico es una cuenta regresiva visual. Aquí ves cómo usar `setInterval` para eso.',
    code: `let segundos = 5;
const cuentaRegresiva = setInterval(() => {
  console.log(\`Tiempo restante: \${segundos}\`);
  segundos--;
  if (segundos < 0) {
    clearInterval(cuentaRegresiva);
    console.log("¡Tiempo terminado!");
  }
}, 1000);`,
    tip: 'Ideal para juegos, quizzes, recordatorios o cargas temporizadas.',
    extra: '💃 Kasumi brilla: “Cada segundo cuenta cuando estás en movimiento.”'
  },
  {
    title: 'Diferencia entre setTimeout y setInterval',
    description:
      '`setTimeout` se ejecuta una vez. `setInterval` se repite hasta que se cancele. Ambos pueden coexistir pero deben usarse con cuidado para evitar errores.',
    code: `// Ejecuta un mensaje en 2s (una vez)
setTimeout(() => console.log("Una sola vez"), 2000);

// Ejecuta cada segundo (repetido)
setInterval(() => console.log("Cada segundo"), 1000);`,
    tip: '¿Quieres algo repetido solo cierto número de veces? Usa `setInterval` con un contador.',
    extra: '🌸 Haru analiza: “Una flor florece una vez, otras vuelven cada estación.”'
  },
  {
    title: 'Retrasar ejecuciones encadenadas',
    description:
      'Puedes usar múltiples `setTimeout` para hacer pasos escalonados o crear animaciones básicas sin librerías.',
    code: `setTimeout(() => console.log("Paso 1"), 1000);
setTimeout(() => console.log("Paso 2"), 2000);
setTimeout(() => console.log("Paso 3"), 3000);`,
    tip: 'Ideal para efectos escalonados o tutoriales paso a paso.',
    extra: '🎓 Makoto aclara: “El tiempo correcto hace que todo encaje.”'
  },
]