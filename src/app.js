window.onload = function() {
  //declaramos arrays
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domain = "com";
  //Llamamos a la función correspondiente (Quiero que la funcion generateDomainCombinations() se cargué lo antes posible)
  function generateDomainCombinations(pronoun, adj, noun, domain) {
    let auxArray = [""];
    let errorArray = [];
    pronoun.forEach(element => {
      if (auxArray[element] != pronoun) {
        auxArray.push(pronoun[element]);
      }
      if (auxArray[element] != adj) {
        auxArray[element + 1].push(adj[element]);
        if (auxArray[element] != noun) {
          auxArray[element + 2].push(noun[element]);
        }
        if (auxArray[element] != domain) {
          auxArray[element + 3].push(domain[element]);
        } else {
          errorArray.push(1);
        }
        return auxArray;
      }
    });
    console.log;
    let arrayFinal = generateDomainCombinations(pronoun, adj, noun, domain);
    var dominioElement = document.getElementById("dominio");
    dominioElement.textContent = arrayFinal;
  }
  //Declaramos un Array para contener los números aleatorios
  // Concatenamos cadenas
  // Imprimimos en el index
};
