"use strict";

const liste = document.getElementById("liste");
const bouton = document.getElementById("btn-romant");

function afficherLivres(listeDeLivres) {
  liste.innerHTML = ""; 
  for (const livre of listeDeLivres) {
    const carte = document.createElement("div");
    carte.className = "card";
    carte.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">${livre.titre}</h5>
        <p class="card-text">${livre.annee} · ${livre.genre}</p>
      </div>
    `;
    liste.appendChild(carte);
  }
}

fetch("livres.json")
  .then(function (reponse) {
    return reponse.json();
  })
  .then(function (Livres) {
    console.table(Livres);

    afficherLivres(Livres);

    const titres = Livres.map(function (livre) {
      return livre.titre;
    });
    console.log(titres);

    const romant = Livres.filter(function (livre) {
      return livre.genre == "Roman";
    });
    console.log(romant.length);

    bouton.addEventListener("click", function () {
      afficherLivres(romant);
    });
  });
