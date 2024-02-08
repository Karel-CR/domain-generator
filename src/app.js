window.onload = function() {
  
  function createDomainHack(pronoun, adj, noun, domain, i, j, k, l) {
    let completeDomainHack =
      pronoun[i] + adj[j] + noun[k].slice(0, -2) + "." + domain[l];
    createParagraphElementInDOM(completeDomainHack);
  }

  function createDomain(pronoun, adj, noun, domain, i, j, k, l) {
    let completeDomain = pronoun[i] + adj[j] + noun[k] + "." + domain[l];
    createParagraphElementInDOM(completeDomain);
  }

  function createParagraphElementInDOM(completeDomain) {
    const P_ELEMENT = document.createElement("p");
    P_ELEMENT.textContent = completeDomain;
    DOMAIN_ELEMENT.appendChild(P_ELEMENT);
  }

  const DOMAIN_ELEMENT = document.getElementById("dominio");
  const PRONOUN = ["the", "our"];
  const ADJ = ["great", "big"];
  const NOUN = ["jogger", "racoon"];
  const DOMAIN = ["com", "es", "er"];

  for (let i = 0; i < PRONOUN.length; i++) {
    for (let j = 0; j < ADJ.length; j++) {
      for (let k = 0; k < NOUN.length; k++) {
        for (let l = 0; l < DOMAIN.length; l++) {
          
          (NOUN[k].slice(-2) === DOMAIN[l]) ? createDomainHack(PRONOUN, ADJ, NOUN, DOMAIN, i, j, k, l) : createDomain(PRONOUN, ADJ, NOUN, DOMAIN, i, j, k, l);
        
        }
      }
    }
  }
};
