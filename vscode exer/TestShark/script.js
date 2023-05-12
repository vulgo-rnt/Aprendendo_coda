var str0 = 'Na média você treina quantas horas/dia:'
var str1 = 'E quantas horas/dia você estuda:'
var str2 = 'De 0 a 10 quanto você c esquiva de festas e mulheres:'
var apuracao = 0

function quaclick(){
    let secti = document.querySelector('div#cod')
    let selec = document.querySelector('input')
    apuracao += Number(selec.value)
    secti.innerHTML = ''
    if (apuracao > 0 && apuracao <= 7){
    secti.innerHTML = `Falta muito pra vc virar um tubarão `}
    else if (apuracao > 7 && apuracao < 20){
    secti.innerHTML = 'Ta bem perto de si torna um legitimo tubarão'
    }else{
    secti.innerHTML = 'Definitivamente você é um TUBARÃO'
    }
}

function triclick(){
    let selec = document.querySelector('input')
        apuracao += Number(selec.value)
            let secti = document.querySelector('div#cod')
                 secti.innerHTML = ''
                    let input = document.createElement('input')
                    let botao = document.createElement('input')
                         input.setAttribute('type','number')
                         botao.setAttribute('value', 'Ok')
                         botao.setAttribute('type', 'button')
                         
                    let selecp = document.querySelector('div#para')
                    selecp.innerText = str2
                secti.appendChild(input)
            secti.appendChild(botao)
            botao.addEventListener('click', quaclick) 
            
}

function segclick(){
    let selec = document.querySelector('input')
    apuracao += Number(selec.value)
    let secti = document.querySelector('div#cod')
    secti.innerHTML = ''
       let input = document.createElement('input')
       let botao = document.createElement('input')
            input.setAttribute('type','number')
            botao.setAttribute('value', 'Ok')
            botao.setAttribute('type', 'button')
            
       let selecp = document.querySelector('div#para')
       selecp.innerText = str1
   secti.appendChild(input)
secti.appendChild(botao)
botao.addEventListener('click', triclick) 
}
 
function priclick() {

    var selecrad = document.getElementsByName('rad')
        if (selecrad[1].checked){
            alert('Você é fraco, te falta odio!!!!')
         }
        else{
             let secti = document.querySelector('div#cod')
                 secti.innerHTML = ''
                    let input = document.createElement('input')
                    let botao = document.createElement('input')
                         input.setAttribute('type','number')
                         botao.setAttribute('value', 'Ok')
                         botao.setAttribute('type', 'button')
                         
                    let selecp = document.querySelector('div#para')
                    selecp.innerText = str0
                secti.appendChild(input)
            secti.appendChild(botao)
            botao.addEventListener('click', segclick) 
         }
       
 }
 

