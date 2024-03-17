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
      <div v-for="main in mains" :key="main.id" class="mains">
        <h4>{{ main.title }}</h4>
        <p>{{ main.description }}</p>
        <button @click.stop.prevent="select(main)">Select</button>
      </div>
      <div v-for="side in sides" :key="side.id" class="sides">
        <h4>{{ side.title }}</h4>
        <p>{{ side.description }}</p>
        <button @click.stop.prevent="select(side)">Select</button>
      </div>
    </div>
    <div class="staging">
      <div class="selection">
        <h3>Your selection:</h3>
        <div v-for="(item, index) in staging" :key="item.id">
          <h4>{{ item.title }}</h4>
          <p>{{ item.description }}</p>
          <div class="remove-increment">
            <div class="inc-dec"><button @click.stop.prevent="decrement(index)">-</button> {{ item.quantity }} <button @click.stop.prevent="increment(index)">+</button></div>
            <a @click.stop.prevent="removeFromStaging(index)"><font-awesome-icon :icon="['fas', 'trash-can']" size="xl" class="icon" /></a>
          </div>
        </div>
        <div class="meal-total">
          <div v-if="this.stagingSubTotal >= 5 && this.stagingSubTotal <= 9">You have {{ stagingSubTotal }} meals. This will be £9.00 a meal.</div>
          <div v-else-if="this.stagingSubTotal >= 10 && this.stagingSubTotal <= 19">You have {{ stagingSubTotal }} meals. This will be £8.50 a meal.</div>
          <div v-else-if="this.stagingSubTotal >= 20">You have {{ stagingSubTotal }} meals. This will be £8.00 a meal.</div>
          <div v-else-if="this.stagingSubTotal < 5 && this.stagingSubTotal > 0">You have {{ stagingSubTotal }} meals. This will be £9.25 a meal.</div>
          <div v-else>Select a meal.</div>
        </div>
        <div>Your sub-total is £{{ this.subTotal }}</div>
      </div>
      <div class="adding">
        <button
          @click.stop.prevent="
            addMealsToCart();
            updateStagingTotal();
            clearMealCart();
          ">
          Add to Basket
        </button>
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
      mains: [
        { id: 1, title: "Beef", description: "description here", quantity: 1 },
        { id: 2, title: "Chicken", description: "description here", quantity: 1 },
        { id: 3, title: "Lamb", description: "description here", quantity: 1 },
        { id: 4, title: "Pork", description: "description here", quantity: 1 },
        { id: 5, title: "Vege", description: "description here", quantity: 1 },
      ],
      sides: [
        { id: 1, title: "Rice", description: "description here", quantity: 1 },
        { id: 2, title: "Potato", description: "description here", quantity: 1 },
        { id: 3, title: "Vege", description: "description here", quantity: 1 },
        { id: 4, title: "Salad", description: "description here", quantity: 1 },
        { id: 5, title: "Pasta", description: "description here", quantity: 1 },
      ],
    };
  },

  computed: {
    ...mapState(["mealCart", "stagingTotal"]),

    stagingSubTotal() {
      return this.staging.reduce((total, item) => total + item.quantity, 0);
    },

    subTotal() {
      let scaled = 9;
      let rx = 8.5;
      let rxPlus = 8;
      if (this.stagingSubTotal >= 5 && this.stagingSubTotal <= 9) {
        return this.stagingSubTotal * scaled;
      } else if (this.stagingSubTotal >= 10 && this.stagingSubTotal <= 19) {
        return this.stagingSubTotal * rx;
      } else if (this.stagingSubTotal >= 20) {
        return this.stagingSubTotal * rxPlus;
      } else if (this.stagingSubTotal < 5) {
        return this.stagingSubTotal * 9.25;
      } else {
        return 0;
      }
    },
  },

  methods: {
    ...mapMutations(["addToMealCart", "calculateStagingTotal"]),

    clearMealCart() {
      this.staging = [];
      localStorage.removeItem("staging");
    },

    updateStagingTotal() {
      this.$store.commit("calculateStagingTotal");
    },

    addMealsToCart() {
      this.$store.commit("addToMealCart", this.staging);
    },

    select(item) {
      this.staging.push(item);
      this.saveToLocalStorage(item);
      console.log(this.staging);
    },

    increment(index) {
      this.staging[index].quantity++;
      this.saveToLocalStorage(index);
    },

    decrement(index) {
      if (this.staging[index].quantity == 1) {
        this.removeFromStaging(index);
        this.saveToLocalStorage(index);
      } else {
        this.staging[index].quantity--;
        this.saveToLocalStorage();
      }
    },

    removeFromStaging(index) {
      this.staging.splice(index, 1);
      this.saveToLocalStorage(index);
    },

    saveToLocalStorage() {
      localStorage.setItem("staging", JSON.stringify(this.staging));
    },

    getFromLocalStorage() {
      if (localStorage.getItem("staging")) {
        this.staging = JSON.parse(localStorage.getItem("staging"));
      }
    },
  },

  mounted() {
    this.getFromLocalStorage();
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
