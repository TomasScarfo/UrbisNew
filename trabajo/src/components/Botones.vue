<template>
  <div id="all">
    <router-link :to="{name: 'HomeRoute'}">
      <span> Inicio</span>
    </router-link>
    <router-link :to='{name: "Menu"}'>
      <span>Menú</span>
    </router-link>
    <router-link :to="{name: 'Reseñas'}">
      <span>Reseñas</span>
    </router-link>
    <router-link :to="{name: 'PedidosOnline'}">
      <span id="pedidos"> Pedidos Online </span>
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
  margin: 30px 0 30px 0;
}

span {
  padding: 10px;
  background-color: black;
  text-decoration: rgb(188, 194, 192);
  color: white;
  border-radius: 10px;
  cursor: pointer;
  margin: 1px;
}

span:hover {
  background-color: rgb(128, 150, 142);
  text-decoration: none;
}

#pedidos {
  background-color: saddlebrown;
}

#pedidos:hover {
  background-color: burlywood;
}

</style>