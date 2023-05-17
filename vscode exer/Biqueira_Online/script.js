const select = document.querySelector("select");
const result = document.getElementById("result");
var lista = {};
var value_all = 0;
function add() {
  let label = select[select.selectedIndex].parentNode.label;
  value_all += Number(select[select.selectedIndex].value);
  if (!lista[label]) {
    let div = document.createElement("div");
    div.id = label;
    div.innerText = `1x ${label}`;
    result.appendChild(div);
    lista[label] = 1;
  } else {
    lista[label]++;
    let div = document.getElementById(label);
    div.innerHTML = `${lista[label]}x ${label}`;
  }
  var value_result = document.getElementById("value_all");
  value_result.innerHTML = `Valor Total da Compra : R$${value_all}`;
}
