function checar() {
    const contar = Number(document.getElementById("data_id").value);
    const caixa = document.getElementById("conteiner");
conteiner.innerText = ""
   if(contar === 0 || isNaN(contar)) {
    conteiner.innerText = 'O valor que você digitou é iválido!!  Tente novamente.'
   }
   if(contar % 2 === 0) {
    conteiner.innerHTML = `Este número "<strong>${contar}</strong>" respectivamente é <strong>Par</strong>.`
    for(ini = 0; ini <= contar; ini += 2) {
        caixa.innerHTML += `Contando... ${ini}<br>`
    }
   }
    if(contar % 2 === 1) {
    caixa.innerHTML = `O número digitado foi <strong>${contar}</strong>.Este número é <strong>Ímpar</strong>.`
    for(let i = 0;i <= contar; i++) {
        caixa.innerHTML += `Contando... ${i}<br>`
    }
   }
    
}
