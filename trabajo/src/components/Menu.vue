<template>
  <h1>MENU</h1>

  <hr>

  <div id="platos">

    <div class="main-platos">

      <p><b>ENTRADA</b></p>
      <div>
        <img src="../assets/tortilla.png">
      </div>

      <div>
        <img src="../assets/buñelos.png">
      </div>

      <div>
        <img src="../assets/lengua.png">
      </div>

      <div>
        <img src="../assets/gambas.png">
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

        <div class="entrada">
          <p><b>Lengua: $600</b></p>
        </div>

        <div class="entrada">
          <p><b>Gambas: $700</b></p>
        </div>

      </div>

    </div>

    <div class="main-platos">

      <p><b>PLATOS</b></p>

      <div>
        <img src="../assets/milanesa.png">
      </div>

      <div>
        <img src="../assets/ñoquis.png">
      </div>

      <div>
        <img src="../assets/carne.png">
      </div>

      <div>
        <img src="../assets/pollo.png">
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

        <div class="principal">
          <p><b>Carne: $1100</b></p>
        </div>

        <div class="principal">
          <p><b>Pollo: $900</b></p>
        </div>

      </div>

    </div>

    <div class="main-platos">

      <p><b>POSTRE</b></p>

      <div>
        <img src="../assets/flan.png">
      </div>

      <div>
        <img src="../assets/vigilante.png">
      </div>

      <div>
        <img src="../assets/helado.png">
      </div>

      <div>
        <img src="../assets/cafe.png">
      </div>

    </div>

    <div class="main-platos">

      <div class="m-platos">

        <div class="postre">
          <p><b>Flan: $600</b></p>
        </div>

        <div class="postre">
          <p><b>Vigilante: $500</b></p>
        </div>

        <div class="postre">
          <p><b>Helado: $400</b></p>
        </div>

        <div class="postre">
          <p><b>Cafe: $300</b></p>
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

.main-platos{
  display: flex;
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
  margin-top: 82px;
  text-align: left;
  width: 120px;
  display: flex;
}

.principal{
  margin-top: 82px;
  text-align:left;
  width: 120px;
  display: flex;
}

.postre{
  margin-top: 82px;
  text-align: left;
  width: 120px;
  display: flex;
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