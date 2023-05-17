const selet_select = document.querySelector("select");
const selet_result = document.getElementById("result");
var value_all = 0;
var maconha = 0;
var po = 0;
var k9 = 0;
var lsd = 0;
var bala = 0;
function add() {
  value_all += Number(selet_select.value);
  var selet_label = selet_select[selet_select.selectedIndex].parentNode.label;
  if (maconha == 0 && selet_label == "Maconha") {
    let div = document.createElement("div");
    div.id = selet_label;
    div.text = "1x Maconha";
    selet_result.appendChild(div);
    maconha++;
  }
  if (selet_label == "Maconha" && maconha > 0) {
    let div = document.getElementById(selet_label);
    div.innerText = `${maconha}X Maconha`;
    maconha++;
  }
  if (po == 0 && selet_label == "Pó") {
    let div = document.createElement("div");
    div.id = selet_label;
    div.text = "1x Pó";
    selet_result.appendChild(div);
    div.innerHTML = "1x Pó";
    po++;
  }
  if (selet_label == "Pó" && po > 0) {
    let div = document.getElementById(selet_label);
    div.innerHTML = `${po}x Pó`;
    po++;
  }
  if (lsd == 0 && selet_label == "Lsd") {
    let div = document.createElement("div");
    div.id = selet_label;
    div.text = "1x Lsd";
    selet_result.appendChild(div);
    lsd++;
  }
  if (selet_label == "Lsd" && lsd > 0) {
    let div = document.getElementById(selet_label);
    div.innerHTML = `${lsd}x Lsd`;
    lsd++;
  }
  if (bala == 0 && selet_label == "Bala") {
    let div = document.createElement("div");
    div.id = selet_label;
    div.text = "1x Bala";
    selet_result.appendChild(div);
    bala++;
  }
  if (selet_label == "Bala" && bala > 0) {
    let div = document.getElementById(selet_label);
    div.innerHTML = `${bala}x Bala`;
    bala++;
  }
  if (k9 == 0 && selet_label == "K9") {
    let div = document.createElement("div");
    div.id = selet_label;
    div.text = "1x K9";
    selet_result.appendChild(div);
    k9++;
  }
  if (selet_label == "K9" && k9 > 0) {
    let div = document.getElementById(selet_label);
    div.innerHTML = `${k9}x K9`;
    k9++;
  }
}
