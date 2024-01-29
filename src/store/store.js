// // store.js
// import Vue from 'vue';
// import Vuex from 'vuex';
import { createStore } from 'vuex'

// Vue.use(Vuex);

export default createStore({
  state: {
    cart: [], // your cart array
  },
  mutations: {
    // Define mutations to modify the cart state
    addToCart(state, product) {
      state.cart.push(product);
    },
    incrementQuantity(state, productId) {
      const item = state.cart.find(item => item.id === productId);
      if (item) {
        item.quantity++;
      }
    },
    // Add more mutations as needed
  },
  // Add getters or actions if needed
});
