export const specificityCSS = [
    
    {
        title: 'Especificidad en CSS',
        description: 'Determina qué regla de estilo se aplica cuando múltiples coinciden con el mismo elemento.',
        code: `/* Menor especificidad: selector de tipo */
p {
    color: purple;
}

/* Más específica: selector de clase */
.titulo {
    color: blue;
}

/* Más específica aún: selector de ID */
#tituloPrincipal {
    color: red;
}`,
        tip: 'Entre más específico es un selector, mayor prioridad tiene. Pero evita usar demasiados IDs.'
    },
    {
        title: 'Cómo funciona la cascada',
        description: 'La cascada define el orden en que se aplican los estilos cuando hay conflictos.',
        code: `/* Si hay conflicto, gana el que esté más abajo */
p {
    color: red;
}

p {
    color: blue;
}`,
        tip: 'El orden importa. El estilo que aparece más abajo en el CSS sobrescribe si tiene igual especificidad.'
    },
    {
        title: 'Importancia de !important',
        description: 'Forza una regla a aplicarse sin importar la especificidad o la cascada.',
        code: `p {
    color: red !important;
}

p {
    color: blue;
}`,
        tip: 'Evita usar !important a menos que sea estrictamente necesario. Puede hacer el código difícil de mantener.'
    },
    {
        title: 'Herencia en CSS',
        description: 'Algunas propiedades se heredan automáticamente desde elementos padres.',
        code: `body {
    font-family: Arial;
}

p {
    /* Hereda la fuente del body */
    color: black;
}`,
        tip: 'No todas las propiedades se heredan. Puedes forzar herencia con `inherit`.'
    }

]
