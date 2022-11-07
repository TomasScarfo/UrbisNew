<template>
  <div id="header-content">

    <router-link :to="{name: 'HomeRoute'}">
      <img src="../assets/img/placeholder_restaurant.jpg" id="logo" alt="">
    </router-link>

    <h1> {{ title }}</h1>

    <div id="subtitle">
      <div id="loc">
        <a href= "https://www.google.com.ar/maps/place/Urbis+Bar+Restaurante/@-34.602708,-58.3732216,17z/data=!3m1!4b1!4m5!3m4!1s0x95a33532cfbb93a1:0x68be8a70e7b328d2!8m2!3d-34.6027124!4d-58.3710329" target="_blank">
          <img src="../assets/img/location.jpg" id="loc-img" v-bind:title="direccion">
        </a>
        <p>{{ ubicacion }}</p>
      </div>
      <h5>{{ horario }}</h5>
    </div>

  </div>

</template>

<script>

export default {
  name: 'the-Header',
  data() {
    return {
      title: 'Urbis Resto Bar',
      ubicacion: '25 de Mayo 437',
      horario: 'Lunes a Viernes, de 8 a 18 horas',
      direccion: "Llevame!! - GoogleMaps"
    }
  }
}

</script>



<style scoped>

#header-content{
  display: flex;
  flex-direction: row;
  padding: 10px;
  justify-content: space-around;
  background: #c5b19b;
  border-bottom: 2px solid gray;
  box-shadow: 0 4px darkgrey;
  text-align: center;
}

#logo {
  width: 100px;
  height: 100px;
  margin-top: 10px;
}

h1{
  font-size: 300%;
  margin-left: 9%;

}

#subtitle {
  font-size: 18px;
  display: inline-block;
  flex-direction: row;
}

#loc-img {
  width: 20px;
  height: 20px;
  margin: 18px;

}

#loc {
  flex-direction: row;
  display: flex;
}
</style>