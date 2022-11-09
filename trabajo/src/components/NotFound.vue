<template>

  <div id="app">

    <img src="../assets/img/NotFound.png" alt="">

    <h1>Page Not Found</h1>
      <h3>¡Ups! Esta pagina no existe</h3>
        <h5>Lamentamos lo sucedido, no encontramos la pagina que nos pediste. </h5>
        <h5>Por favor vuelva a la pagina principal, o contactese con nosotros por nuestras redes. </h5>


    <router-link :to="{name: 'HomeRoute'}">
      <span>Volver</span>
    </router-link>
  </div>

</template>

<script>
export default {
  name: "NotFound"
}
</script>

<style scoped>
#app{
  flex-direction: column;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  text-align: center;
  margin: 8% 0 8% 0;
}

#all img {
  width: 200px;
}
span {
  text-align: center;
}
</style>