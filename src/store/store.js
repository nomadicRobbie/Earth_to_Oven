// store.js
import { createStore } from "vuex";

export default createStore({
  state: {
    cart: [],
    cartTotal: 0,
    mealCart: [],
    mealCartTotal: 0,
    cartTotalWithPackages: 0,
  },
  mutations: {
    saveMealCartToLocalStorage(state) {
      localStorage.setItem("mealCart", JSON.stringify(state.mealCart));
    },

    saveCartToLocalStorage(state) {
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    loadCart(state, cart) {
      state.cart = cart;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    loadMealCart(state, mealCart) {
      state.mealCart = mealCart;
      localStorage.setItem("mealCart", JSON.stringify(state.mealCart));
    },

    calculateMealCartTotal(state) {
      if (!state.mealCart) return;
      const mealCartTotal = state.mealCart.reduce((total, item) => {
        return total + item.quantity;
      }, 0);
      state.mealCartTotal = mealCartTotal;      
      localStorage.setItem("mealCartTotal", JSON.stringify(state.mealCartTotal));
    },

    calculateCartTotal(state) {
      if (!state.cart || state.cart.length === 0) {
        state.cartTotal = 0;
      } else {
        const cartTotal = state.cart.reduce((total, item) => {
          return total + item.price * item.quantity;
        }, 0);
        state.cartTotal = cartTotal;
      }
      localStorage.setItem("cartTotal", JSON.stringify(state.cartTotal));
    },

    addToMealCart(state, item) {
      const existingItem = state.mealCart.find((meal) => meal.id === item.id);
      if (!existingItem) {
        state.mealCart.push(item);
        localStorage.setItem("mealCart", JSON.stringify(state.mealCart));
      } else {
        existingItem.quantity++;
        localStorage.setItem("mealCart", JSON.stringify(state.mealCart));
      }
    },

    incrementQuantity(state, productId) {
      const cartProduct = state.cart.find((item) => item.id === productId);
      if (cartProduct) {
        cartProduct.quantity++;
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }

      const mealCartProduct = state.mealCart.find((item) => item.id === productId);
      if (mealCartProduct) {
        mealCartProduct.quantity++;
        localStorage.setItem("mealCart", JSON.stringify(state.mealCart));
      }
    },

    decrementQuantity(state, productId) {
      const cartProduct = state.cart.find((item) => item.id === productId);
      if (cartProduct && cartProduct.quantity > 0) {
        cartProduct.quantity--;
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }

      const mealCartProduct = state.mealCart.find((item) => item.id === productId);
      if (mealCartProduct && mealCartProduct.quantity > 0) {
        mealCartProduct.quantity--;
        localStorage.setItem("mealCart", JSON.stringify(state.mealCart));
      }
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
      const cartIndex = state.cart.findIndex((item) => item.id === productId);
      if (cartIndex !== -1) {
        state.cart.splice(cartIndex, 1);
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }

      const mealCartIndex = state.mealCart.findIndex((item) => item.id === productId);
      if (mealCartIndex !== -1) {
        state.mealCart.splice(mealCartIndex, 1);
        localStorage.setItem("mealCart", JSON.stringify(state.mealCart));
      }
    },

    updateCartTotalWithPackages(state) {
      if (state.mealCartTotal === 0) {
        state.cartTotalWithPackages = state.cartTotal;
      } else if (state.mealCartTotal <= 4 && state.mealCartTotal > 0) {
        state.cartTotalWithPackages = state.mealCartTotal * 9.25 + state.cartTotal;
      } else if (state.mealCartTotal >= 5 && state.mealCartTotal < 9) {
        state.cartTotalWithPackages = state.mealCartTotal * 9.0 + state.cartTotal;
      } else if (state.mealCartTotal >= 10 && state.mealCartTotal < 19) {
        state.cartTotalWithPackages = state.mealCartTotal * 8.5 + state.cartTotal;
      } else {
        state.cartTotalWithPackages = state.mealCartTotal * 8.0 + state.cartTotal;
      }
    },

    clearMealCart(state) {
      state.mealCart = [];
      state.cartTotalWithPackages = 0;
      state.mealCartTotal = 0;
      console.log("clearing meal cart", state.mealCart);
      localStorage.removeItem("mealCart");
      localStorage.removeItem("mealCartTotal");
      localStorage.removeItem("cartTotalWithPackages");
    },
    // there appears to be an issue with the cart total with packages not updating,
    // this could be due to cartTotal and mealCartTotal not working correctly.
    // try to calculate the two separatly and then add them together.
  },
  getters: {
    getCart: (state) => {
      return state.cart;
    },

    getMealCart: (state) => {
      return state.mealCart;
    },

    getMealCartTotal: (state) => {
      return state.mealCartTotal;
    },

    cartQuantity: (state) => {
      if (!state.cart) return 0;
      return state.cart.reduce((total, item) => {
        return total + item.quantity;
      }, 0);
    },

    //cart total with packages needs to be turned into the vuex store as this
    //needs to be updated with all the other totals.
  },

  actions: {
    // Action to load the cart from local storage
    loadCartFromLocalStorage({ commit }) {
      let cart = JSON.parse(localStorage.getItem("cart"));
      let mealCart = JSON.parse(localStorage.getItem("mealCart"));
      // let mealCartTotal = JSON.parse(localStorage.getItem("mealCartTotal"));
      if (cart) {
        commit("loadCart", cart);
      }
      if (mealCart) {
        commit("loadMealCart", mealCart);
        commit("calculateMealCartTotal");
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
