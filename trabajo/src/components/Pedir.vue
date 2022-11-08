<template>
  <Header/>
  <TheButtons/>

  <h1>HAGA SU PEDIDO</h1>
  <hr>
  <div id="all">
  <form enctype="text/plain" id="form">

    <table style="margin: 0 auto;">
      <tbody>
      <tr>
        <td>Nombre y apellido</td>
        <td>
          <input type="text" name="nombre" id="" placeholder="Escriba aquí" v-model="nombre">
        </td>
      </tr>

      <tr>
        <td>Teléfono</td>
        <td>
          <input type="tel" name="telefono" id="" maxlength="10" minlength="10">
        </td>
      </tr>
      <tr>
        <td>Modo de Entrega</td>
        <td>
          <input type="radio" name="modo" id="" value="Takeaway" v-model="modoEntrega">Takeaway
          <input type="radio" name="modo" id="" value="Delivery" v-model="modoEntrega">Delivery
        </td>
      </tr>
      <tr>
        <td>¿Qué desea encargar?</td>
          <td>
            <div class="platos">
              Entrada <select name="entrada" id="" v-model="entradaElegida">
              <Comprar v-for="(item, index) in entradas"
                      v-bind:key="index"
                      v-bind:producto="item.producto"
                      v-bind:precio="item.precio"/>
            </select>

          </div>
          <div class="platos">
            <br>

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
          </td>
      </tr>
      <tr>
        <td>
          <p>Horario de Entrega</p>
        </td>
        <td>
          <input type="time" name="fecha" id="" v-model="horaEntrega">
        </td>
      </tr>
      </tbody>
    </table>
    <hr/>

    <footer id="footer">
      <router-link :to="{name: 'PagoOnline'}">
        <button type='submit' value="Enviar">Enviar</button>
      </router-link>
      <button type="reset" value="Limpiar">Limpiar</button>
    </footer>
  </form>
  </div>
  <Footer/>
</template>

<script>
import {entradas, postre, principal} from "@/assets/js/Opciones";
// import {enviar} from "@/assets/js/Home-JS";
import TheButtons from "@/components/Botones";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Comprar from "@/components/Comprar";

export default {
  name: "Pedir-tag",
  props: [
    "producto",
    "img",
    "precio",
    "descripcion"
  ],
  components: {
    TheButtons,
    Header,
    Footer,
    Comprar
  },
  data() {
      return {
        nombre: "",
        entradaElegida: "",
        platoElegido: "",
        postreElegido: "",
        horaEntrega: "",
        modoEntrega: "",
        entradas: entradas,
        principal: principal,
        postre: postre,
      }
   }
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

#all{
  display: flex;
  place-content: center;
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

