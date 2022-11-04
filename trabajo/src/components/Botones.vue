<template>
  <div id="botones">
    <router-link :to="{name: 'HomeRoute'}">
      <span> Inicio</span>
    </router-link>
    <router-link :to='{name: "Menu"}'>
      <span>Menú</span>
    </router-link>
      <router-link :to="{name: 'PedidosOnline'}">
      <span> Pedidos Online </span>
    </router-link>
    <router-link :to="{name: 'Reseñas'}">
      <span>Reseñas</span>
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

#botones {
  height: auto;
  width: 25%;
  padding: 15px;
  opacity: 1;
  align-self: center;
  margin: 36px 37% 30px 39%;
}

#botones span {
  padding: 10px;
  text-decoration: rgb(188, 194, 192);
  background-color: black;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  margin: 1px;
  text-decoration: none;
}

#botones span:hover {
  background-color: rgb(128, 150, 142);
  text-decoration: none;
}

</style>