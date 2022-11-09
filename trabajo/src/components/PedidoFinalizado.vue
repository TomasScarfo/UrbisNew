<template>
  <div id="container">
    <img src="../assets/img/success.png" alt="">

    <h1>¡ EL PEDIDO SE HA REALIZADO CON EXITO !</h1>
    <h3>Pronto podra disfrutarlo</h3>
    <h5>Gracias por confiar en URBIS</h5>

    <router-link :to="{name: 'PedidosOnline'}">
      <span>Volver</span>
    </router-link>

  </div>

</template>

<script>

export default {
  name: "PedidoFinalizado"
}
</script>

<style scoped>

#container{
  flex-direction: column;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  text-align: center;
  margin: 8% 0 8% 0;
}

#container img {
  width: 200px;
}
span {
  text-align: center;
}

</style>