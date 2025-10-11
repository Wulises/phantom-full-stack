// src/data/javascript/dataTypesCoercion.ts

export const dataTypesCoercion = [
  {
    title: 'Tipos de datos primitivos',
    description:
      'Incluyen string, number, boolean, null, undefined, symbol y bigint.',
    code: `let nombre = "Haru"; // string\nlet edad = 25; // number\nlet activo = true; // boolean\nlet vacio = null; // null\nlet nada; // undefined`,
    tip: 'Los primitivos se comparan por valor, no por referencia.',
    extra: 'Sumire susurra: “Todo empieza por entender los tipos más básicos.”'
  },
  {
    title: 'Tipos de datos por referencia',
    description:
      'Objetos y arrays se almacenan y comparan por referencia en memoria.',
    code: `let persona = { nombre: "Kasumi" };\nlet lista = [1, 2, 3];`,
    tip: 'Modificar un objeto afecta todas las referencias a él.',
    extra: 'Makoto observa: “Entender referencias evita bugs misteriosos.”'
  },
  {
    title: 'Coerción implícita',
    description:
      'Es cuando JavaScript convierte un tipo a otro automáticamente.',
    code: `let resultado = "5" + 2; // "52"\nlet resta = "5" - 2; // 3`,
    tip: 'El operador + concatena si hay strings. Los demás fuerzan conversión a number.',
    extra: 'Haru dice: “JavaScript a veces intenta ayudarte… a su manera.”'
  },
  {
    title: 'Coerción explícita',
    description:
      'Conversión forzada usando funciones como Number(), String(), Boolean().',
    code: `Number("42"); // 42\nString(100); // "100"\nBoolean(0); // false`,
    tip: 'Usa coerción explícita cuando quieras tener el control.',
    extra: 'Kasumi exclama: “¡Convierte tú mismo antes de que lo haga JS por ti!”'
  }
]
