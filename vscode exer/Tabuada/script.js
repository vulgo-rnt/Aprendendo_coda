var select = document.querySelector('#out')
function Calc() {
    var input = document.querySelector('input').value
        var resol = Number(input)
            select.innerHTML = ''
                    if(input.length == 0){
                        alert('Sem dados (vai considerar a tabuada do 0)')}
                    for (let cont = 1; cont < 11; cont++){
                let out = document.createElement('option')
            out.text = `${resol} X ${cont} = ${resol*cont}`
        select.appendChild(out)
    }/*Cria um loop de 1 até 10 na variavel cont e calcula a taboada no resol retornando para div*/
}//Evento do botão (Pega input faz o calculo e retorna para div)