var selec = document.querySelector("select");
var result = document.querySelector("#result");
var list = [];
function add() {
  let input = document.querySelector("input");
  if (input.value.length == 0) {
    alert("Insira um valor válido");
  } else if (
    Number(input.value) > 100 ||
    list.includes(Number(input.value)) ||
    Number(input.value) < 0
  ) {
    alert("Número não aceito");
  } else {
    let push = Number(input.value);
    list.push(push);
    let obj = document.createElement("option");
    obj.text = `Valor ${input.value} adicionado.`;
    selec.appendChild(obj);
  }
  input.value = "";
  input.focus();
}
function somatodos(lista) {
  let soma = 0;
  let vari = 0;
  while (vari < lista.length) {
    soma += lista[vari];
    vari++;
  }
  return soma;
}
function finaly() {
  if (list.length == 0) {
    alert("Insira um valor");
  } else {
    result.style = "padding:18px;";
    result.innerHTML = "";
    list.sort((a, b) => a - b);
    result.innerHTML += `Foram cadastrados ${list.length} números.<br>`;
    result.innerHTML += `O maior número cadastrado é ${
      list[list.length - 1]
    }.<br>`;
    result.innerHTML += `E o menor é ${list[0]}.<br>`;
    result.innerHTML += `A soma de todos são ${somatodos(list)}.<br>`;
    result.innerHTML += `E a média deles é ${(
      somatodos(list) / list.length
    ).toFixed(1)}`;
  }
}
