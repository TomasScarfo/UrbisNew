<template>
  <TheHeader/>
  <TheButtons/>

  <div id="contacto">
    <h1>Contactanos hoy!</h1>
    <h3>Tel: (011) 6886-7852</h3>
    <h3>Instagram: @SomosUrbis</h3>
    <h3>Twitter: @Urbisneta</h3>
  </div>

  <FooterTag/>
</template>

<script>
import FooterTag from "@/components/Footer";
import TheHeader from "@/components/Header";
import TheButtons from "@/components/Botones";

export default {
  name: "Redes-tag",
  components: {
    TheButtons,
    TheHeader,
    FooterTag
  }
}
</script>

<style scoped>
#all {
  background-color: linen;
}
#contacto {
  background-color: rgb(221, 225, 228);
  width: 36%;
  margin-left: 32%;
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
</style>