const input = document.querySelector("#value");
const result = document.querySelector("#result");
const list = [5, 15, 25];
input.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    for (let cont = 0; cont < list.length; cont++) {
      if (document.getElementById(list[cont]).checked) {
        result.innerHTML = `De R$${input.value} a gorjeta fica em R$${
          (Number(input.value) * list[cont]) / 100
        }`;
      }
    }
    input.focus();
    input.value = "";
  }
});
