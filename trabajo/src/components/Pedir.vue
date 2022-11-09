<template>
  <Header/>

  <h1>HAGA SU PEDIDO</h1>

  <hr>

  <div id="formulario">
<<<<<<< HEAD
    <form id="form">
      <div id="ElementosALlenar">
      <div id="nombreyapell">
      <div id="ElementosALlenar">
      <div id="nombreyapell">
=======
    <form>
      <div id="ElementosALlenar">
        <div id="nombreyapell">
>>>>>>> f4f3700e115a529c83c0a8b5e8a3fe3f3ed0a7dd
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
              <Comprar v-for="(item, index) in entradas"
                       v-bind:key="index"
                       v-bind:producto="item.producto"
                       v-bind:precio="item.precio"/>
            </select>
            </div>
            <br>
            <div class="platos">
              Plato <select name="princi" id="" v-model="platoElegido">
              <Comprar v-for="(item, index) in principal"
                     v-bind:key="index"
                     v-bind:producto="item.producto"
                     v-bind:precio="item.precio"/>
            </select>
            </div>

            <br>
          <div class="platos">
              Postre <select name="postre" id="" v-model="postreElegido">
              <Comprar v-for="(item, index) in postre"
                     v-bind:key="index"
                     v-bind:producto="item.producto"
                     v-bind:precio="item.precio"/>
              </select>
          </div>
      </div>
      <br>
        <div id="horarioentrega">
          <label>Horario de Entrega</label>
          <input type="time" name="fecha" id="" v-model="horaEntrega">
        </div>
      </div>
      <hr/>
        <footer id="footer">
          <input id="order-submit" type='submit' value="Enviar" v-on:click="ordenar()" >
          <input type="reset" value="Limpiar">
        </footer>

      <br>
      </div>
      </div>
    </form>
  </div>

  <Footer/>

</template>

<script>
import {entradas, postre, principal} from "@/assets/js/Opciones";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Comprar from "@/components/Comprar";
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
    Comprar
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
<<<<<<< HEAD
  },
  methods: {
    ordenar() {
=======
  }, methods: {
    ordenar() {
      console.log("Boton Presionado")
>>>>>>> f4f3700e115a529c83c0a8b5e8a3fe3f3ed0a7dd
      axios.post("http://localhost:5000/api/v1/ordenar", {
        cliente: this.nombre,
        telefono: this.telefono,
        entrega: this.modoEntrega,
        horario: this.horaEntrega,
<<<<<<< HEAD
        entrada: JSON.stringify(this.entradaElegida),
        plato_principal: JSON.stringify(this.platoElegido),
        postre: JSON.stringify(this.postreElegido),
=======
        entrada: this.entradaElegida,
        plato_principal: this.platoElegido,
        postre: this.postreElegido
>>>>>>> f4f3700e115a529c83c0a8b5e8a3fe3f3ed0a7dd
      })
          .then(response => {
            console.log(response)
            this.$router.push({name: "PedidoFinalizado", params: {order_id: response.data["order_id"]}})
          })
          .catch(error => {
            console.log(error);
            this.$router.push({name: "ErrorEnPedido"})
          })
    }
<<<<<<< HEAD
  },
}
=======
  },}
>>>>>>> f4f3700e115a529c83c0a8b5e8a3fe3f3ed0a7dd
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

