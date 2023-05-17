const selet_in = document.querySelector("input");
const selet_select = document.querySelector("select");

function add() {
  let tarefa = document.createElement("option");
  if (selet_in.value.length == 0) {
    alert("Insira uma Tarefa válida");
  } else {
    tarefa.text = "•" + selet_in.value;
    tarefa.id = tarefa.text;
    selet_select.appendChild(tarefa);
    selet_in.focus();
    selet_in.value = "";
  }
}
selet_in.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    add();
  }
});
function remove() {
  let select = selet_select.value;
  let selet_option = document.getElementById(select.split("✅")[0]);
  selet_select.removeChild(selet_option);
}
function checked() {
  let selet_option = document.getElementById(selet_select.value);
  selet_option.text += "✅";
}
