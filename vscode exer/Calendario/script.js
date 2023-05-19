const select = document.querySelector("select");
const imageCalendar = document.querySelector("img");
const textInfo = document.querySelector("span");

var mesesDoAno = [];
var data = new Date();

for (let i = 0; i < 12; i++) {
  data.setMonth(i);
  mesesDoAno.push(data.toLocaleString("default", { month: "long" }));
  var optMeses = document.createElement("option");
  optMeses.textContent = mesesDoAno[i];
  optMeses.value = mesesDoAno[i];
  select.appendChild(optMeses);
}

select.addEventListener("change", function () {
  var mes = select.options[select.selectedIndex].value;
  imageCalendar.src = `imagens/${mes}.png`;
});
