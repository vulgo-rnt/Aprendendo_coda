const player = [];
const boasEscolhas = ["bitcoin", "curso de ingles", "coda"];
const textosPag = [
  ["teste1", "teste1", "teste1"],
  ["teste2", "teste2", "teste2"],
];
const escolhas = document.querySelectorAll("button");
let pag = 0;

function info_check(info) {
  let verif;
  info === boasEscolhas[pag] ? (verif = true) : (verif = false);
  player.push({ escolha: info, valor: verif });
}

function nextPag() {
  if (pag > 1) {
    escolhe;
  }

  for (let cont = 0; cont <= 2; cont++) {
    escolhas[cont].innerText = textosPag[pag][cont];
  }
  pag++;
}
