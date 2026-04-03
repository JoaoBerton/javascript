//Iniciando sobre Vetores.
let number = [39, 20, 16]
do{
    number.push(54)
    console.log(`${number[2]}`)
    number[2]++
}while(number[2] <= 40)
    //Testando condição de igualdade.
if(number[2] >= 40) {
    console.log('Fim do programa')
}
number[4] = 43
    console.log(`Separado dos outros, aqui está o Vetor na posição n° 4: ${number[4]}`)
