window.addEventListener("load", init);

const kepLista = [
  "kepek/DSC7365.jpg",
  "kepek/DSC7025.jpg",
  "kepek/DSC7444.jpg",
];
let aktualisValt = 0;

function init() {
  kepekKiiratasa();
  Kattintasok();
}

function kepekKiiratasa() {
  const articleKepek = document.querySelector("article");

  for (let index = 0; index < kepLista.length; index++) {
    articleKepek.innerHTML += `<div class="kisKepek"><img src="${kepLista[index]}" alt="kep"></div>`;
  }

  const nagyKep = document.querySelector("section .nagykep img");
  const kisKepek = document.querySelectorAll(".kisKepek img");

  for (let index = 0; index < kisKepek.length; index++) {
    kisKepek[index].addEventListener("click", () => {
      //console.log(event.target.src)
      nagyKep.src = event.target.src;
    });
  }
}

function Kattintasok() {
  jobbKattint();  
  const nagyKep = document.querySelector("section .nagykep img");
  balKattintas();

}

function jobbKattint() {
  const jobbGomb = document.querySelector("section .jobb");

  jobbGomb.addEventListener("click", () => {
    const nagyKep = document.querySelector("section .nagykep img");
    //console.log(nagyKep)
    console.log("Működik");
    aktualisValt += 1;
    //console.log(aktualisValt);
    if (aktualisValt >= kepLista.length - 1 ) {
        aktualisValt = 0;
    }
    nagyKep.src = kepLista[aktualisValt];
    
  });
}
 function  balKattintas() {
    const balGomb = document.querySelector("section .bal");

    balGomb.addEventListener("click", () => {
    const nagyKep = document.querySelector("section .nagykep img");   
    
    //aktualisValt -= 1;
    
    if (aktualisValt >= kepLista.length - 1 ) {
        aktualisValt = 0;
    }
    nagyKep.src = kepLista[aktualisValt];
    
  });
 }