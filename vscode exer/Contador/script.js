function umclick(){
    var inicio = document.querySelector('input#inicio')
        var fim = document.getElementById('fim')
        var passo = document.querySelector('input#passo')
    var selecDiv = document.getElementById('result')
        if (inicio.value.length == 0 ||fim.value.length == 0||passo.value.length == 0){
            alert('Faltam dados !!')} 
                else{
                    var i = Number(inicio.value)
                    var f = Number(fim.value)
                    var p = Number(passo.value)
                    selecDiv.innerHTML = ''
                    if (p <= 0){
                        alert('Passo inválido (será considerado com valor de 1)')
                            p = 1 }
                        if(i < f){  
                            for(let cont = i;cont <= f;cont += p){  
                                selecDiv.innerText += (cont + ', ')} }
                        else {
                            for(let cont = i;cont >= f;cont -= p){
                                selecDiv.innerText += (cont + ', ')} }       
                }
                selecDiv.innerHTML += 'Fim'
    }