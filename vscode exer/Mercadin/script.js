function estily() {
  slc("#ct").innerText = "p";
  slc("#ct").style =
    "background-color: white;border-radius: 30px;margin-left: 30px;padding: 15px;";
}
function slc(a) {
  let seleciona = document.querySelector(a);
  return seleciona;
}
function add_img(url) {
  let img = document.createElement("img");
  img.src = url;
  img.style.width = "250px";
  img.style.borderRadius = "30px";
  slc("#out").appendChild(img);
}
function verif() {
  if (slc("select").value == "p1") {
    slc("#out").innerHTML = "";
    if (slc("#min").checked) {
      add_img("cadeira/cadeira_barata.jpg");
    } else if (slc("#med").checked) {
      add_img("cadeira/cadeira.jpg");
    } else {
      add_img("cadeira/cadeira_cara.jpg");
    }
  }
  if (slc("select").value == "p2") {
    slc("#out").innerHTML = "";
    if (slc("#min").checked) {
      add_img("mouse/mouse_barato.jpg");
    } else if (slc("#med").checked) {
      add_img("mouse/mouse.jpg");
    } else {
      add_img("mouse/mouse_caro.jpg");
    }
  }
  if (slc("select").value == "p3") {
    slc("#out").innerHTML = "";
    if (slc("#min").checked) {
      add_img("teclado/teclado_barato.jpg");
    } else if (slc("#med").checked) {
      add_img("teclado/teclado.jpg");
    } else {
      add_img("teclado/teclado_caro.jpg");
    }
  }
}
