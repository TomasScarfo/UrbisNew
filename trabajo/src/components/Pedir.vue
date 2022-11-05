<template>
  <Header/>
  <TheButtons/>
  <h1>HAGA SU PEDIDO</h1>

  <hr>
  <div id="form-resumen">

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
          <input type="tel" name="telefono" id="" maxlength="10">
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
            Entrada <select name="entrada" id="" v-model="entrada">
            <option value="-">-</option>
            <option value="Gambas">Gambas</option>
            <option value="Tortilla">Tortilla</option>
            <option value="Buñuelos">Buñuelos</option>
            <option value="Lengua">Lengua</option>
          </select>
          </div>
          <div class="platos">
            <br>
            Plato <select name="princi" id="" v-model="plato">
            <option value="-">-</option>
            <option value="Milanesa">Milanesa</option>
            <option value="Ñoquis">Ñoquis</option>
            <option value="Carne al horno">Carne al horno</option>
            <option value="Pollo">Pollo</option>
          </select>
          </div>
            <br>
          <div class="platos">
            Postre <select name="postre" id="" v-model="postre">
              <option value="-">-</option>
              <option value="Ensalada de fruta">Ensalada de fruta</option>
              <option value="Flan">Flan</option>
              <option value="Helado">Helado</option>
              <option value="Cafe">Cafe</option>
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
      <button type='submit' value="Enviar">Enviar</button>
      <button type="reset" value="Limpiar">Limpiar</button>
    </footer>
  </form>

    <div id="resumen">
      <h1>Resumen de tu Pedido:</h1>
      <h3>Entrada: {{entrada}}</h3>
      <h3>Plato Principal: {{plato}}</h3>
      <h3>Postre: {{postre}}</h3>
      <h3>Entrega por: {{modoEntrega}}</h3>
      <h3>Horario: {{horaEntrega}}</h3>
    </div>

  </div>
  <Footer/>
</template>

<script>
import TheButtons from "@/components/Botones";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "Pedir-tag",
  components: {
    TheButtons,
    Header,
    Footer,
  },
  data() {
    return {
      nombre: "",
      entrada: "",
      plato: "",
      postre: "",
      horaEntrega: "",
      modoEntrega: ""
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

#form {
  border-collapse: collapse;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  border: 1px solid;
  width: 30%;
  margin-right: 10%;

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

#resumen {
  display: flex;
  flex-direction: column;
  width: 50%;
}

#form-resumen {
  flex-direction: row;
  display: flex;
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

