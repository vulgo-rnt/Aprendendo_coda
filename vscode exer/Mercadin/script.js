function estily(a) {
  slc("#ct").innerHTML += a;
  slc("#ct").style =
    "background-color: white;border-radius: 30px;margin-left: 30px;line-height: 20px;padding: 20px ";
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
    slc("#ct").innerHTML = "";
    if (slc("#min").checked) {
      estily("<strong>Preço: R$ 149,99<strong><br>");
      add_img("cadeira/cadeira_barata.jpg");
    } else if (slc("#med").checked) {
      estily("<strong>Preço: R$ 399,99<strong><br>");
      add_img("cadeira/cadeira.jpg");
    } else {
      estily("<strong>Preço: R$ 59.999,99<strong><br>");
      add_img("cadeira/cadeira_cara.jpg");
    }
    estily(
      "Uma cadeira é um tipo de assento. Essa peça de mobília é apoiada sobre três ou quatro pernas, com um encosto que pode elevar-se às vezes acima da altura da cabeça."
    );
  }
  if (slc("select").value == "p2") {
    slc("#out").innerHTML = "";
    slc("#ct").innerHTML = "";
    if (slc("#min").checked) {
      estily("<strong>Preço: R$ 19,99<strong><br>");
      add_img("mouse/mouse_barato.jpg");
    } else if (slc("#med").checked) {
      estily("<strong>Preço: R$ 119,99<strong><br>");
      add_img("mouse/mouse.jpg");
    } else {
      estily("<strong>Preço: R$ 899,99<strong><br>");
      add_img("mouse/mouse_caro.jpg");
    }
    estily(
      'É um dispositivo de mão que controla o movimento de um ponteiro na tela (normalmente a imagem de uma seta). Existem diversos tipos de mouse, mas o modelo mais comum tem o formato de um ratinho, por isso o nome em inglês: "mouse". Foi criado para facilitar a interação com o computador.'
    );
  }
  if (slc("select").value == "p3") {
    slc("#out").innerHTML = "";
    slc("#ct").innerHTML = "";
    if (slc("#min").checked) {
      estily("<strong>Preço: R$ 29,99<strong><br>");
      add_img("teclado/teclado_barato.jpg");
    } else if (slc("#med").checked) {
      estily("<strong>Preço: R$ 49,99<strong><br>");
      add_img("teclado/teclado.jpg");
    } else {
      estily("<strong>Preço: R$ 599,99<strong><br>");
      add_img("teclado/teclado_caro.jpg");
    }
    estily(
      "Na computação, o teclado de computador é um dispositivo que possui uma série de botões ou teclas, utilizado para inserir dados no computador. É um tipo de periférico de entrada utilizado pelo usuário para a entrada manual no sistema de dados e comandos."
    );
  }
}
