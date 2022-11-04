function experiencia() {
    const a = document.getElementById("animo-input").value;
    let imgPath = null;
    let p = null;

    if (10 >= a && a > 8) {
        imgPath = '../assets/img/emoticonos.png'
        p = 'Wow! Estamos agradecidos'
    } else if (8 >= a && a > 6) {
        imgPath = 'trabajo/src/assets/img/feliz.png'
        p = 'Wow! Estamos agradecidos'
    } else if (6 >= a && a > 4) {
        imgPath = 'trabajo/src/assets/img/pensando.png'
        p = 'Gracias por valorarnos!'
    } else if (4 >= a && a > 2) {
        imgPath = 'trabajo/src/assets/img/triste.png'
        p = 'Intentaremos mejorar!'
    } else if (a <= 2 && a >= 0) {
        imgPath = 'trabajo/src/assets/img/muy-triste.png'
        p = 'Intentaremos mejorar!'
    } else {
        alert('Valor invalido, ingrese un numero entre 1-10')
        imgPath = "/TP-prog_web/img/tenedor.png"
        p = 'Algo salio Mal'
    }

    const cara = document.getElementById('animo-img');
    const msj = document.getElementById('feedback');
    cara.src = imgPath
    msj.innerHTML = p
}

export {experiencia}