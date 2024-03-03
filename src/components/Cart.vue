<template>
  <div class="cart-container">
    <div class="cart-title">
      <h2>Your Cart</h2>
      <h2>
        Cart Total <span>£{{ cartTotal }}</span>
      </h2>
    </div>
    <template v-if="cart.length > 0">
      <div class="cart-head">
        <div v-for="product in cart" :key="product.id" class="cart-item">
          <div class="cart-img">
            <img :src="product.image" alt="" />
            <img :src="product.image" alt="" />
          </div>
          <div class="cart-info">
            <h2>{{ product.title }}</h2>
            <h2>{{ product.description }}</h2>
            <h2>£{{ product.price }}</h2>
          </div>
          <div class="remove-quantity">
            <div>
              <button @click.stop.prevent="incrementQuantity(product.id)">+</button>
              <h2>{{ product.quantity }}</h2>
              <button @click.stop.prevent="decrementQuantity(product.id)">-</button>
            </div>
            <a @click.stop.prevent="removeFromCart"><font-awesome-icon :icon="['fas', 'trash']" size="xl" class="icon" /></a>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <h2>It's empty, add something.</h2>
    </template>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "cartItem",
  data() {
    return {};
  },

  created() {
    this.$store.dispatch("loadCartFromLocalStorage");
  },

  computed: {
    cartTotal() {
      return this.$store.getters?.cartTotal;
    },
    cart() {
      return this.$store.getters.getCart;
    },
    ...mapState(["cart"]),
  },

  methods: {
    removeFromCart(productId) {
      this.$store.commit("removeFromCart", productId);
    },
    incrementQuantity(productId) {
      this.$store.dispatch("incrementQuantity", productId);
    },
    decrementQuantity(productId) {
      this.$store.dispatch("decrementQuantity", productId);
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
  align-items: center;
  height: 90vh;
  padding: 1rem 1rem;
  .cart-title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1rem;
    h2 {
      font-size: xx-large;
    }
  }

  .cart-head {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    width: 100%;
  }
  .cart-item {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: rgba(255, 255, 255, 0.7);
    color: var(--text-colour);
    margin: 0.5rem;
    border-radius: 10px;
    width: 70%;
    .cart-img {
      display: flex;
      flex-direction: row;
      img {
        width: 10rem;
        margin: 0.25rem;
        border-radius: 5px;
      }
    }
    .remove-quantity {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
      width: 15%;
      h2 {
        margin: 0;
      }
      .icon {
        color: var(--primary-colour);
      }
      button {
        background-color: var(--primary-colour);
        color: var(--alt-text-colour);
        border: none;
        border-radius: 5px;
        padding: 0.5rem;
        margin: 0.5rem;
        box-shadow: 2px 2px 2px var(--tertiary-colour);
      }
    }
    .cart-info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      h2 {
        color: var(--text-colour);
        margin: 0.5rem;
        text-align: left;
      }
    }
  }
  .cart-total {
    color: var(--alt-text-colour);
  }
}
</style>
