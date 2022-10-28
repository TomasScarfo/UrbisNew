<template>
    
    <img src="../assets/placeholder_restaurant.jpg" alt="" class="icon-2">

  <section id="encab">
    <h1> {{ title }}</h1>
    <a target="_blank" href="https://www.google.com.ar/maps/place/Urbis+Bar+Restaurante/@-34.602708,-58.3732216,17z/data=!3m1!4b1!4m5!3m4!1s0x95a33532cfbb93a1:0x68be8a70e7b328d2!8m2!3d-34.6027124!4d-58.3710329">
      <p>{{ ubicacion }}</p>
    </a>
    <h5>{{horario}}</h5>


  </section>
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


#encab {
  height: 178px;
}

.icon {
  padding: 10px;
  margin: 10px;
  width: 180px;
  float: right;
}

.icon-2 {
  padding: 10px;
  margin: 10px;
  width: 180px;
  float: left;
}

section{
  font-size: x-large;
  border: 2px solid black ;
  padding-left: 35%;
  color: black;
}

h1{
  font-style: oblique;
  float: left;
  margin-left: 110px;
  text-align: center;
  margin-top: 50px;

}

p{
  font-style: italic;
  font-size: smaller;
  margin-left: 230px;
  margin-top: 85px;
  color: black;
  width: 40%;
  display: flex;
}

h5{
  float: right;
  margin-right: 10px;


}
</style>