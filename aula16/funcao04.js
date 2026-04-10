/*Fatoração simples*/
function fatorial(y) {
    let num = 1

    for(let c = y; c > 1; c--) {
        num *= c 
    }
    return num  //Return vai após o laço, para não interromper a multiplicação.

}
    console.log(fatorial(5))