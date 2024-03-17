// store.js
import { createStore } from "vuex";

export default createStore({
  state: {
    cart: localStorage.getItem("cart") !== null ? JSON.parse(localStorage.getItem("cart")) : [],
    mealCart: localStorage.getItem("mealCart") !== null ? JSON.parse(localStorage.getItem("mealCart")) : [],
    stagingTotal: localStorage.getItem("stagingTotal") ? JSON.parse(localStorage.getItem("stagingTotal")) : 0,

  },
  mutations: {
    // Define mutations to modify the cart state
    updateStagingTotal(state, stagingTotal) {
      state.stagingTotal = stagingTotal;
      localStorage.setItem("stagingTotal", JSON.stringify(state.stagingTotal));
    },

    loadCart(state, cart) {
      state.cart = cart;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    loadMealCart(state, mealCart) {
      state.mealCart = mealCart;
      localStorage.setItem("mealCart", JSON.stringify(state.mealCart));
    },

    calculateStagingTotal(state) {
      if (!state.mealCart) return;
      const stagingTotal = state.mealCart.reduce((total, item) => {
        return total + item.quantity
      }, 0);
      state.stagingTotal = stagingTotal;
      localStorage.setItem("stagingTotal", JSON.stringify(state.stagingTotal));
    },

    addToMealCart(state, staging) {
      Object.values(staging).forEach(item => {
        state.mealCart.push(item);
      });
      localStorage.setItem("mealCart", JSON.stringify(state.mealCart));
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
      } else {
        state.cart.push({
          ...product,
          quantity: 1,
        });
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    removeFromCart(state, productId) {
      const index = state.cart.findIndex((item) => item.id === productId);
      if (index !== -1) {
        state.cart.splice(index, 1);
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    clearMealCart(state) {
      state.mealCart = [];
      console.log("clearing meal cart", state.mealCart);
      localStorage.removeItem("mealCart");
      localStorage.removeItem("stagingTotal");
    }
    // Add more mutations as needed
  },
  getters: {
    getCart: (state) => {
      return state.cart;
    },

    getMealCart: (state) => {
      return state.mealCart;
    },

    getStagingTotal: (state) => {
      return state.stagingTotal;
    },

    cartQuantity: (state) => {
      if (!state.cart) return 0;
      return state.cart.reduce((total, item) => {
        return total + item.quantity;
      }, 0);
    },

    cartTotal: (state) => {
      if (!state.cart) return 0;
      return state.cart.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    },

    cartTotalWithPackages(state) {
      if (state.stagingTotal <= 4) {
        return state.stagingTotal * 9.25 + state.cartTotal;
      } else if (state.stagingTotal >= 5 && state.stagingTotal < 10) {
        return state.stagingTotal * 9.0 + state.cartTotal;
      } else if (state.stagingTotal >= 10 && state.stagingTotal < 20) {
        return state.stagingTotal * 8.5 + state.cartTotal;
      } else if (state.stagingTotal > 20) {
        return state.stagingTotal * 8.0 + state.cartTotal;
      } else if (state.stagingTotal === 0) {
        return state.cartTotal;
      } else {
        return 0;
      }
    },
  },

  actions: {
    // Action to load the cart from local storage
    loadCartFromLocalStorage({ commit }) {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        commit("loadCart", JSON.parse(storedCart));
        commit("loadMealCart", JSON.parse(localStorage.getItem("mealCart")));
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
