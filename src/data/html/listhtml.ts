export const listsHTML = [

    {
        title: 'Lista ordenada (<ol>)',
        description: 'Se usa para representar una secuencia de elementos con orden numérico.',
        code: `<ol>
  <li> Levantarse </li>
  <li> Saludar a la familia </li>
  <li> Estudiar HTML </li>
</ol>`,
        tip: 'El navegador numera automáticamente cada elemento. Puedes usar el atributo "type" para cambiar el estilo del número.'
    },

    {
        title: 'Lista no ordenada (<ul>)',
        description: 'Representa una lista de elementos sin un orden específico, usando viñetas.',
        code: `<ul>
  <li> HTML </li>
  <li> CSS </li>
  <li> JavaScript </li>
</ul>`,
        tip: 'Ideal para listas de navegación o elementos sin jerarquía.'
    },

    {
        title: 'Ítems de lista (<li>)',
        description: 'Cada elemento dentro de una lista, ya sea ordenada o no ordenada, se define con <li>.',
        code: `<ul>
  <li> Makoto </li>
  <li> Haru </li>
  <li> Sumire </li>
</ul>`,
        tip: '<li> no puede existir por sí solo. Siempre debe estar dentro de una lista (<ul> o <ol>).'
    },

    {
        title: 'Lista de descripción (<dl>, <dt>, <dd>)',
        description: 'Se usa para pares de términos y descripciones, común en glosarios o definiciones.',
        code: `<dl>
  <dt> HTML </dt>
  <dd> Lenguaje de marcado para la web </dd>

  <dt> CSS </dt>
  <dd> Estilos para páginas web </dd>
</dl>`,
        tip: 'Útil para representar información tipo glosario o definiciones en páginas técnicas.'
    }

]