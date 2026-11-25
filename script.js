"use strict";

const liste = document.getElementById("liste");
const bouton = document.getElementById("btn-romant");
const bouton2 = document.getElementById("btn-retour");


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
ancienneListe = listeDeLivres;

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
     bouton2.addEventListener("click", function () {
      afficherLivres(ancienneListe);
    });
  });
