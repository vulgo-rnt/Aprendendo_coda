function apagar() {
  var sele = document.querySelector("div#mostrador");
  sele.innerText = "";
}
function addButt(id) {
  var selec = document.querySelector("div#mostrador");
  selec.innerText += id;
}
function resultado() {
  var selecDiv = document.querySelector("div#mostrador");
  var resultado = eval(selecDiv.innerText);
  selecDiv.innerText = resultado;
}
