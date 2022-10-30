import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

console.log('adfsg')
function newOrder() {
    let nombre = document.getElementById("nombre").value;
    let telefono = document.getElementById("telefono").value;
    let entrega = document.getElementById("entrega").value;
    let entrada = document.getElementById("entrada").value;
    let plato = document.getElementById("plato").value;
    let postre = document.getElementById("postre").value;
    let horario = document.getElementById("horario").value;

    let axios = "https://unpkg.com/axios/dist/axios.min.js";
    axios.post('http://127.0.0.1:5500/api/v1/new_order/',
        {
            "nombre": nombre,
            "telefono": telefono,
            "entrega": entrega,
            "entrada": entrada,
            "plato": plato,
            "postre": postre,
            "horario": horario,
        })
        .then(function () {
            let msj = document.getElementById('mensaje');
            msj.value = 'ORDEN DE COMPRA REALIZADA CORRECTAMENTE'
            msj.hidden= false
        })

        .catch(function (error) {
            alert("No se pudo guardar correctamente");
            console.log(error);
        })
}
newOrder()