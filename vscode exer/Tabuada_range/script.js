var select = document.querySelector("#out");
var selet_in = document.querySelector("input");
selet_in.addEventListener("input", () => {
  var input = document.querySelector("input").value;
  var resol = Number(input);
  select.innerHTML = "";
  if (input.length == 0) {
    alert("Sem dados (vai considerar a tabuada do 0)");
  }
  for (let cont = 1; cont < 11; cont++) {
    let out = document.createElement("option");
    out.text = `${resol} X ${cont} = ${resol * cont}`;
    select.appendChild(out);
  }
  var paragh4 = document.querySelector("h4");
  paragh4.innerHTML = `Tabuado do ${input}`;
});
