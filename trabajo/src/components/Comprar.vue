<template>
    <option value="{{producto}}">{{producto}}</option>
</template>

<script>
export default {
  name: "Comprar-tag",
  props: [
    "producto",
    "img",
    "precio",
    "descripcion"
  ],
}
</script>

<style scoped>

</style>