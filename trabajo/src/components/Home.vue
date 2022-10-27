<template>
  <div id="intro-contacto">

    <div id="intro">
      <h1>Sobre Nosotros</h1>
      <p>En Urbis buscamos generar una sensación de hogar</p>
      <p>en las personas que nos visitan todos los mediodias,</p>
      <p>con platos abundantes y de excelente calidad.</p>
      <p>Todos nuestros productos son de elaboración propia:</p>
      <p>carnes, pastas artesanales, minutas y muchos mas.</p>
    </div>

    <div id="contacto">
      <h1>Contactanos hoy!</h1>
      <h3>Tel: (011) 6886-7852</h3>
      <h3>Instagram: @SomosUrbis</h3>
      <h3>Twitter: @Urbisneta</h3>
      <h3></h3>
    </div>

  </div>

  <div id="intro-2">
    <hr>
    <div class="box-tasvir">
      <marquee behavior="scroll" direction="left" scrolldelay="800" scrollamount="100">
        <img src="../assets/buñelos.png">
        <img src="../assets/milanesa.png" alt="">
        <img src="../assets/tortilla.png" alt="">
        <img src="../assets/ñoquis.png" alt="">
        <img src="../assets/vigilante.png" alt="">
      </marquee>

    </div>
    <h2>Ver mas platos...</h2>
    <div class="menu-boton">
      <a v-on:click="$emit('menuEvent', 'carta')">Menú</a>
    </div>

    <br>
    <hr>
  </div>

  <div id='valoracion'>
    <h1>Contanos como fue tu experiencia</h1>
    <img id='animo-img' src="../assets/tenedor.png">

    <div id="form">
      <fieldset>
        <legend>Ingrese valoracion entre 1 y 10</legend>
        <input type="number" name="cara" id="animo-input" min="0" max="10">
        <button> Enviar </button>
        <h2 id="feedback"></h2>
      </fieldset>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home-tag",
  emits: ['menuEvent']
}
</script>

<style scoped>

#intro {
  background-color:gainsboro;
  width: 36%;
  margin-left: 100px;
  padding-top: 2%;
  padding-bottom: 2%;
  text-align: center;
  border-style: solid;
  border-width: 3px;
  box-shadow:
      10px -10px 0 -3px rgb(40, 37, 43),
      10px -10px,
      20px -20px 0 -3px rgb(40, 37, 43),
      20px -20px;
  top: 0;
  left: 0;
  float: left;
  transition: box-shadow 1s, top 1s, left 1s;
}

#intro:hover {
  top: -20px;
  left: 20px;
  box-shadow:
      0 0 0 -3px gainsboro,
      0 0,
      0 0 0 -3px gainsboro,
      0 0;
}

#contacto {
  background-color: rgb(221, 225, 228);
  width: 36%;
  padding-top: 2%;
  padding-bottom: 2%;
  text-align: center;
  border-style: solid;
  border-width: 3px;
  box-shadow:
      10px -10px 0 -3px rgb(40, 37, 43),
      10px -10px,
      20px -20px 0 -3px rgb(40, 37, 43),
      20px -20px;
  top: 0;
  left: 0;
  margin-left: 700px;
  transition: box-shadow 1s, top 1s, left 1s;
}

#contacto:hover {
  top: -20px;
  left: 20px;
  box-shadow:
      0 0 0 -3px gainsboro,
      0 0,
      0 0 0 -3px gainsboro,
      0 0;
}

#intro-contacto{
  place-content: center;
}

#intro-2{
  text-align: center;
  margin: 10%;
}
.box-tasvir{
  width: 600px;
  margin-left: 365px;
}
.box-tasvir img{
  width: 200px;
  height: 200px;

}

.menu-boton a{
  padding: 10px;
  text-decoration: rgb(188, 194, 192);
  background-color: black;
  color: white;
  border-radius: 10px;
}

.menu-boton a:hover{
  background-color: rgb(128, 150, 142);
}

#animo-img {
  width: 100px;
}

#valoracion{
  text-align: center;
  flex-direction: row;
}

fieldset {
  width: 30%;
  text-align: center;
  margin-left: 35%;
}

</style>