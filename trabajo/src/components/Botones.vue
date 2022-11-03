<template>
  <div id="botones">
    <span v-on:click="$emit('menuEvent', 'home')"> Inicio</span> |
    <span v-on:click="$emit('menuEvent', 'carta')"> Menú</span> |
    <router-link :to="{ name: 'PedidosRoute' }">
      <span> Pedidos Online </span>
    </router-link> |
    <span v-on:click="$emit('menuEvent', 'redes')">Redes</span>
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
  width: 40%;
  padding: 15px;
  opacity: 1;
  align-self: center;
  margin-left:39%;
  margin-right: 30%;

}

#botones span {
  padding: 10px;
  text-decoration: rgb(188, 194, 192);
  background-color: black;
  color: white;
  border-radius: 10px;
  cursor: pointer;
}

#botones span:hover {
  background-color: rgb(128, 150, 142);
}

</style>