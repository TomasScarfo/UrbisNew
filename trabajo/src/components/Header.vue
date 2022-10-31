<template>
  <div id="header-content">
    
    <img src="../assets/placeholder_restaurant.jpg" alt="">


    <h1> {{ title }}</h1>

    <div id="subtitle">
    <a target="_blank" href="https://www.google.com.ar/maps/place/Urbis+Bar+Restaurante/@-34.602708,-58.3732216,17z/data=!3m1!4b1!4m5!3m4!1s0x95a33532cfbb93a1:0x68be8a70e7b328d2!8m2!3d-34.6027124!4d-58.3710329">
      <p>{{ ubicacion }}</p>
    </a>
    <h5>{{horario}}</h5>
    </div>

  </div>

</template>

<script>

export default {
  name: 'the-Header',
  data() {
    return {
      date: '27/10/2022',
      clima: '18° C - Nublado',
      title: 'Urbis Resto Bar',
      ubicacion: '25 de Mayo 437',
      horario: 'Lunes a Viernes, de 8 a 18 horas'

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
  background: #f6f4ef;
  border-bottom: 2px solid gray;
  box-shadow: 0 4px darkgrey;
  text-align: center;
}

img{
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

h1{
  font-size: 300%;

}

#subtitle{
  font-size: 18px;
}








</style>