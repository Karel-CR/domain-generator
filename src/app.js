window.onload = function() {
  //declaramos arrays
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domain = ["com","es"];
  //Accedemos al span por id
  let elementDomain = document.getElementById("dominio");
  //Control. Verificamos si el elemento se ha encontrado
  if (elementDomain) {
    //Aquí generaremos todas las opciones posibles, para ello haremos un bucle anidado
    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
          for (let l = 0; l < domain.length; l++) {
            //Generamos la cadena de texto.
            let completeDomain = pronoun[i] + adj[j] + noun[k]+'.' + domain[l];
            //Por cada "completeDomain" crearemos una etiqueta <p> en el html, de esta manera mostraremos los dominios uno por uno
            let p = document.createElement('p');
            p.textContent = completeDomain;
            elementDomain.appendChild(p);
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
