<template>
  <Header/>

  <h1>HAGA SU PEDIDO</h1>

  <hr>

  <div id="formulario">
    <form id="form">
      <div id="ElementosALlenar">
        <div id="nombreyapell">
        <label>Nombre y apellido</label>
        <input type="text" name="nombre" id="" placeholder="Escriba aquí" v-model="nombre">
      </div>
      <br>
      <div id="telefono">
        <label>Teléfono</label>
        <input type="tel" name="telefono" id="" maxlength="10" minlength="10" v-model="telefono">
      </div>
      <br>
      <div id="modoentrega">
        <label>Modo de Entrega</label>
        <input type="radio" name="modo" id="" value="Takeaway" v-model="modoEntrega">Takeaway
        <input type="radio" name="modo" id="" value="Delivery" v-model="modoEntrega">Delivery
      </div>
      <br>
      <div id="eleccionmenu">
        <u><label>Elija su menú:</label></u>

            <div class="platos">
              Entrada <select name="entrada" id="Entrada" v-model="entradaElegida">
              <option value="Tortilla - $ 700">Tortilla - $ 700</option>
              <option value="Buñuelos - $ 700">Buñuelos - $ 700</option>
              <option value="Gambas - $ 1000">Gambas - $ 1000</option>
              <option value="Lengua - $ 1000">Lengua - $ 1000</option>
            </select>
            </div>
            <br>
            <div class="platos">
              Plato <select name="princi" id="" v-model="platoElegido">
              <option value="Milanesa - $ 1500">Milanesa - $ 1500</option>
              <option value="Ñoquis - $ 1300">Ñoquis - $ 1300</option>
              <option value="Pollo - $ 1300">Pollo - $ 1300</option>
              <option value="Carne - $ 1800">Carne - $ 1800</option>
            </select>
            </div>

            <br>
          <div class="platos">
            Postre <select name="postre" id="" v-model="postreElegido">
            <option value="Flan - $ 500">Flan - $ 500</option>
            <option value="Vigilante - $ 500">Vigilante - $ 500</option>
            <option value="Helado - $ 300">Helado - $ 300</option>
            <option value="Cafe - $ 200">Cafe - $ 200</option>

          </select>
          </div>
      </div>
      <br>
        <div id="horarioentrega">
          <label>Horario de Entrega</label>
          <input type="time" name="fecha" id="" v-model="horaEntrega">
        </div>
      <hr/>
        <footer id="footer">
          <input id="order-submit" type='submit' value="Enviar" v-on:click="ordenar()" >
          <input type="reset" value="Limpiar">
        </footer>
      </div>
      <br>

    </form>
  </div>
  <Footer/>

</template>


<script>
import {entradas, postre, principal} from "@/assets/js/Opciones";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import axios from "axios";

export default {name: "Pedir-tag", props: [
    "producto",
    "img",
    "precio",
    "descripcion",
    "item"
  ], components: {
    Header,
    Footer,
  }, data() {
    return {
      nombre: "",
      telefono: "",
      modoEntrega: "",
      entradaElegida: "",
      platoElegido: "",
      postreElegido: "",
      horaEntrega: "",
      entradas: entradas,
      principal: principal,
      postre: postre,
    }

  },
   methods: {
    ordenar() {
      console.log("Boton Presionado")
      axios.post("http://localhost:5000/api/v1/ordenar", {
        cliente: this.nombre,
        telefono: this.telefono,
        entrega: this.modoEntrega,
        horario: this.horaEntrega,
        entrada: JSON.stringify(this.entradaElegida),
        plato_principal: JSON.stringify(this.platoElegido),
        postre: JSON.stringify(this.postreElegido),
      })
          .then(response => {
            console.log(response)
            this.$router.push({name: "PedidoFinalizado"})
          })
          .catch(error => {
            console.log(error);
            this.$router.push({name: "ErrorEnPedido"})
          })
    }

  },
}

</script>

<style scoped>
body{
  text-align: center;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

h1 {
  text-align: center;
}

#ElementosALlenar{
  padding-left: 5%;
  padding-top: 3%;
}

#formulario{
  display: flex;
  place-content: center;
  margin-bottom: 40px;
}

form {
  border-collapse: collapse;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  border: 1px solid;
  width: 30%;
  justify-content: space-around;
}

#Entrada{
    margin-top: 2%;
}

input{
  background-color: #fbfbfb;
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  border-color: burlywood;
}

button{
  text-transform: uppercase;
  background-color: burlywood;
  border-color: burlywood;
  border-style: solid;
  border-radius: 10px;
  cursor: pointer;
  color: #f3f3f3;
  width: 100px;
  height: 20px;
  margin: 2px;
}

button:hover {
  background-color: saddlebrown;
  border-color: saddlebrown;
  opacity: 90%;
}


footer{
  text-align: center;
  padding: 10px;
}

.platos {
  flex-direction: column;
  margin: 2px;
}

</style>

