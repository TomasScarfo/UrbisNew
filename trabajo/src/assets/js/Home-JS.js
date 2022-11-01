const estado = {
    excelente: "./emoticonos.png",
    buena: "./feliz.png",
    intermedio: "./pensando.png",
    mala: "./triste.png",
    muyMala: "./muy-triste.png"
}

function experiencia() {
    var a = document.getElementById("animo-input").value

    var imgPath = null
    var p = null

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

    var cara = document.getElementById('animo-img')
    var msj = document.getElementById('feedback')
    cara.src = imgPath
    msj.innerHTML = p
}

export {
    experiencia
};