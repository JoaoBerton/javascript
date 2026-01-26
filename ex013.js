let agora = new Date()
let hora = agora.getHours()
console.log(`Agora são ${hora} horas`)
if(hora < 13){
    console.log('Bom Dia!')
} else if(hora < 18) {
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}