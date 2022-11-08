<template>
  <Header/>
  <TheButtons/>
  <h1>Este es el resumen:</h1>
    <li>  </li>

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
    "entrada",
    "plato",
    "postre",
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
    }
  }
}
</script>

<style scoped>

</style>