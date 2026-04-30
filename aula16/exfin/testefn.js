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
        valores.push(Number(num.value));
        let item = document.createElement("option");
        item.text = `O valor ${num.value} foi adicionado.`;
        inLista.appendChild(item);
    } else {
        window.alert('Valor inválido ou já encontrado na lista.');
    }
    num.value = '';
    num.focus();
}
function finalizar() {
    if(valores.length == 0) {
        window.alert = "Adicione valores antes de finalizar!"
    }else {
        let tot = valores.length
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;
        for(let pos in valores) {
            soma += valores[pos];
        if(valores[pos] > maior )
            maior = valores[pos];
        if(valores[pos] < menor) 
            menor = valores[pos];
        }
        media = soma / tot;
        result.innerHTML = '';
        result.innerHTML = `Número de cadastros são ${tot}.`;
        result.innerHTML = `O maior valor inforformado foi : ${maior}.`;
        result.innerHTML = `O menor valor informado foi : ${menor}.`;
        result.innerHTML = `O resultado da soma de todos od números adicionados é : ${soma}.`;
    }
}