

const input = document.querySelector("#input")
const select = document.querySelector("select")
const button = document.querySelector(".button")

function troqueiValor(event) {
     console.log(event)
}
   

select.addEventListener("change", troqueiValor)


/**
 * tambem funciona se eu colocar input.addEventListener("keypress", troqueiValor)
 * ai vai mostrar todas informações quando eu digitar uma letra
 * 
 * button.addEventListener("click", troqueiValor)
 * 
 * vai trazer informações sobre o botao que cliquei
 * 
 * 
 * \/ tambem posso fazer assim, função anonima, ele nao tem opção, vai chamar essa opção
 * button.addEventListener("click", function(event){
 *      console.log(event)
 * })
 * 
 * 
 * 
 */
