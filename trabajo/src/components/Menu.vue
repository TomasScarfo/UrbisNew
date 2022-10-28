<template>
  <h1>MENU</h1>

  <hr>
  <div id="contenido">
    <section class="entrada">
      <b>ENTRADA</b>

      <div id="opciones">
        <img src="../assets/tortilla.png">
        <p>Tortilla</p>
        <p>$700</p>
      </div>

      <div id="opciones">
        <img src="../assets/buñelos.png">
        <p>Buñelos</p>
        <p>$500</p>
      </div>

      <div id="opciones">
        <img src="../assets/tortilla.png">
        <p>Gambas</p>
        <p>$1000</p>
      </div>

      <div id="opciones">
        <img src="../assets/tortilla.png">
        <p>Lengua</p>
        <p>500</p>
      </div>
    </section>

    <section class="principal">
      <b>PRINCIPAL</b>

      <div id="opciones">
        <img src="../assets/milanesa.png">
        <p>Milanesa</p>
        <p>500</p>
      </div>

      <div id="opciones">
        <img src="../assets/ñoquis.png">
        <p>Ñoquis</p>
        <p>500</p>
      </div>

      <div id="opciones">
        <img src="../assets/tortilla.png">
        <p>Plato</p>
        <p>500</p>
      </div>

      <div id="opciones">
        <img src="../assets/fideos.jpg">
        <p>Fideos</p>
        <p>500</p>
      </div>
    </section>

    <section class="postre">
      <b>POSTRE</b>

      <div id="opciones">
        <img src="../assets/flan.png">
        <p>Flan</p>
        <p>500</p>
      </div>

      <div id="opciones">
        <img src="../assets/vigilante.png">
        <p>Vigilante</p>
        <p>500</p>
      </div>

      <div id="opciones">
        <img src="../assets/tortilla.png">
        <p>Plato</p>
        <p>500</p>
      </div>

      <div id="opciones">
        <img src="../assets/tortilla.png">
        <p>Plato</p>
        <p>500</p>
      </div>
    </section>
  </div>

</template>

<script>
export default {
  name: "Menu-tag"
}
</script>

<style scoped>
body{
  display:flex;
  border: 2px solid grey;
  flex-direction: row;
  width: 250px;
  justify-content: space-around;
}

#contenido {
  display:flex
}

.principal {
  margin-left: 22%;
}

.postre{
  margin-left: 22%;
}

#opciones {
  display:flex;
  border: 2px solid grey;
  flex-direction: row;
  width: 200px;
  justify-content: space-around;
  padding: 10px auto 10px auto;
  margin-top: 10px;
}

#opciones p{
  width: 90px;
  text-align: center;
  padding-top: 30px;
}

#opciones img{
  width: 100px;
  height: 100px;
  border-radius: 5px;
}

</style>