<template>
  <div id="all">
    <router-view/>
  </div>

</template>

<script>


export default {
<<<<<<< HEAD
  name: 'App'
=======
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
        home: false,
        carta: true,
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
>>>>>>> 6062f6b8701e753904259aab40ae01275f805983
}

</script>

<style>
<<<<<<< HEAD
=======
#all {
  background-color: linen;
}
>>>>>>> 6062f6b8701e753904259aab40ae01275f805983


</style>
