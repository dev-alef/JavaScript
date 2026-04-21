/**
 
Alterando e acessando textos

textContent > Pega todo o conteudo
innerText  > Pega APENAS o texto
innerHTML  > Permite adicionar HTML e texto

 */






const element = document.querySelector(".paragraph-js")


console.log(element.textContent) /*só o HTML */
console.log(element.innerText) /*LEVA EM CONTA O CSS */
console.log(element.innerHTML) /*  TRAS TUDO > Permite adicionar  HTML*/


const button = document.querySelector("#button1")

button.style.color = "green"

button.style.backgroundColor = "yellow"

button2.style.color = "white"
button2.style.backgroundColor = "green"

const input1 = document.querySelector("#button1")

function cliqueiNoBotao(){
    console.log(input.value)
    
}

function digiteiNoInput(){
    console.log("Digitei no input")
}




const input = document.getElementById('input1');
const button1 = document.getElementById('button2');
const paragrafo = document.getElementById('meuParagrafo');

button1.addEventListener('click', () => {
    const texto = input2.value;
     paragrafo.textContent = texto; 
    });

function showInput() {
 const input = document.getElementById('input1');
 const display = document.getElementById('meuParagrafo');
 display.textContent = input.value;
 input.value = '';
}

