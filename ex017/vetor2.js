let valor = [34, 21, 19, 9, 10, 17]
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
    console.log(`A posição do vetor é ${otr}, e o valor é ${valor}.`)
}