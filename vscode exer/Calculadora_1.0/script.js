const selec = document.querySelector("#mostrador");
function apagar() {
  sele.innerText = "";
}
function addButt(id) {
  selec.innerText += id;
  selec.scrollTo({ left: selec.scrollWidth });
}
function resultado() {
  let resultado = eval(selec.innerText);
  selec.innerText = resultado;
}
