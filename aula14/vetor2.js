let valor = [34, 21, 19, 10, 17]
//Adiciona um valor ao vetor na última posição.
valor.push(9)
//Coloca os valores do vetor, em ordem 'decrescente'.
valor.sort()
/*
Forma mais simples de exibir um Vetor
for(let age = 0; age < valor.length; age++ ) {
    console.log(`A posição de ${age}, tem o valor de: ${valor[age]}`)
}
    */

for(let otr in valor) {
    console.log(valor[otr])
}
if(valor == -1) {
    console.log('Desculpe ERRO! tente novamente')
}else {
    console.log(`O do vetor é ${valor}.`)
}