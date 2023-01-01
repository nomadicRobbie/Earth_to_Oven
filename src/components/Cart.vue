<template>
  <section class="cart-container">
    <div v-for="product in cart" :key="product.id" class="cart-head">
      <h2>{{ product.title }}</h2>
      <h2>{{ product.description }}</h2>
      <h2>${{ product.price }}</h2>
      <h2>{{ product.quantity }}</h2>
    </div>
  </section>
  <!-- <section v-else class="cart-container">
    <h2>Your Basket is empty</h2>
  </section> -->
</template>
<script>
// import { useStore } from 'vuex';
// import { mapState } from "vuex";
// import { mapGetters } from "vuex";
export default {
  name: "cartItem",

  data() {
    return {
      
    };
  },

  computed: {
    // ...mapState(["cart"], {
    //   cart: (state) => state.cart,
    // }),
    total() {
      return this.$store.getters.cartTotal;
    },
    cart() {
      return this.$store.getters.getCart;
    },
  },

  mounted() {
    console.log("Cart in component", this.cart, this.cart.length, this.total);
  },
};
</script>
<style lang="scss">
.cart-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  padding: 0 1rem;
  .cart-head {
    color: var(--alt-text-colour);
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .cart-total {
    color: var(--alt-text-colour);
  }
}
</style>
