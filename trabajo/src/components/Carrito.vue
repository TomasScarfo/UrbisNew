<template>
  <div id="cart-item-container">
    <span class="item-text">{{ producto}}</span>
    <span class="item-price">$ {{ precio }}</span>

  </div>
</template>

<script>
import {entradas, postre, principal} from "@/assets/js/Opciones";

export default {
  name: "Carrito-tag",
  props: [
      'item',
      'producto',
      'precio'
  ],
  data() {
    return {
      carrito: [],
      total: 0,
    }
  },
  methods: {
    agregarCarrito: function () {
      this.agregarCarrito.push(entradas.producto)
      this.agregarCarrito.push(principal.producto)
      this.agregarCarrito.push(postre.producto)
    }
  },
  ordenar() {
    this.$router.push({
      name: "FinalizarPedido",
      query: {total: this.precio, carrito: JSON.stringify(this.carrito)}
    })
  }
}
</script>

<style scoped>
body{
  flex-direction: row;
}
</style>