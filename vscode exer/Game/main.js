const player = [];
const boasEscolhas = ["bitcoin", "curso de ingles", "coda"];
const todasEscolhas = [
  ["fuma maconha", "curso de ingles", "namorar"],
  ["coda", "bebidas mulheres", "lol games"],
  ["", "", ""],
];
const textosPag = [
  ["teste1", "teste1", "teste1"],
  ["teste2", "teste2", "teste2"],
  ["", "", ""],
];
const escolhas = document.querySelectorAll("button");
let pag = 0;

function verificar_valor(lista) {
  let valor = true;
  lista.forEach((obj) => {
    if (obj.valor === false) {
      valor = false;
    }
  });
  return valor;
}

function info_check(info) {
  let verif;
  info === boasEscolhas[pag] ? (verif = true) : (verif = false);
  player.push({ escolha: info, valor: verif });
}

function nextPag() {
  if (pag > 1) {
    if (verificar_valor(player)) {
      escolhas[1].innerText = "final teste";
    } else {
      escolhas[0].innerText = "final teste";
    }
  }

  for (let cont = 0; cont < 3; cont++) {
    console.log(cont);
    escolhas[cont].innerText = textosPag[pag][cont];
    for (let c = 0; c <= 2; c++) console.log(todasEscolhas[cont][c]);
  }
  pag++;
}
