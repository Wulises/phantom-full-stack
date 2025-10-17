export const fetchApiJs = [
  {
    title: '¿Qué es la Fetch API?',
    description:
      'La Fetch API es una interfaz moderna para hacer peticiones HTTP desde el navegador. Reemplaza métodos antiguos como `XMLHttpRequest`, y se basa en promesas.',
    code: `fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(resp => resp.json())
  .then(data => console.log(data))
  .catch(err => console.error("Error:", err));`,
    tip: 'fetch devuelve una promesa que resuelve un objeto Response; debes llamar `json()` para obtener los datos reales.',
    extra: '🕰️ Haru reflexiona: “Una petición es como un puente: debe ser robusto y rápido.”'
  },
  {
    title: 'Métodos HTTP comunes',
    description:
      'GET (obtener datos), POST (crear), PUT/PATCH (actualizar), DELETE (eliminar). Con fetch puedes usar cualquiera de estos métodos.',
    code: `fetch("https://api.ejemplo.com/items", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ nombre: "Haru", edad: 27 })
})
  .then(resp => resp.json())
  .then(data => console.log(data));`,
    tip: 'Siempre que envíes datos, especifica `Content-Type` y convierte tu objeto con `JSON.stringify`.',
    extra: '🎭 Sumire susurra: “Cada método tiene su propósito, no uses POST solo porque sí.”'
  },
  {
    title: 'Headers, query params y cuerpos',
    description:
      'Puedes personalizar las peticiones con headers, parámetros de consulta (query strings) y cuerpos JSON o form data.',
    code: `const url = new URL("https://api.ejemplo.com/items");
url.searchParams.append("page", "2");
url.searchParams.append("limit", "10");

fetch(url.toString(), {
  headers: {
    "Accept": "application/json",
    "Authorization": "Bearer mi-token"
  }
})
  .then(resp => resp.json())
  .then(data => console.log(data));`,
    tip: 'URLSearchParams es útil para construir query strings de forma segura.',
    extra: '💡 Makoto aclara: “Los headers son acuerdos silenciosos entre cliente y servidor.”'
  },
  {
    title: 'Manejo de errores con fetch',
    description:
      'fetch no rechaza por código HTTP malo (como 404); necesitas verificar `resp.ok` y lanzar error manualmente.',
    code: `fetch("https://api.ejemplo.com/404")
  .then(resp => {
    if (!resp.ok) throw new Error("HTTP error " + resp.status);
    return resp.json();
  })
  .then(data => console.log(data))
  .catch(err => console.error("Falló:", err.message));`,
    tip: 'Verifica `resp.ok` antes de consumir JSON para detectar errores HTTP explícitamente.',
    extra: '💃 Kasumi dice: “Un servidor puede responder… pero eso no siempre significa éxito.”'
  },
  {
    title: 'Usar fetch dentro de async/await',
    description:
      'Puedes “esperar” la respuesta de fetch dentro de una función `async`, lo que hace el código más limpio.',
    code: `async function getPost() {
  try {
    const resp = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    if (!resp.ok) throw new Error("HTTP error " + resp.status);
    const post = await resp.json();
    console.log(post);
  } catch (err) {
    console.error("Error:", err);
  }
}

getPost();`,
    tip: 'Dentro de funciones `async`, usa `try / catch` para manejar errores HTTP y de red.',
    extra: '🌸 Haru analiza: “Pedir es fácil, recibir lo inesperado es el reto.”'
  },
  {
    title: 'Ejemplo práctico – CRUD con fetch',
    description:
      'Una demostración real de operaciones CRUD (Crear, Leer, Actualizar, Eliminar) usando Fetch API.',
    code: `const base = "https://jsonplaceholder.typicode.com/posts";

// Leer (GET)
fetch(base + "/1")
  .then(resp => resp.json())
  .then(data => console.log("Leer:", data));

// Crear (POST)
fetch(base, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ title: "Hola", body: "Contenido", userId: 1 })
})
  .then(resp => resp.json())
  .then(data => console.log("Creado:", data));

// Actualizar (PUT)
fetch(base + "/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ id: 1, title: "Nuevo título", body: "Nuevo contenido", userId: 1 })
})
  .then(resp => resp.json())
  .then(data => console.log("Actualizado:", data));

// Eliminar (DELETE)
fetch(base + "/1", {
  method: "DELETE"
})
  .then(resp => {
    if (!resp.ok) throw new Error("Error al eliminar");
    console.log("Eliminado");
  })
  .catch(err => console.error("Error:", err.message));`,
    tip: 'Para operaciones de escritura (POST, PUT, DELETE), muchas APIs requieren autenticación y validaciones.',
    extra: '🎯 Haru te recuerda: “Crear y borrar son actos poderosos. Usa con intención.”'
  }
]