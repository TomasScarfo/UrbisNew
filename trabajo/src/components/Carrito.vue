<template>
  <div id="cart-item-container">
    <span class="item-text">{{ producto}}</span>
    <span class="item-price">$ {{ precio }}</span>
  </div>

  <div>
    Total: {{total}}
    <input id="order-submit" type="submit" value="Ordenar" v-on:click="ordenar()">
  </div>

</template>

<script>

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
    agregarCarrito(item) {
      let foundItem = this.carrito.find((itemCart, index) => {
        if (foundItem === undefined) {
          item.subtotal = Number(item["precio"]);
          this.carrito.push(item);
      }
    })
    },
    ordenar() {
    this.$router.push({
      name: "FinalizarPedido",
      query: {carrito: JSON.stringify(this.carrito)}
      })
    }
  }
}
</script>

<style scoped>
body{
  flex-direction: row;
}
</style>