<template>
  <Header/>
  <TheButtons/>
  <h1>Este es el resumen:</h1>
    <li> {{entradaElegida}} </li>

  <Footer/>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TheButtons from "@/components/Botones";


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
  },
  data() {
    return {
      entradaElegia: "entradaElegida"
    }
  }
}
</script>

<style scoped>

</style>