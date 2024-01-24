// Función para refrescar el navegador
function refrescar() {
  location.reload();
}

// Función que ordena de manera ascendente
function orderListAsc(array) {
  return array.slice().sort((a, b) => a - b);
}

// Función que ordena de manera descendente
function orderListDesc(array) {
  return array.slice().sort((a, b) => b - a);
}

// Función para Buscar
function busca(array, termino) {
  const regex = new RegExp(termino, 'i'); // Búsqueda sin distinguir mayúsculas y minúsculas
  return array.filter(item => regex.test(item));
}

// Función para calcular la media
function mitjana(array) {
  const ultimoBloque = array[array.length - 1];
  const valoresNumericos = ultimoBloque.filter(valor => !isNaN(valor));

  if (valoresNumericos.length === 0) {
    return null; // o undefined, dependiendo de tu preferencia
  }

  const suma = valoresNumericos.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
  const media = suma / valoresNumericos.length;
  return media;
}

// Función para ordenar ascendente o descendente
function orderList(orden) {
  if (!dades) {
    console.error("El array 'dades' no está definido.");
    return [];
  }

  if (orden === "asc") {
    return dades.slice().sort((a, b) => a.Pokemon.localeCompare(b.Pokemon));
  } else if (orden === "desc") {
    return dades.slice().sort((a, b) => b.Pokemon.localeCompare(a.Pokemon));
  } else {
    console.error("Parámetro no válido. Utiliza 'asc' o 'desc'.");
    return dades.slice();
  }
}

// Función para buscar la posición de un elemento en el array
function searchList(array) {
  // Solicitar al usuario el elemento a buscar
  const elementoBuscado = prompt("Introduce el elemento que quieres buscar:");

  // Buscar la posición del elemento en el array
  const posicion = array.indexOf(elementoBuscado);

  if (posicion !== -1) {
    // Si el elemento se encuentra en el array
    alert(`El elemento "${elementoBuscado}" se encuentra en la posición ${posicion}.`);
    return posicion;
  } else {
    // Si el elemento no se encuentra en el array
    alert(`El elemento "${elementoBuscado}" no se encuentra en el array.`);
    return -1;
  }
}

// Función para calcular la media de un array y mostrar el resultado con dos decimales
function calcMitjana(array) {
  // Verificar si el array está vacío
  if (array.length === 0) {
    alert("El array está vacío. No se puede calcular la media.");
    return;
  }

  // Calcular la suma de los valores
  const suma = array.reduce((acumulador, valor) => acumulador + valor, 0);

  // Calcular la media
  const media = suma / array.length;

  // Utilizar toFixed para limitar a dos decimales
  const mediaConDosDecimales = media.toFixed(2);

  // Mostrar el resultado con un alert
  alert(`La media es: ${mediaConDosDecimales}`);
}

// Función para imprimir una tabla en el div con el id 'resultat'
function printList(arrayBidimensional) {
  // Obtener el div resultado
  const divResultado = document.getElementById('resultat');

  // Crear una tabla
  const tabla = document.createElement('table');
  tabla.border = '1';

  // Iterar sobre el array bidimensional
  arrayBidimensional.forEach((fila, indexFila) => {
    const tr = document.createElement('tr');

    fila.forEach((elemento, indexColumna) => {
      const td = document.createElement('td');
      td.textContent = elemento;
      tr.appendChild(td);
    });

    tabla.appendChild(tr);
  });

  // Limpiar el contenido anterior del div resultado
  divResultado.innerHTML = '';

  // Adjuntar la tabla al div resultado
  divResultado.appendChild(tabla);
}

// Ejemplo de uso con un array bidimensional
const datos = [
  ["Bulbasaur", "imagen_bulbasaur.jpg", "23 kg"],
  ["Charmander", "imagen_charmander.jpg", "18 kg"],
  ["Squirtle", "imagen_squirtle.jpg", "20 kg"]
];
