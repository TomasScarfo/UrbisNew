<template>
  <div class="todo">


      <div id="intro">
        <div id="texto">

        </div>
      </div>
    <div class="container">
      <img src="../assets/mesaalmuerzo.jpg" alt="Snow" style="width:80%;">
      <div class="bottom-left"><h1>Sobre Nosotros</h1>
        <p>En Urbis buscamos generar una sensación de hogar</p>
        <p>en las personas que nos visitan todos los mediodias,</p>
        <p>con platos abundantes y de excelente calidad.</p>
        <p>Todos nuestros productos son de elaboración propia:</p>
        <p>carnes, pastas artesanales, minutas y muchos mas.</p>
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
  </div>
</template>

<script>
export default {
  name: "Home-tag",
  emits: ['menuEvent']
}
</script>

<style scoped>

.container {
  position: relative;
  text-align: center;
  color: white;
  width: 80%;
  height: ;
}

.bottom-left {
  position: absolute;
  bottom: 8px;
  left: 16px;
  background-color: azure;
  color: grey;
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





#intro-2{
  text-align: center;
  margin: 10%;
}
.box-tasvir{
  width: 600px;
  margin-left: 310px;
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