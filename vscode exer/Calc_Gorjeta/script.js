const input = document.querySelector("#value"); //Seletor do input tipo number
const result = document.querySelector("#result"); //Seletor do paragrafo que vai mostra o texto com o resultado
const radios = document.querySelectorAll("input[type='radio']"); //Seletor que pega todos os inputs tipo radio
const list = [5, 15, 25]; //Lista com valores iguais o id dos radio, necessario para o loop for
input.addEventListener("keyup", (event) => {
  //Adiciona o evento keyup para usar o Enter em vez de usar 'click' com um button
  if (event.key == "Enter") {
    if (input.value.length == 0) {
      alert("Insira um valor");
    } else {
      for (let cont = 0; cont < list.length; cont++) {
        if (document.getElementById(list[cont]).checked) {
          //Checa cada input radio e muda o paragrafo para mostra o resultado
          result.innerHTML = `De R$${input.value} a gorjeta fica em R$${
            (Number(input.value) * list[cont]) / 100
          }`;
          result.style.padding = "10px"; //Muda o padding somente quando tiver imformação no paragrafo
        }
      }
    }
    input.focus(); //Manter o foco no input tipo number depois de clickar Enter
    input.value = ""; //Apaga valor depois de dar Enter
  }
});
radios.forEach((radio) => {
  //Usado para executar uma função para cada elemento em um array
  radio.addEventListener("click", () => {
    //Adiciona um evento click para smp manter o foco no input tipo number
    input.focus();
  });
});
input.addEventListener("click", () => {
  //Diminui o input quando selecionado para por um numero e tira o placeholder
  input.style.width = "50px";
  input.placeholder = "";
});
