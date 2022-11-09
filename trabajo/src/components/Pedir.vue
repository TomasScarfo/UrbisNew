<template>
  <Header/>

  <h1>HAGA SU PEDIDO</h1>

  <hr>

  <div id="formulario">

    <form id="form" method="post" @submit.prevent="ordenar">
        <label>Nombre y apellido</label>
        <input type="text" name="nombre" id="" placeholder="Escriba aquí" v-model="nombre">

        <label>Teléfono</label>
        <input type="tel" name="telefono" id="" maxlength="10" minlength="10" v-model="telefono">

        <label>Modo de Entrega</label>
        <input type="radio" name="modo" id="" value="Takeaway" v-model="modoEntrega">Takeaway
        <input type="radio" name="modo" id="" value="Delivery" v-model="modoEntrega">Delivery

        <label>¿Qué desea encargar?</label>
            <div class="platos">
              Entrada <select name="entrada" id="" v-model="entradaElegida">
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

        <label>Horario de Entrega</label>
        <input type="time" name="fecha" id="" v-model="horaEntrega">

        <hr/>

        <footer id="footer">
          <input type='submit' value="Enviar">
          <input id="order-submit" type='submit' value="Enviar" v-on:click="ordenar" >
          <input type="reset" value="Limpiar">
        </footer>
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

export default {
  name: "Pedir-tag",
  props: [
    "producto",
    "img",
    "precio",
    "descripcion",
    "item"
  ],
  components: {
    Header,
    Footer,
    Comprar
  }, $route: undefined,

  data() {
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
    ordenar: function () {
      axios.post("http://localhost:5000/api/v1/ordenar", {
        cliente: this.nombre,
        telefono: this.telefono,
        entrega: this.modoEntrega,
        horario: this.horaEntrega,
        entrada: this.entradaElegida,
        plato: this.platoElegido,
        postre: this.postreElegido,
      }
          .then(response => {
            console.log(response)
            this.$router.push({name: "FinalizarPedido", params: {order_id: response.data["order_id"]}})
          })
          .catch(error => {
            console.log(error);
            this.$router.push({name: "NotFound"})
          }))
    }
  },
  // mounted() {
  //   if (this.$route.query['entrada'] === undefined) {
  //     this.$router.push({name: "PedidosOnline"})
  //   }
  // }
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

#formulario{
  display: flex;
  place-content: center;
  margin-bottom: 40px;
}

#form {
  border-collapse: collapse;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  border: 1px solid;
  width: 30%;

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

#form th,
#form td {
  padding: 12px 15px;
}

#form tbody tr {
  border-bottom: 1px solid grey;
}

#form tbody tr:nth-of-type(even) {
  background-color: burlywood;
}

#form tbody tr:last-of-type {
  border-bottom: 2px solid #009879;
}

hr{
  border:#1e253d solid 1px;
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

