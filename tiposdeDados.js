/* Tipos de dados em JavaScript

1. String > Textos 
2. Number > Números
3. Boolean > true ou false
4. Object > objetos, estruturas de dados mais complexas,
5. Undefined > valor indefinido, não atribuído
6. Null > valor nulo, vazio
7. Array > arrays, listas de valores
8. if & else > estruturas de controle de fluxo
9. Functions > funções, blocos de código reutilizáveis

CONTROLADOR DE FLUXO: if & else

if (Se) > faça isso
else (Senão) > execute isso

Oeradores de comparação
== > igual que
> maior que
< menor que
*/

const texto1 = "texto com 'aspas' duplas"; /* nao pode pular linha*/
const texto2 = 'texto com "aspas" simples'; /* nao pode pular linha*/
const texto3 = `texto com 
crase
pode 
pular
 linha`; /*pode pular linha*/ /* Template literal ou template Strings*/

console.log(texto1);
console.log(texto2);
console.log(texto3);

const myAge = 30;
const myCar = "Audi";

const myString = `Minha idade é ${myAge}, to ficando velho e meu carro é um ${myCar} `;

console.log(myString);

const number1 = 10 + 10;
const number2 = 10 - 5;
const number3 = 10 * 2;
const number4 = 10 / 2;

console.log(number1);
console.log(number2);
console.log(number3);
console.log(number4);

const rodolfo = {
  name: "Rodolfo",
  age: 30,
  car: "Audi",
  address: {
    street: "Rua das Flores",
    number: 123,
    city: "São Paulo",
    state: "SP",
    country: "Brasil",
  },
};

rodolfo.name = "Rodolfo Silva"; /*alterando o valor da propriedade name do
 objeto rodolfo*/

console.log(rodolfo); /*acessando a propriedade city do objeto 
address do objeto rodolfo > console.log(rodolfo.address.city) */

const user = {
  name: "Maria",
  age: 25,
  nomeDoConjuge: null,
};

console.log(user.nomeDoConjuge);

/*acessando a propriedade nomeDoConjuge do objeto user, que é null*/

const users = [
  {
    name: "Maria",
    age: 25,
    nomeDoConjuge: "Jose",
    id: null,
  },
  {
    name: "Jose",
    age: 20,
    nomeDoConjuge: "Maria",
    id: null,
  },
  {
    name: "Marcos",
    age: 30,
    nomeDoConjuge: "Julia",
    id: null,
  },
];


console.log(users[0].age); /*usando o array de objetos, se eu quiser acessar todos os
usuarios eu coloco só users, */


const notaDoAluno = 6;
const notaDeCorte = 5;

if(notaDoAluno > notaDeCorte){
/* O QUE SERA EXECUTADO SE IF FOR VERDADEIRO */
  console.log("Aluno aprovado");
  /* O QUE SERA EXECUTADO SE IF FOR FALSO */
} else {
  console.log("Aluno reprovado");
}