<template>

  <Header/>
  <Botones/>

    <div id="intro-contacto">
      <br/>
      <br/>
      <br/>

      <div id="intro">
        <h1>Sobre Nosotros</h1>
        <p>En Urbis buscamos generar una sensación de hogar</p>
        <p>en las personas que nos visitan todos los mediodias,</p>
        <p>con platos abundantes y de excelente calidad.</p>
        <p>Todos nuestros productos son de elaboración propia:</p>
        <p>carnes, pastas artesanales, minutas y muchos mas.</p>
      </div>

    </div>

  <br/>
  <br/>
  <br/>

  <div id="intro-2">
    <div class="box-tasvir">
      <marquee behavior="scroll" direction="left" scrollamount="100" scrolldelay="800">
        <img src="../assets/img/buñelos.png" alt="">
        <img src="../assets/img/milanesa.png" alt="">
        <img src="../assets/img/tortilla.png" alt="">
        <img src="../assets/img/ñoquis.png" alt="">
        <img src="../assets/img/vigilante.png" alt="">
      </marquee>

    </div>
      <h2>Ver mas platos...</h2>
      <div class="menu-boton">
        <router-link :to='{name: "Menu"}'>
          <span>Menú</span>
        </router-link>
      </div>
    </div>


  <div id="valor">
    <div class="val">
      <img src="../assets/img/delivery.png" alt="">
      <br>
      <b>ENVIOS RAPIDOS</b>
      <p>Se realizan envios con normalidad </p>
      <p> dentro de CABA y GBA. </p>
    </div>

    <div class="val">
      <img src="../assets/img/star.png" alt="">
      <br>
      <b>PRODUCTOS DE CALIDAD</b>
      <p> Nuestros productos son 100% confiables </p>
      <p> y ademas somos lideres del rubro. </p>
    </div>

    <div class="val">
      <img src="../assets/img/money.png" alt="">
      <br>
      <b>MEDIOS DE PAGO</b>
      <p> Aceptamos todos los medios de pago, </p>
      <p> incluyendo debito, credito y efectivo. </p>
    </div>

    <div class="val">
      <img src="../assets/img/atencionAlCliente.png" alt="">
      <br>
      <b>ATENCION AL CLIENTE</b>
      <p> Puede contactarse con nosotros </p>
      <p> a traves de nuestras redes sociales. </p>
    </div>

  </div>


  <Footer/>

</template>

<script>


import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Botones from "@/components/Botones";

export default {
  name: "Home-tag",
  emits: ['menuEvent'],
  components: {
    Header,
    Footer,
    Botones,
  }
}

</script>

<style scoped>

#intro {
  background-color:gainsboro;
  width: 36%;
  margin: 0 34% 0 22%;
  padding: 2% 10% 2% 10%;
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
  transition: box-shadow 1s, top 1s, left 1s;
  margin-top: -35px;
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

#intro-contacto{
  margin-left: 18%;
  width: 65%;
  height: 400px;
  place-content: center;
  background-image: url("../assets/img/restaurante-fon.jpg");
  font-family: sans-serif;
}

#intro-2{
  text-align: center;
}

#intro-2 a{
  cursor: pointer;
}

.box-tasvir{
  width: 50%;
  margin-left: 25%;
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

#valor {
  place-content: center;
  display: flex;
  margin-top: 50px;
}

.val {
  flex-direction: column;
  text-align: center;
  display: inline-block;
  margin: 10px;
}

.val img{
  width: 100px;
  height: 100px;
}

</style>