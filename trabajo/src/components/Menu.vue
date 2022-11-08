<template>
  <Header/>
  <TheButtons/>

  <h1>MENU</h1>

  <hr>

  <div id="contenido">
    <div id="entradas">
      <b>ENTRADAS</b>
      <MenuItem v-for="(item, index) in entradas"
               v-bind:key="index"
               v-bind:producto="item.producto"
               v-bind:img="item.img"
               v-bind:precio="item.precio"
               v-bind:descripcion="item.descripcion"
      />
    </div>
    <div id="principal">
      <b>PLATO PRINCIPAL</b>
      <MenuItem v-for="(item, index) in principal"
               v-bind:key="index"
               v-bind:producto="item.producto"
               v-bind:img="item.img"
               v-bind:precio="item.precio"
               v-bind:descripcion="item.descripcion"
      />
    </div>
    <div id="postre">
      <b>POSTRE</b>
      <MenuItem v-for="(item, index) in postre"
               v-bind:key="index"
               v-bind:producto="item.producto"
               v-bind:img="item.img"
               v-bind:precio="item.precio"
               v-bind:descripcion="item.descripcion"
      />
    </div>
  </div>

  <br>
<Footer/>
</template>

<script>
import {entradas, principal, postre} from "@/assets/js/Opciones";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TheButtons from "@/components/Botones";
import MenuItem from "@/components/MenuItem";

export default {
  name: "Menu-tag",
  props: [
    "producto",
    "img",
    "descripcion",
    "precio"
  ],
  components: {
    MenuItem,
    TheButtons,
    Header,
    Footer,
  },
  data() {
    return {
      entradas: entradas,
      principal: principal,
      postre: postre,
    }
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
  place-content: center;
  margin: 8px;
}

#principal {
  margin-left: 22%;
}

#postre {
  margin-left: 22%;
}

Footer{
  margin-top: 10px;
}

</style>
