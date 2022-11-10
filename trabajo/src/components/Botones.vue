<template>
  <div id="all">

    <router-link :to="{name: 'HomeRoute'}">
      <a href="">Inicio</a>
    </router-link>
    <router-link :to='{name: "Menu"}'>
      <a href="">Menú</a>
    </router-link>
    <router-link :to="{name: 'Reseñas'}">
      <a href="">Reseñas</a>
    </router-link>
    <router-link :to="{name: 'PedidosOnline'}">
      <a id="pedidos"> Pedidos Online </a>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "the-buttons",
  emits: ['menuEvent']
}
</script>

<style scoped>

#all {
  height: auto;
  padding: 15px;
  opacity: 1;
  align-self: center;
  text-align: center;
  margin: 3% 0 3% 1.5%;


}

a {
  padding: 10px;
  background-color: black;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  margin: 1px;
  text-decoration: none;
}

a:hover {
  background-color: rgb(128, 150, 142);

}



</style>