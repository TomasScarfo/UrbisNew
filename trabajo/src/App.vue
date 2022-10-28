<template>
  <div id="header-div">
    <Header/>
    <br/>
    <Buttons/>
  </div>

  <br/>
  <br/>
  <br/>

  <div id="components">
    <Home v-if="menu.home" v-on:menuEvent="selectedOption()"/>
    <Menu v-if="menu.carta"/>
    <Pedir v-if="menu.pedidos"/>

  </div>

</template>


<script>
import Header from "@/components/Header";
import Buttons from "@/components/Botones";
import Home from "@/components/Home";
import Menu from "@/components/Menu";
import Pedir from "@/components/Pedir";


export default {
  name: 'App',
  components: {
    Buttons,
    Header,
    Home,
    Menu,
    Pedir,
  },
  data() {
    return {
      menu: {
        activeOption: 'home',
        home: false,
        carta: true,
        pedidos: false,
        redes: false,
        preguntas: false
      }
    }
  },
  methods: {
    selectedOption(option) {
      let oldOption = this.menu.activeOption;
      this.menu.activeOption = option;
      this.menu[oldOption] = false;
      this.menu[this.menu.activeOption] = true
    }
  }
}


</script>

<style>


</style>
