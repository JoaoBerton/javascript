function clicar() {
    //Hora de declarar as variáveis!!
    let iniStr = document.getElementById('inicio').value
    let fnStr = document.getElementById('fim').value
    let pssStr = document.getElementById('passo').value
    let res = document.getElementById('res')
//Verifica se há algum campo vázio.
    if(iniStr === "" || fnStr === "" || pssStr === "") {
        window.alert('[ERRO] nenhum valor listado, por favor tente novamente!')
        //Faz o teste no início para saber se os dados são válidos.
    }else {
        let ini = Number(iniStr)
        let fn = Number(fnStr)
        let pss = Number(pssStr)
        /*Depois se caso der verdadeiro, o valor é convertido para número e testa se o valor é nulo*/
    if(pss === 0) {
        res.innerHTML = 'O valor não é válido, por favor tente novamente!'
        //Caso tudo estiver Ok vem o alerta de confirmação.
    }else {
        window.alert('Prossiga com o cálculo!')
    }
}
    for(let calc = ini + pss; calc >= fn; calc += pss) {
        res.innerHTML = `${calc}`
        if(calc === fn){
            res.innerHTML = 'Cálculado!'
        }
    }
}