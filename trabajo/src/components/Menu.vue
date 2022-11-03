<template>
  <Header/>
  <TheButtons/>

  <h1>MENU</h1>

  <hr>
  <div id="contenido">
    <section class="entrada">
      <b>ENTRADA</b>

      <div id="opciones">
        <img src="../assets/img/tortilla.png">
        <p>Tortilla</p>
        <p>$700</p>
      </div>

      <div id="opciones">
        <img src="../assets/img/buñelos.png">
        <p>Buñuelos</p>
        <p>$500</p>
      </div>

      <div id="opciones">
        <img src="../assets/img/gambas.png">
        <p>Gambas</p>
        <p>$1000</p>
      </div>

      <div id="opciones">
        <img src="../assets/img/lengua.png">
        <p>Lengua</p>
        <p>$1000</p>
      </div>

    </section>

    <section class="principal">
      <b>PRINCIPAL</b>

      <div id="opciones">
        <img src="../assets/img/milanesa.png">
        <p>Milanesa</p>
        <p>$1500</p>
      </div>

      <div id="opciones">
        <img src="../assets/img/ñoquis.png">
        <p>Ñoquis</p>
        <p>$1300</p>
      </div>

      <div id="opciones">
        <img src="../assets/img/pollo.png">
        <p>Pollo</p>
        <p>$1300</p>
      </div>

      <div id="opciones">
        <img src="../assets/img/carne.png">
        <p>Carne</p>
        <p>$1800</p>
      </div>

    </section>

    <section class="postre">
      <b>POSTRE</b>

      <div id="opciones">
        <img src="../assets/img/flan.png">
        <p>Flan</p>
        <p>$500</p>
      </div>

      <div id="opciones">
        <img src="../assets/img/vigilante.png">
        <p>Vigilante</p>
        <p>$500</p>
      </div>

      <div id="opciones">
        <img src="../assets/img/helado.png">
        <p>Helado</p>
        <p>$300</p>
      </div>

      <div id="opciones">
        <img src="../assets/img/cafe.png">
        <p>Cafe</p>
        <p>$200</p>
      </div>
    </section>
  </div>
<Footer/>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TheButtons from "@/components/Botones";

export default {
  name: "Menu-tag",
  components: {
    TheButtons,
    Header,
    Footer,
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
  flex-direction: row;
  width: 220px;
  justify-content: space-around;
  margin-top: 10px;
  padding: 5px;

}

#opciones p{
  width: 90px;
  text-align: center;
  padding-top: 20px;
}

#opciones img{
  width: 100px;
  height: 100px;
  border-radius: 5px;
}

</style>