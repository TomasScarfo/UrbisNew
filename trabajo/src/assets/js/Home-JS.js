function experiencia() {
    const a = document.getElementById("animo-input").value;
    let imgPath = null;
    let p = null;

    if (10 >= a && a > 8) {
<<<<<<< HEAD
        imgPath = '../trabajo/src/assets/img/emoticonos.png'
=======
        imgPath = require('@/assets/img/emoticonos.png')
>>>>>>> aca282742864663ec4faf3d5fe0f3124782b633b
        p = 'Wow! Estamos agradecidos'
    } else if (8 >= a && a > 6) {
        imgPath = require('@/assets/img/feliz.png')
        p = 'Wow! Estamos agradecidos'
    } else if (6 >= a && a > 4) {
        imgPath = require('@/assets/img/pensando.png')
        p = 'Gracias por valorarnos!'
    } else if (4 >= a && a > 2) {
        imgPath = require('@/assets/img/triste.png')
        p = 'Intentaremos mejorar!'
    } else if (a <= 2 && a >= 0) {
        imgPath = require('@/assets/img/muy-triste.png')
        p = 'Intentaremos mejorar!'
    } else {
        alert('Valor invalido, ingrese un numero entre 1-10')
        imgPath = require('@/assets/img/tenedor.png')
        p = 'Algo salio Mal'
    }

    const cara = document.getElementById('animo-img');
    const msj = document.getElementById('feedback');
    cara.src = imgPath
    msj.innerHTML = p
}

export {experiencia}