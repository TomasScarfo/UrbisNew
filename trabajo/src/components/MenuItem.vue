<template>
        <div id="opciones">
          <img :src="'@/assets/img/' + img" alt="Img">
          <p>{{ producto }}</p>
          <sub>{{descripcion}}</sub>
          <p id="precio">$ {{precio}}</p>
        </div>
</template>

<script>

export default {
  name: "MenuItem",
  props: [
      'producto',
      'descripcion',
      'img',
      'precio'
  ]
}
</script>

<style scoped>
#opciones {
  display:flex;
  border: 2px solid grey;
  border-radius: 15px;
  flex-direction: column;
  width: 220px;
  justify-content: space-around;
  margin-top: 10px;
  padding: 5px;
}

#opciones img{
  width: 220px;
  height: 130px;
  border-radius: 15px;
}

#opciones p{
  margin-top: 8px;
  margin-bottom: 3px;
}

#precio{
  font-weight: bold;
}

img:hover{
  opacity: 50%;
}
</style>