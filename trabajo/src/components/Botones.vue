<template>
  <div id="botones">
    <router-link to='/'>
      <span> Inicio</span>
    </router-link>
    <router-link to='/Menu'>
      <span>Menú</span>
    </router-link>
      <router-link to='/PedidosOnline'>
      <span> Pedidos Online </span>
    </router-link>
    <router-link to='/Redes'>
      <span>Redes</span>
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
  margin: 30px 37% 30px 37%;
}

#botones span {
  padding: 10px;
  text-decoration: rgb(188, 194, 192);
  background-color: black;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  margin: 1px;
}

#botones span:hover {
  background-color: rgb(128, 150, 142);
}

</style>