<template>
  <section>
    <div class="meal-head">
      <h1>FRESH WEEKLY</h1>
      <h1>MEAL PREP</h1>
      <h2>New menu every month</h2>
      <h2>All meals are high in protein, convenient, freezable, ethical, nutritionally balanced and delicious.</h2>
      <div class="pricing-container">
        <h2 class="pricing-title">package pricing</h2>
        <div class="package-pricing">
          <div>
            <h3>
              UP TO 4 MEALS<br />
              £9.25 EACH
            </h3>
          </div>
          <div>
            <h3>
              5 to 9 meals<br />
              £9.00 EACH
            </h3>
          </div>
          <div>
            <h3>
              10 to 19 meals<br />
              £8.50 EACH
            </h3>
          </div>
          <div>
            <h3>
              20 meals or more<br />
              £8.00 EACH
            </h3>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="meal-main">
    <div class="choose">
      <h3>Menu options:</h3>
      <div v-for="meal in meals" :key="meal.id" class="mains">
        <h4>{{ meal.title }}</h4>
        <p>{{ meal.description }}</p>
        <button
          @click.stop.prevent="
            addToMealCart(meal);
            updateMealCartTotal();
          ">
          Select
        </button>
      </div>
    </div>
    <div class="staging">
      <div class="selection">
        <h3>Your selection:</h3>
        <div v-for="item in mealCart" :key="item.id">
          <h4>{{ item.title }}</h4>
          <p>{{ item.description }}</p>
          <div class="remove-increment">
            <div class="inc-dec"><button @click.stop.prevent="decrementQuantity(item.id); updateMealCartTotal(); saveMealCartToLocalStorage()">-</button> {{ item.quantity }} <button @click.stop.prevent="incrementQuantity(item.id); updateMealCartTotal(); saveMealCartToLocalStorage()">+</button></div>
            <a @click.stop.prevent="removeFromCart(item.id); updateMealCartTotal(); saveMealCartToLocalStorage()"><font-awesome-icon :icon="['fas', 'trash-can']" size="xl" class="icon" /></a>
          </div>
        </div>
        <div class="meal-total">
          <div v-if="this.mealCartSubTotal >= 5 && this.mealCartSubTotal <= 9">You have {{ mealCartSubTotal }} meals. This will be £9.00 a meal.</div>
          <div v-else-if="this.mealCartSubTotal >= 10 && this.mealCartSubTotal <= 19">You have {{ mealCartSubTotal }} meals. This will be £8.50 a meal.</div>
          <div v-else-if="this.mealCartSubTotal >= 20">You have {{ mealCartSubTotal }} meals. This will be £8.00 a meal.</div>
          <div v-else-if="this.mealCartSubTotal < 5 && this.mealCartSubTotal > 0">You have {{ mealCartSubTotal }} meals. This will be £9.25 a meal.</div>
          <div v-else>Select a meal.</div>
        </div>
        <div>Your sub-total is £{{ this.subTotal }}</div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "mealPrep",
  data() {
    return {
      staging: [],
      meals: [
        { id: 1, title: "Beef", description: "description here", quantity: 1 },
        { id: 2, title: "Chicken", description: "description here", quantity: 1 },
        { id: 3, title: "Lamb", description: "description here", quantity: 1 },
        { id: 4, title: "Pork", description: "description here", quantity: 1 },
        { id: 5, title: "Vege", description: "description here", quantity: 1 },
      ],
    };
  },

  computed: {
    runCheck() {
      return console.log("this is the meal cart:", this.mealCart, "this is the meal cart total:", this.mealCartTotal);
    },

    ...mapState(["mealCart", "mealCartTotal"]),

    mealCartSubTotal() {
      return this.mealCart.reduce((total, item) => total + item.quantity, 0);
    },

    subTotal() {
      let scaled = 9;
      let rx = 8.5;
      let rxPlus = 8;
      if (this.mealCartSubTotal >= 5 && this.mealCartSubTotal <= 9) {
        return this.mealCartSubTotal * scaled;
      } else if (this.mealCartSubTotal >= 10 && this.mealCartSubTotal <= 19) {
        return this.mealCartSubTotal * rx;
      } else if (this.mealCartSubTotal >= 20) {
        return this.mealCartSubTotal * rxPlus;
      } else if (this.mealCartSubTotal < 5) {
        return this.mealCartSubTotal * 9.25;
      } else {
        return 0;
      }
    },
  },

  methods: {
    ...mapMutations([
      "addToMealCart",
      "calculateMealCartTotal",
      "incrementQuantity",
      "decrementQuantity",
      "removeFromCart",
      "saveMealCartToLocalStorage",
      "updateCartTotalWithPackages",
    ]),

    updateMealCartTotal() {
      this.$store.commit("calculateMealCartTotal");
      this.$store.commit("updateCartTotalWithPackages");
    },

  },

  mounted() {
    
  },
};
</script>
<style lang="scss">
.meal-head {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .pricing-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: var(--tertiary-colour);
    color: var(--alt-text-colour);
    width: 90%;
    margin: 2rem;
    border-radius: 10px;
    .pricing-title {
      margin: 0.5rem;
    }
    .package-pricing {
      display: flex;
      flex-direction: row;
      align-items: space-evenly;
      justify-content: space-evenly;
      h3 {
        margin: 0.5rem;
      }
    }
  }
}
.meal-main {
  display: flex;
  flex-direction: row;
  margin: 2rem;
  justify-content: space-evenly;
  .choose {
    border: solid 1px var(--primary-colour);
    padding: 2rem;
    width: 50%;
    margin: 1rem;
    border-radius: 10px;
    background-color: var(--tertiary-colour);
    color: var(--alt-text-colour);
    .mains {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      button {
        background-color: var(--primary-colour);
        color: var(--alt-text-colour);
        border-radius: 5px;
        padding: 0.5rem;
      }
    }
    .sides {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      button {
        background-color: var(--primary-colour);
        color: var(--alt-text-colour);
        border-radius: 5px;
        padding: 0.5rem;
      }
    }
  }
  .staging {
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: space-between;
    border: solid 1px var(--primary-colour);
    padding: 2rem;
    width: 50%;
    margin: 1rem;
    border-radius: 10px;
    background-color: var(--tertiary-colour);
    color: var(--alt-text-colour);
    .selection {
      .remove-increment {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        a {
          color: var(--alt-text-colour);
          padding: 0.5rem;
        }
        .inc-dec {
          button {
            background-color: var(--primary-colour);
            color: var(--alt-text-colour);
            border-radius: 5px;
            padding: 0.25rem 0.5rem;
          }
        }
      }
      .meal-total {
        margin: 2rem;
      }
    }
  }
}
@media only screen and (orientation: portrait) {
  .meal-main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0;
    .choose {
      .mains,
      .sides {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
  }
}
</style>
