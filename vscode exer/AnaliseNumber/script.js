var selec = document.querySelector('select')
    var result = document.querySelector('#result')
var list = []
function add(){
    let input = document.querySelector('input').value
        if(input.length == 0){
            alert('Insira um valor válido')
        } else if( Number(input) > 100 || list.includes(Number(input))){
            alert('Número não aceito')
        } else{
            list.push(Number(input))
                let obj = document.createElement('option')
            obj.text = `Valor ${input} adicionado.`
        selec.appendChild(obj)
    }
}
function somatodos(lista){
    let soma = 0
        let vari = 0
        while(vari < lista.length){
            soma += lista[vari]
            vari++
        }
    return soma 
}
function finaly(){
    result.style = 'padding:18px;'
    let input = document.querySelector('input').value
    if (input.length == 0){
        alert('Insira um valor')
    }else{
        result.innerHTML = ''
            list.sort()
                result.innerHTML += `Foram cadastrados ${list.length} números.<br>`
                    result.innerHTML += `O maior número cadastrado é ${list[list.length - 1]}.<br>`
                result.innerHTML += `E o menor é ${list[0]}.<br>`
            result.innerHTML += `A soma de todos são ${somatodos(list)}.<br>`
        result.innerHTML += `E a média deles é ${(somatodos(list) / list.length).toFixed(1)}`
    }
}