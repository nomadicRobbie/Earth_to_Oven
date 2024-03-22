<template>
  <div class="cart-container">
    <div class="cart-title">
      <h2>Your Cart</h2>
      <h2>
        Total <span>£{{ cartTotalWithPackages }}</span>
      </h2>
    </div>
    <template v-if="this.mealCart.length > 0 || this.cart.length > 0">
      <div class="cart-head">
        <div v-if="this.mealCart.length > 0" class="cart-item">
          <img src="../../public/images/imageplaceholder.jpg" alt="" class="cart-img" />
          <div v-if="this.mealCartTotal <= 4" class="cart-info">
            <h2>Base package.</h2>
            <h2>{{ this.mealCartTotal }} meals at £9.25.</h2>
            <h2>Total £{{ this.mealCartTotal * 9.25 }}</h2>
          </div>
          <div v-if="this.mealCartTotal >= 5 && this.mealCartTotal < 10" class="cart-info">
            <h2>Scaled package.</h2>
            <h2>{{ this.mealCartTotal }} meals at £9.00.</h2>
            <h2>Total £{{ this.mealCartTotal * 9.0 }}</h2>
          </div>
          <div v-if="this.mealCartTotal >= 10 && this.mealCartTotal < 20" class="cart-info">
            <h2>RX package package.</h2>
            <h2>{{ this.mealCartTotal }} meals at £8.50.</h2>
            <h2>Total £{{ this.mealCartTotal * 8.5 }}</h2>
          </div>
          <div v-if="this.mealCartTotal > 20" class="cart-info">
            <h2>RX+ package package.</h2>
            <h2>{{ this.mealCartTotal }} meals at £8.00.</h2>
            <h2>Total £{{ this.mealCartTotal * 8.0 }}</h2>
          </div>
          <div class="change-selection">
            <button>
              <router-link to="/meals" class="navTag">change your selection</router-link>
            </button>
          </div>
          <div class="remove-quantity">
            <a @click.stop.prevent="resetMealCart()"><font-awesome-icon :icon="['fas', 'trash-can']" size="xl" class="icon" /></a>
          </div>
          
        </div>

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
            <div class="inc-dec">
              <button @click.stop.prevent="incrementQuantity(product.id)">+</button>
              <h2>{{ product.quantity }}</h2>
              <button @click.stop.prevent="decrementQuantity(product.id)">-</button>
            </div>
            <a @click.stop.prevent="removeFromCart(product.id)"><font-awesome-icon :icon="['fas', 'trash-can']" size="xl" class="icon" /></a>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <h2 class="empty-cart">It's empty, add something.</h2>
    </template>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "cartItem",
  data() {
    return {};
  },

  created() {
    this.$store.dispatch("loadCartFromLocalStorage");
  },

  computed: {
    upToFour() {
      return this.mealCartTotal * 9.25;
    },
    scaledPackage() {
      return this.mealCartTotal * 9.0;
    },
    rxPackage() {
      return this.mealCartTotal * 8.5;
    },
    rxPlusPackage() {
      return this.mealCartTotal * 8.0;
    },

    ...mapGetters(["cartTotal", "getCart", "getMealCart"]),

    ...mapState(["cart", "cartTotal", "mealCart", "mealCartTotal", "cartTotalWithPackages"]),
  },

  methods: {
    ...mapMutations(["calculateCartTotal", "clearMealCart", "updateCartTotalWithPackages"]),

    removeFromCart(productId) {
      this.$store.commit("removeFromCart", productId);
      this.$store.commit("calculateCartTotal");
      this.$store.commit("updateCartTotalWithPackages");
    },
    incrementQuantity(productId) {
      this.$store.dispatch("incrementQuantity", productId);
      console.log(this.cartTotal);
      this.$store.commit("calculateCartTotal");
      this.$store.commit("updateCartTotalWithPackages");
    },
    decrementQuantity(productId) {
      this.$store.dispatch("decrementQuantity", productId);
      console.log(this.cartTotal);
      this.$store.commit("calculateCartTotal");
      this.$store.commit("updateCartTotalWithPackages");
    },
    resetMealCart() {
      this.$store.commit("clearMealCart");
      this.$store.commit("calculateCartTotal");
      this.$store.commit("updateCartTotalWithPackages");
    },
  },

  mounted() {},
};
</script>
<style lang="scss">
.cart-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
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
    padding: 0.5rem;
    background-color: rgba(255, 255, 255, 0.7);
    color: var(--text-colour);
    margin: 0.5rem;
    border-radius: 15px;
    width: 70%;
    img {
      width: 12rem;
      border-radius: 7px;
      margin: 0.25rem;
    }
    .cart-img {
      display: flex;
      flex-direction: row;
      img {
        width: 12rem;
        margin: 0.25rem;
        border-radius: 7px;
      }
    }
    .remove-quantity {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
      .inc-dec {
        padding: 1rem;
      }
      h2 {
        margin: 0;
      }
      .icon {
        color: var(--text-colour);
        padding: 2rem;
      }
      button {
        background-color: var(--tertiary-colour);
        color: var(--alt-text-colour);
        border: none;
        border-radius: 5px;
        padding: 0.5rem 0.5rem;
        margin: 0.5rem;
        width: 2rem;
        box-shadow: 2px 2px 2px var(--primary-colour);
        font-size: x-large;
      }
    }
    .change-selection {
      display: flex;
      button {
        padding: 1.5rem;
        box-shadow: 2px 2px 2px var(--primary-colour);
        border-radius: 7px;
        border: none;
        background-color: var(--tertiary-colour);
        a {
        color: var(--alt-text-colour);
        text-decoration: none;
        font-size: medium;
      }
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
  .empty-cart {
    height: 90vh;
  }
}
</style>
