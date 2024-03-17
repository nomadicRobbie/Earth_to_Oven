<template>
  <section class="store-container">
    <section class="store-header">
      <h1>Delicatessen</h1>
    </section>
    <section class="store-content">
      <div class="subtitle">
        <h2>Whatever you are looking for, we can help. We have plenty to choose from our collection of delicious deli delights!</h2>
        <h3>{{ content.contentP2 }} <router-link to="/hireUs">Get in Touch.</router-link></h3>
        <p>{{ content.contentP3 }}</p>
      </div>
      <img src="../../public/images/eto-shop3.png" alt="" />
    </section>
    <section class="cart">
      <div class="cart-head">
        <h2>Basket</h2>
      </div>
      <router-link to="/basket">
        <div class="cart-total">
          <font-awesome-icon :icon="['fas', 'basket-shopping']" size="2x" class="icon" />
          <h2 v-if="cartQuantity === 1">{{ cartQuantity }} item in your cart</h2>
          <h2 v-else-if="cartQuantity > 1">{{ cartQuantity }} items in your cart</h2>
          <h2 v-else>Your cart is empty</h2>
        </div>
      </router-link>
    </section>
    <section class="store-items">
      <div v-for="product in products" :key="product.id" class="item">
        <div class="inner-item">
          <div class="item-content">
            <h2>{{ product.title }}</h2>
            <h2>£{{ product.price }}</h2>
            <p>{{ product.description }}</p>
          </div>
          <div class="images">
            <img :src="product.image" alt="" class="item-image" />
            <img :src="product.image" alt="" class="item-image" />
          </div>
        </div>
        <button @click.stop.prevent="addToCart(product)">Add to Basket</button>
      </div>
    </section>
  </section>
</template>

<script>
// import sha1 from "sha1";
// ShopView.vue
import { useStore } from "vuex";
import { mapState } from "vuex";

export default {
  name: "ShopView",
  components: {},
  setup() {
    const store = useStore();

    const addToCart = (product) => {
      store.commit("addToCart", product);
    };

    return { addToCart };
  },
  data() {
    return {
      content: {
        contentP1: "Whatever you are lookimg for we can help, from our collection of delicious deli delights we give you some of our favourites and of course all of yours!",
        contentP2: "If there is something you can't find, and think you should be able to find.",
        contentP3: "We are always looking to add more delights to our delicatessen, so come back and check regualarly. Because you might be mssing out!",
      },
      products: [
        {
          id: 1,
          title: "Zingy Pickled Cabbage",
          description: "item description",
          price: 10,
          quantity: 1,
          image: "/images/imageplaceholder.jpg",
        },
        {
          id: 2,
          title: "Banging Beet Ketchup",
          description: "item description",
          price: 20,
          quantity: 1,
          image: "/images/imageplaceholder.jpg",
        },
        {
          id: 3,
          title: "Chocolate Brownie",
          description: "item description",
          price: 30,
          quantity: 1,
          image: "/images/imageplaceholder.jpg",
        },
      ],
    };
  },

  computed: {
    ...mapState(["cart"]),
    cart() {
      return this.$store.state.cart;
    },

    cartQuantity() {
      return this.$store.getters.cartQuantity;
    },
  },
  methods: {},
};
</script>
<style scoped lang="scss">
.store-container {
  width: 100%;
  // height: 100vh;
  display: flex;
  flex-direction: column;

  p {
    padding: 1rem;
  }
  .store-header {
    height: 100%;
    // margin-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
      padding: 3rem;
    }
    p {
      font-size: larger;
    }
  }

  .store-content {
    display: flex;
    flex-direction: row;
    background-size: cover;
    background-position: center;
    padding: 3rem;
    .subtitle {
      display: flex;
      flex-direction: column;
      padding: 3rem;
      border-radius: 10px;
      a {
        text-decoration: none;
      }
    }
  }

  .cart {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    background-color: var(--primary-colour);
    .cart-head {
      color: var(--alt-text-colour);
      height: 100%;
    }
    a {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: var(--alt-text-colour);
      text-decoration: none;
      padding: 1rem;
      border-radius: 5px;
      h2 {
        margin: 0 0 1rem 0;
      }
      .icon {
        margin: 1rem 0;
      }
    }
    .cart-total {
      color: var(--alt-text-colour);
    }
  }
  .store-items {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: var(--tertiary-colour);
    .item {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: space-between;
      width: calc(50% - 15rem);
      margin: 1rem;
      border: 1px solid black;
      border-radius: 20px;
      box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
      background-color: var(--background-colour);
      transition: all 500ms ease-in-out;
      button {
        width: 50%;
        margin: 0.5rem;
        padding: 0.5rem;
        background-color: var(--tertiary-colour);
        border-radius: 10px;
      }
      .inner-item {
        display: flex;
        margin: 0.5rem;
        justify-content: space-evenly;

        .item-content {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-end;
          width: 50%;
          height: 100%;
          background-color: rgba(255, 255, 255, 0.8);
          border-radius: 10px;
          h2, p {
            text-align: right;
          }
        }

        .images {
          display: flex;
          flex-direction: column;
          width: 50%;
          .item-image {
            display: flex;
            width: 100%;
            height: 50%;
            justify-content: center;
            align-items: center;
            background-color: rgba(255, 255, 255, 0.8);
            border-radius: 10px;
            margin: 0.25rem;
          }
        }
      }
    }
    .item:hover {
      box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
      background-color: var(--primary-colour);
      // color: var(--alt-text-colour);
    }
  }
}

@media only screen and (orientation: portrait) {
  .store-container {
    .store-content {
      padding: 1rem;
      background-position: center;
    }
    .store-items {
      .item {
        display: flex;
        flex-direction: column;
        width: calc(100% - 2rem);
        // height: 100%;
        .item-content {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .item-image {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
}
</style>
