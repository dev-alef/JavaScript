/*

document -> HTML

getElementById -> Trás UM elemento pelo ID
getElementByClassName -> Trás TODOS os elementos com essa classe
getElementByTagName -> Trás TODOS os elementos com essa TAG / é só colocar
                                                             (p) ou (h1) etc
GetElementByName -> Trás TODOS os elementos com esse NAME
                o name normalmente utilizamos em formularios
                endereço, nome, sobrenome, 
                e pra saber qual informação é qual uso o campo NAME
                crio um formulario e ele traz todas as informações
                   

querySelector -> Trás UM elemento, o primeiro que encontrar
querySelectorAll -> Trás TODOS os elementos que encontrar
*/

const elements = document.getElementsByClassName("paragraph-js")



console.log(elements)

