<template>
  <h1>MENU</h1>

  <hr>
  <div id="contenido">
    <section class="entrada">
      <b>ENTRADA</b>

      <div id="opciones">
        <img src="../assets/img/tortilla.png">
        <p>Tortilla</p>
        <sub>Tortilla de papa, verdura o acelga</sub>
        <p id="precio">$700</p>
      </div>

      <div id="opciones">
        <img src="../assets/img/buñelos.png">
        <p>Buñuelos</p>
        <sub>8 buñuelos caseros al estilo Urbis</sub>
        <p id="precio">$700</p>
      </div>

      <div id="opciones">
        <img src="../assets/img/gambas.png">
        <p>Gambas</p>
        <p id="precio">$1000</p>
      </div>

      <div id="opciones">
        <img src="../assets/img/lengua.png">
        <p>Lengua</p>
        <p id="precio">$1000</p>
      </div>

    </section>

    <section class="principal">
      <b>PRINCIPAL</b>

      <div id="opciones">
        <img src="../assets/img/milanesa.png" v-bind:title="milanga">
        <p>Milanesa</p>
        <sub>De pollo o ternera acompañada de una guarnición a elección</sub>
        <p id="precio">$1500</p>
      </div>

      <div id="opciones">
        <img src="../assets/img/ñoquis.png">
        <p>Ñoquis</p>
        <sub>Servidos con salsa rosa, carbonara o bolognesa</sub>
        <p id="precio">$1300</p>
      </div>

      <div id="opciones">
        <img src="../assets/img/pollo.png">
        <p>Pollo</p>
        <sub>Pollo al horno acompañado con una guarnición a elección</sub>
        <p id="precio">$1300</p>
      </div>

      <div id="opciones">
        <img src="../assets/img/carne.png">
        <p>Carne</p>
        <sub>Carne al horno acompañado con una guarnición a elección</sub>
        <p id="precio">$1800</p>
      </div>

    </section>

    <section class="postre">
      <b>POSTRE</b>

      <div id="opciones">
        <img src="../assets/img/flan.png">
        <p>Flan</p>
        <sub>Flan casero simple o mixto</sub>
        <p id="precio">$500</p>
      </div>

      <div id="opciones">
        <img src="../assets/img/vigilante.png">
        <p>Vigilante</p>
        <p id="precio">$500</p>
      </div>

      <div id="opciones">
        <img src="../assets/img/helado.png">
        <p>Helado</p>
        <sub>Americana, chocolate o dulce de leche</sub>
        <p id="precio">$300</p>
      </div>

      <div id="opciones">
        <img src="../assets/img/cafe.png">
        <p>Cafe</p>
        <sub>Cafe negro</sub>
        <p id="precio">$200</p>
      </div>
    </section>
  </div>

</template>

<script>
export default {
  name: "Menu-tag",
  data() {
    return {
      milanga:"De pollo o ternera acompañada de una guarnición a elección"
    }
  }
}
</script>

<style scoped>

body {
  display: flex;
  border: 2px solid grey;
  flex-direction: row;
  width: 250px;
  justify-content: space-around;
}

h1 {
  text-align: center;
}

#contenido {
  display: flex;
}

.principal {
  margin-left: 22%;
}

.postre {
  margin-left: 22%;
}

#opciones {
  display:flex;
  border: 2px solid grey;
  border-radius: 15px;
  flex-direction: column;
  width: 220px;
  justify-content: space-around;
  margin-top: 10px;
  padding: 5px;
}

#opciones img{
  width: 220px;
  height: 130px;
  border-radius: 5px;
}

#opciones p{
  margin-top: 8px;
  margin-bottom: 3px;
}

#precio{
  font-weight: bold;
}

</style>