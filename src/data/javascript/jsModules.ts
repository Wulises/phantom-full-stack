export const jsModulesJs = [
  {
    title: '¿Qué son los módulos en JavaScript?',
    description:
      'Los módulos permiten dividir el código en archivos independientes con su propio scope, importando y exportando lo necesario. Ayudan a la organización, reutilización y mantenimiento del código.',
    code: `// archivo math.js
export function sumar(a, b) {
  return a + b;
}
export const PI = 3.1416;

// archivo main.js
import { sumar, PI } from './math.js';
console.log(sumar(2, 3)); // 5
console.log(PI); // 3.1416`,
    tip: 'Utiliza `export` para compartir cosas, y `import` para traerlas. Solo exporta lo necesario.',
    extra: '🌸 Haru comenta: “Cada módulo es como una carta: tiene lo que necesita revelar.”'
  },
  {
    title: 'export default vs named exports',
    description:
      'Un archivo puede tener múltiples “named exports” y un único “default export”. Importarlos es ligeramente diferente.',
    code: `// archivo utils.js
export function resta(a, b) { return a - b; }
export default function multiplicar(a, b) { return a * b; }

// archivo main.js
import mult, { resta } from './utils.js';
console.log(mult(3, 4)); // 12
console.log(resta(10, 5)); // 5`,
    tip: 'Si tu módulo solo exporta una cosa principal, usar `default` es conveniente. Si exportas varias funciones, usa named exports.',
    extra: '🎭 Sumire susurra: “Default es principal, named son los detalles.”'
  },
  {
    title: 'Re-exportar desde un módulo central',
    description:
      'Puedes crear un “index.js/ts” que re-exporte funciones de varios módulos para importarlos desde un solo punto.',
    code: `// archivo shapes/circle.js
export function area(r) {
  return Math.PI * r * r;
}

// archivo shapes/index.js
export * from './circle.js';

// archivo main.js
import { area } from './shapes';
console.log(area(2));`,
    tip: 'El patrón “barrel” ayuda a importar módulos más limpiamente desde un punto central.',
    extra: '💡 Makoto aclara: “Re-exportar es como tener un pasillo central de bibliotecas.”'
  },
  {
    title: 'Import dinámico (lazy loading)',
    description:
      'Puedes importar módulos en tiempo de ejecución cuando los necesitas, con `import(...)`, lo que permite cargar menos al inicio.',
    code: `button.addEventListener('click', async () => {
  const module = await import('./heavyModule.js');
  module.heavyFunction();
});`,
    tip: 'Usa carga dinámica para código que no necesita estar cargado al inicio (como componentes raros).',
    extra: '🌃 Haru piensa: “Cargar solo lo necesario le da ligereza al sistema.”'
  },
  {
    title: 'Módulos en Node.js / CommonJS vs ES Modules',
    description:
      'En Node.js históricamente se usaron `require` / `module.exports` (CommonJS). Ahora Node soporta ES Modules (`import` / `export`) y usar `"type": "module"` en package.json.',
    code: `// CommonJS
const fs = require('fs');
module.exports = { readFile };

// ES Modules (Node moderno)
import fs from 'fs';
export function readFile(path) {
  return fs.promises.readFile(path, 'utf-8');
}`,
    tip: 'Cuando trabajes fullstack, asegúrate de la compatibilidad entre módulos del servidor y cliente.',
    extra: '💃 Kasumi dice: “El cambio de sistema requiere sincronía entre entornos.”'
  },
  {
    title: 'Alias de rutas / path aliases',
    description:
      'Para importar módulos con rutas más limpias (evitando `../../../`), puedes configurar alias o paths en `tsconfig.json` o bundler como webpack / Vite / Next.',
    code: `// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@utils/*": ["src/utils/*"]
    }
  }
}

// en código
import { x } from '@utils/x';`,
    tip: 'Los alias mejoran la legibilidad, pero configúralos bien para servidor y cliente.',
    extra: '🎯 Haru te recuerda: “Caminar rutas limpias es caminar con elegancia.”'
  }
]