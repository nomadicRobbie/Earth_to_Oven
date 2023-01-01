// store.js
import { createStore } from 'vuex'


export default createStore({
  state: {
    cart: [], // your cart array
  },
  mutations: {
    // Define mutations to modify the cart state
    addToCart(state, product) {
      state.cart.push(product);
      console.log("adding item to cart", state.cart);
    },
    incrementQuantity(state, productId) {
      const item = state.cart.find(item => item.id === productId);
      if (item) {
        item.quantity++;
      }
    },
    // Add more mutations as needed
  },
  getters: {
    getCart: {
      getCart: state => {
        return state.cart;
      }
    },
    // Define getters to access the cart state
    cartTotal(state) {
      return state.cart.length > 0;
    },
  },// Add more getters as needed
});
