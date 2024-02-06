// Función para refrescar el navegador
function refrescar() {
  location.reload();
}


// Función para Buscar
function busca() {
  let searchTerm = prompt("Introduce término de búsqueda:");
  let foundItems = allData.filter(item => item.includes(searchTerm));
  alert("Resultadps de búsqueda: " + foundItems.join(", "));
}

function orderList(orderType) {
  const selectedJson = document.getElementById("jsonSelector").value;
  let listaOrdenada;

  switch (selectedJson) {
      case "pokemon":
          listaOrdenada = [...listaPokemons];
          break;
      case "municipios":
          listaOrdenada = [...listaMunicipios];
          break;
      case "movies":
          listaOrdenada = [...listaMovies];
          break; 
      case "meteoritos":
          listaOrdenada = [...listaMeteoritos];
          break;
      default:
          return;
  }

  if (orderType === 'asc') {
       orderAscend(listaOrdenada);
  } else {
       orderDescend(listaOrdenada);
  }

  printTabla(listaOrdenada, getHeaders(selectedJson));
}

function getHeaders(selectedJson) {
  switch (selectedJson) {
    case "pokemon":
      return headersPokemons;
    case "municipios":
      return headersMunicipios;
    case "movies":
      return headersMovies;
    case "meteoritos":
      return headersMeteoritos;
    default:
      return []; // O manejar de otra forma
  }
}

function searchList(palabra){
  palabra.toLowerCase
  const selectedJson = document.getElementById("jsonSelector").value;
  let newLista=[]
  switch (selectedJson) {
      case "pokemon":
          newLista = listaPokemons.filter(pokemons => pokemons[1].toLowerCase().includes(palabra));
          printTabla(newLista, headersPokemons)
          break;
      case "municipios":
          newLista = listaMunicipios.filter(municipios => municipios[1].toLowerCase().includes(palabra));
          printTabla(newLista,headersMunicipios);
          break;
      case "movies":
          newLista = listaMovies.filter(movies => movies[0].toLowerCase().includes(palabra));
          printTabla(newLista,headersMovies);
          break;
      case "meteoritos":
          newLista = listaMeteoritos.filter(meteoritos => meteoritos[1].toLowerCase().includes(palabra));
          printTabla(newLista,headersMeteoritos);
          break;
  }
}



