const player = [];
const boasEscolhas = ["bitcoin", "curso de ingles", "coda"];
const escolhas = document.querySelectorAll("button");
let pag = 0;
const botoes = document.getElementById("ultima");

function verificar_valor(lista) {
  let valor = true;
  lista.forEach((obj) => {
    if (obj.valor == false) {
      valor = false;
    }
  });
  return valor;
}

function info_check(info) {
  let verif;
  info === boasEscolhas[pag] ? (verif = true) : (verif = false);
  player.push({ escolha: info, valor: verif });
  pag++;
  console.log(player);
}

function end_history() {
  if (verificar_valor(player)) {
    botoes.innerHTML = "Desde pequeno ...........";
  } else {
    botoes.innerHTML = "Se só fez merda .............";
  }
}
