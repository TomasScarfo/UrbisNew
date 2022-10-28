const estado = {
    excelente: "..assets/emoticonos.png",
    buena: "..assets/feliz.png",
    intermedio: "..assets/pensando.png",
    mala: "..assets/triste.png",
    muyMala: "..assets/muy-triste.png"
}

function experiencia() {
    let a = document.getElementById("animo-input").value

    let imgPath = null
    let p = null

    if (10 >= a && a > 8) {
        imgPath = estado.excelente
        p = 'Wow! Estamos agradecidos'
    } else if (8 >= a && a > 6) {
        imgPath = estado.buena
        p = 'Wow! Estamos agradecidos'
    } else if (6 >= a && a > 4) {
        imgPath = estado.intermedio
        p = 'Gracias por valorarnos!'
    } else if (4 >= a && a > 2) {
        imgPath = estado.mala
        p = 'Intentaremos mejorar!'
    } else if (a <= 2 && a >= 0) {
        imgPath = estado.muyMala
        p = 'Intentaremos mejorar!'
    } else {
        alert('Valor invalido, ingrese un numero entre 1-10')
        imgPath = "/TP-prog_web/img/tenedor.png"
        p = 'Algo salio Mal'
    }

    let cara = document.getElementById('animo-img')
    let msj = document.getElementById('feedback')
    cara.src = imgPath
    msj.innerHTML = p
}