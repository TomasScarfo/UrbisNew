function experiencia() {
    const a = document.getElementById("animo-input").value;

    let p = null;

    if (10 >= a && a > 8) {

        p = 'Wow! Estamos agradecidos'
    } else if (8 >= a && a > 6) {

        p = 'Wow! Estamos agradecidos'
    } else if (6 >= a && a > 4) {
        p = 'Gracias por valorarnos!'
    } else if (4 >= a && a > 2) {
        p = 'Intentaremos mejorar!'
    } else if (a <= 2 && a >= 0) {
        p = 'Intentaremos mejorar!'
    } else {
        alert('Valor invalido, ingrese un numero entre 1-10')
        p = 'Algo salio Mal'
    }

    const msj = document.getElementById('feedback');
    msj.innerHTML = p
}

export {experiencia}