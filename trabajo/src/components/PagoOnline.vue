<template>
  <Header/>
  <TheButtons/>
  <h1>Este es el resumen:</h1>
    <carrito v-for="(item, index) in carrito" v-bind:key="index"
            v-bind:producto="item.producto"
            v-bind:precio="item.precio"
    />

  <Footer/>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TheButtons from "@/components/Botones";
import carrito from "@/components/Carrito";


export default {
  name: "PagoOnline",
  props: [
    "producto",
    "img",
    "precio",
    "descripcion",
    "entradaElegida"
  ],
  components: {
    Header,
    TheButtons,
    Footer,
    carrito
  },
  data() {
    return {
      carrito: []
    }
  }
}
</script>

<style scoped>

</style>