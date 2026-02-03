/*Programa que verifica se o usuário está apto ou não para votar.*/
const nome = "João Vitor"
const idade = 25
    console.log(`Olá ${nome}, você tem ${idade} anos de idade.`)
/*Abaixo: está verificando três condiçãoes que podem ou não satisfazer o programa;
    1°-Se o usuário tem idade menor de 18 anos.
    2°-Se o usuário tem idade maior ou igual a 16 anos.
    3°-Se o usuário tem idade maior a 70 anos.
    4°-Ou se o usuário é analfabeto.
*/
if(idade < 16){
    console.log("Você não está apto a votar!; Volte quando tiver idade... <._.>")
} else if(idade < 18 || idade > 70) {
    console.log("Você tem o voto opcional, portanto vota se quiser!")
/*
    Na linha abaixo, estamos verificando se:
    1°-A idade do ususário é maior ou igual a 18.
    2°-E se a idade do usuário é igual ou menor a 70.
    ps: Se caso uma dessas serem 'true', retornara o comando '.log'.
*/
} else if(idade >= 18 || idade <= 70){
    console.log("Você tem o voto obrigatório!; Esperamos você na urna no dia da votação! Boa sorte >_<")
/*
    Por fim, abaixo estamos testando a condição:
    1°- se a idade do usuário for menor de 16 anos retornara os dados do comando '.log'. 
*/
} else {
    console.log("[ERRO!!!]; Informação inválida!, Tente de novo...")
}
