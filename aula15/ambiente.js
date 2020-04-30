let num = [5, 8, 2, 9, 3]
num.push(21)
num.sort()
/*
console.log(`número de elementos ${num.length}`)
console.log(`Nosso vetor é o ${num}`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

for (let pos = 0; pos < num.length; pos++) {
    console.log(num[pos])
}
*/
// Esse for abaixo só funciona com objetos e vetores
// para cada posição em num (posição na variável composta) vai mostrar a resposta.

/*
for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}.`) 
}

let n = 5
console.log(`O número ${n} está na posição ${num.indexOf(n)} do nosso vetor.`)

let procurado = num.indexOf(n)
// se a o valor retornar -1, significa que não tem o número solicitado no array
if(procurado == -1){
    console.log('Valor não encontrado!')
    console.log(num)
}else{
    console.log(`O valor ${n} está na posição ${procurado}`)
}
*/

var numbers = [4, 2, 5, 10, 3, 9];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);