function tidade() {
    let data = new Date()
    let ano = data.getFullYear()
    let nascimento = Number(document.querySelector('#year').value)
    let res = document.querySelector('#res')

    if (nascimento <= 0 || nascimento > ano) {
        window.alert('[ERRO], Tente novamente!')
    } else {
        let sexo = document.getElementsByName('sexm')
        let idade = ano - nascimento
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'imagens/homem-crianca.png')
            } else if (idade < 22) {
                img.setAttribute('src', 'imagens/homem-adolescente.png')
            } else if (idade < 51) {
                img.setAttribute('src', 'imagens/homem-adulto.png')
            } else {
                img.setAttribute('src', 'imagens/homem-velho.png')
            }
        } else if (sexo[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'imagens/mulher-crianca.png')
            } else if (idade < 22) {
                img.setAttribute('src', 'imagens/mulher-adolescente.png')
            } else if (idade < 51) {
                img.setAttribute('src', 'imagens/mulher-adulta.png')
            } else {
                img.setAttribute('src', 'imagens/mulher-idosa.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}
