function apagar(){
    var sele = document.querySelector('div#div')
    sele.innerText = ''  
}
function addButt(id){
    var selec = document.querySelector('div#div')
    selec.innerText += id
}
function resultado(){
    var selecDiv = document.querySelector('div#div')
    var resultado = eval(selecDiv.innerText)
    selecDiv.innerText = resultado
}