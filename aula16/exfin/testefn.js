/*      Variáveis a se declarar:
L.11- div: #caixa;    input num: #num;    select: #boxid1;    L.18-div: #res;   
*/
let caixa = document.querySelector('div#caixa');
let num = document.querySelector('input#num');
let box1 = document.querySelector('select#boxid1');
let result = document.querySelector('div#res');
let valores = [];
result.style.display = "none"
function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}

function add() {
    if(isNumero(num.value) && !inLista(num.value,valores)) {

    } else {
        window.alert('Valor inválido ou já encontrado na lista.');
    }
}