
function calc() {
    const num = Number(document.querySelector("input#count").value)
    const box = document.querySelector("select#boxid")

    if(!num) {
        alert('Erro tente novamente!')
    }
    for(c = 1; c <= 10; c++) {
        const el = document.createElement("option")
        el.text = `${num} x ${c} = ${num * c}`
        box.appendChild(el)
}
}


