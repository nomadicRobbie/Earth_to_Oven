// store.js
import { createStore } from "vuex";

export default createStore({
  state: {
    cart: [], // your cart array
  },
  mutations: {
    // Define mutations to modify the cart state
    loadCart(state, cart) {
      state.cart = cart;
    },

    incrementQuantity(state, productId) {
      const product = state.cart.find((item) => item.id === productId);
      if (product) {
        product.quantity++;
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    decrementQuantity(state, productId) {
      const product = state.cart.find((item) => item.id === productId);
      if (product.quantity === 1) {
        state.cart.splice(state.cart.indexOf(product), 1);
      } else { 
          product.quantity--;
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    addToCart(state, product) {
      const existingProduct = state.cart.find((item) => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity++;
        console.log("incrementing quantity", state.cart);
      } else {
        state.cart.push({
          ...product,
          quantity: 1,
        });
        console.log("adding item to cart", state.cart);
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    removeFromCart(state, productId) {
      const index = state.cart.find((item) => item.id === productId);
      if (index !== -1) {
        state.cart.splice(index, 1);
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    // Add more mutations as needed
  },
  getters: {
    getCart: (state) => {
      return state.cart;
    },

    cartQuantity: (state) => {
      return state.cart.reduce((total, item) => {
        return total + item.quantity;
      }, 0);
    },

    cartTotal: (state) => {
      return state.cart.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    },
  },

  actions: {
    // Action to load the cart from local storage
    loadCartFromLocalStorage({ commit }) {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        commit("loadCart", JSON.parse(storedCart));
      }
    },
    incrementQuantity({ commit }, productId) {
      commit("incrementQuantity", productId);
    },
    decrementQuantity({ commit }, productId) {
      commit("decrementQuantity", productId);
    },
  },
});
