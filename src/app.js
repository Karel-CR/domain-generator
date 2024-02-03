window.onload = function() {
  //declaramos arrays
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domain = ["com", "es", "er"];
  //Accedemos al span por id
  let elementDomain = document.getElementById("dominio");
  //Control. Verificamos si el elemento se ha encontrado
  if (elementDomain) {
    //Aquí generaremos todas las opciones posibles, para ello haremos un bucle anidado
    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
          for (let l = 0; l < domain.length; l++) {
            //Creamos una condicion logica para implementar la funcionalidad de hakear el dominio
            //Aqui la condicion de entrada es la siguiente: si las dos ultimas letras del noun son iguales a un dominio entra al siguiente codigo:
            if (noun[k].slice(-2) === "er") {
              //declaramos la variable del dominio hackeado, en la cual cortamos los ultimos
              let completeDomainHack =
                pronoun[i] + adj[j] + noun[k].slice(0, -2) + "." + domain[l];
              let p = document.createElement("p");
              p.textContent = completeDomainHack;
              elementDomain.appendChild(p);
            }
            if (domain != "er") {
              //Generamos la cadena de texto
              let completeDomain =
                pronoun[i] + adj[j] + noun[k] + "." + domain[l];
              //Por cada "completeDomain" crearemos una etiqueta <p> en el html, de esta manera mostraremos los dominios uno por uno
              let p = document.createElement("p");
              p.textContent = completeDomain;
              elementDomain.appendChild(p);
            }
          }
        }
      }
    }
  } else {
    //Según la documentación de EsLint en estos casos si esta permitido
    // eslint-disable-next-line no-console
    console.log('No se encontró el elemento con el ID "dominio".');
  }
};
