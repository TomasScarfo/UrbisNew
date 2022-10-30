<template>
  <div id="all">
  <div id="header-div">
    <Header/>
    <br/>
    <Buttons @menu-event="selectedOption"/>
  </div>

  <br/>
  <br/>
  <br/>

  <div id="components">
    <Home v-if="menu.home" v-on:menuEvent="selectedOption"/>
    <Menu v-if="menu.carta"/>
    <Pedir v-if="menu.pedir"/>
    <Redes v-if="menu.redes"/>

  </div>
  </div>


</template>

<script>
import Header from "@/components/Header";
import Buttons from "@/components/Botones";
import Home from "@/components/Home";
import Menu from "@/components/Menu";
import Pedir from "@/components/Pedir";
import Redes from "@/components/Redes"


export default {
  name: 'App',
  components: {
    Buttons,
    Header,
    Home,
    Menu,
    Pedir,
    Redes
  },
  data() {
    return {
      menu: {
        activeOption: 'home',
        home: true,
        carta: false,
        pedir: false,
        preguntas: false,
        redes: false,
      }
    }
  },
  methods: {
    selectedOption(option) {
      console.log(option)
      let oldOption = this.menu.activeOption;
      this.menu.activeOption = option;
      this.menu[oldOption] = false;
      this.menu[this.menu.activeOption] = true;
    }
  }
}

</script>
<style>
#all {
  background-image: url("./assets/fondo.jpg");

}



</style>
