// src/data/javascript/operatorsJs.ts

export const operatorsJs = [
  {
    title: 'Aritméticos',
    description:
      'Operadores para realizar cálculos: +, -, *, /, %, ** (potencia), ++, --',
    code: `let a = 5;\nlet b = 2;\nlet suma     = a +  b;  // 7\nlet potencia = a ** b;  // 25\nlet resto    = a %  b;  // 1`,
    tip: 'Usa paréntesis para controlar precedencia cuando mezcles varios operadores.',
    extra: 'Makoto dice: “La aritmética básica es el primer paso de todo código lógico.”'
  },
  {
    title: 'Asignación',
    description:
      'Operadores que asignan valores: =, +=, -=, *=, /=, %=, **=',
    code: `let x = 10;\nx += 5; // x = 15\nx *= 2; // x = 30`,
    tip: 'Estos combinan operación + asignación, simplificando el código.',
    extra: 'Haru comenta: “Asignar con estilo = más fácil de leer y mantener.”'
  },
  {
    title: 'Comparación',
    description:
      'Comparan valores: ==, ===, !=, !==, >, <, >=, <=',
    code: `5 ==  '5'; // true  (coerción)\n5 === '5'; // false (sin coerción)\n3 > 2;     // true`,
    tip: 'Prefiere === y !== para evitar coerciones extrañas.',
    extra: 'Kasumi advierte: “Confía en === cuando quieras seguridad.”'
  },
  {
    title: 'Lógicos',
    description:
      'Operadores booleanos: && (AND), || (OR), ! (NOT)',
    code: `true && false; // false\ntrue || false; // true\n!true;         // false`,
    tip: 'Se usan mucho para combinar condiciones.',
    extra: 'Sumire sonríe: “Lo lógico nos guía cuando todo parece caos.”'
  },
  {
    title: 'Ternario',
    description:
      'Operador inline para condicional: condición ? expr1 : expr2',
    code: `let edad    = 18;\nlet mensaje = edad >= 18 ? "Mayor de edad" : "Menor de edad";`,
    tip: 'Úsalo para condiciones simples más limpias que if/else.',
    extra: 'Makoto murmura: “Una expresión, dos caminos, tu decisión en uno solo.”'
  },
  {
    title: 'Nullish coalescing y OR lógico',
    description:
      'Operadores para valores por defecto: ?? y ||',
    code: `let valor = null ?? 'default'; // "default"\nlet otro  = '' || 'fallback';  // "fallback"`,
    tip: '?? sólo sustituye si es null o undefined; || lo hace si el valor es falsy.',
    extra: 'Haru explica: “Elige el valor que importa cuando lo otro es nada o vacío.”'
  }
]
