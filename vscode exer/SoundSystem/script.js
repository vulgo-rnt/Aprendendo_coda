const button = document.querySelectorAll("button");
var cont = 0;

button.forEach((botao) => {
  botao.addEventListener("click", start);
  botao.id = cont;
  cont++;
});

function start() {}
