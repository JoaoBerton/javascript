function clicar() {
    let iniStr = document.getElementById('inicio').value
    let fnStr = document.getElementById('fim').value
    let pssStr = document.getElementById('passo').value
    let res = document.getElementById('res')

    if (iniStr === "" || fnStr === "" || pssStr === "") {
        window.alert('[ERRO] nenhum valor listado, por favor tente novamente!')
    } else {
        let ini = Number(iniStr)
        let fn = Number(fnStr)
        let pss = Number(pssStr)

        if (pss <= 0) {
            res.innerHTML = 'O valor do passo não é válido, por favor tente novamente!'
        } else {
            res.innerHTML = 'Contando: <br>'
            if (ini < fn) {
                // Contagem crescente
                for (let calc = ini; calc <= fn; calc += pss) {
                    res.innerHTML += `${calc} 👉 `
                }
            } else {
                // Contagem decrescente
                for (let calc = ini; calc >= fn; calc -= pss) {
                    res.innerHTML += `${calc} 👉 `
                }
            }
            res.innerHTML += '🏁'
        }
    }
}
