<template>
  <h1>MENU</h1>

  <hr>

  <div id="platos">

    <div class="main-platos">

      <p><b>ENTRADA</b></p>

      <div>
        <img src="img/tortilla.png">
      </div>

      <div>
        <img src="img/buñelos.png">
      </div>

    </div>

    <div class="main-platos">

      <div class="m-platos">

        <div class="entrada">
          <p><b>Tortilla: $500</b></p>
        </div>

        <div class="entrada">
          <p><b>Buñelitos: $600</b></p>
        </div>
      </div>

    </div>

    <div class="main-platos">

      <p><b>PLATOS</b></p>

      <div>
        <img src="img/milanesa.png">
      </div>

      <div>
        <img src="img/ñoquis.png">
      </div>

    </div>

    <div class="main-platos">

      <div class="m-platos">

        <div class="principal">
          <p><b>Mila napo: $1200</b></p>
        </div>

        <div class="principal">
          <p><b>Ñoquis: $1000</b></p>
        </div>

      </div>

    </div>

    <div class="main-platos">

      <p><b>POSTRE</b></p>

      <div>
        <img src="img/flan.png">
      </div>

      <div>
        <img src="img/vigilante.png">
      </div>

    </div>

    <div class="main-platos">

      <div class="m-platos">

        <div class="postre">
          <p><b>Flan: $500</b></p>
        </div>

        <div class="postre">
          <p><b>Vigilante: $500</b></p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Menu-tag"
}
</script>

<style scoped>
body{
  font-family: sans-serif;
  /*background-image: url('img/fondo.jpg');*/
}

.main-platos{
  display: block;
  flex-direction: column;
  justify-content: center;
}

#platos{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.m-platos{
  margin-right: 100px;
}

.entrada{
  margin-top: 100px;
  text-align: left;
  width: 120px;
}

.principal{
  margin-top: 100px;
  text-align:left;
  width: 120px;
}

.postre{
  margin-top: 100px;
  justify-content:center;
  text-align: left;
  width: 120px;
}

img{
  width: 110px;
  height: 79px;
  border-radius: 5px;
  margin: 25px;
}

h1{
  text-align: center;
}
</style>