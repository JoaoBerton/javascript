function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('photo')
    var horas = new Date()
    var hours = horas.getHours() 
    msg.innerHTML = `Agora são ${hours} horas`
    if(hours >= 0 && hours < 13) {
        img.src = 'imagens/imagem_manha.png'
    } else if(hours >= 13 && hours < 18) {
        img.src = 'imagens/imagem_tarde.png'
    } else {
        img.src = 'imagens/imagem_noite.png'
    }
}