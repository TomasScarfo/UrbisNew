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
    <Redes v-if="menu.redes"/>
    <Pedir v-if="menu.pedir"/>



  </div>
    <br/>
    <br/>
    <br/>

    <Footer/>
  </div>

</template>

<script>
import Header from "@/components/Header";
import Buttons from "@/components/Botones";
import Home from "@/components/Home";
import Menu from "@/components/Menu";
//import Pedir from "@/components/Pedir";
import Redes from "@/components/Redes";
import Footer from "@/components/Footer"


export default {
  name: 'App',
  components: {
    Buttons,
    Header,
    Home,
    Menu,
    //Pedir,
    Redes,
    Footer
  },
  data() {
    return {
      menu: {
        activeOption: 'home',
        home: true,
        carta: false,
        pedir: false,
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
  background-color: linen;
}


</style>
