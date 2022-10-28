<template>
  <div id="botones">
    <a v-on:click="$emit('menuEvent', 'home')"> Inicio</a> |
    <a v-on:click="$emit('menuEvent', 'carta')"> Menú</a> |
    <a v-on:click="$emit('menuEvent', 'pedidos')"> Pedidos</a> |
    <a v-on:click="$emit('menuEvent', 'preguntas')"> Preguntas Frecuentes</a> |
    <a v-on:click="$emit('menuEvent', 'redes')">Redes</a>
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
  margin-left: 35%;
  margin-right: 30%;
}

#botones a {
  padding: 10px;
  text-decoration: rgb(188, 194, 192);
  background-color: black;
  color: white;
  border-radius: 10px;
}

#botones a:hover {
  background-color: rgb(128, 150, 142);
}

</style>