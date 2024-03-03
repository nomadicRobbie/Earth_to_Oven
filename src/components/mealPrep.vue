<template>
  <section>
    <div>
      <h1>FRESH WEEKLY MEAL PREP SERVICE</h1>
      <h2>New menu every month</h2>
      <h2>All meals are high in protein, convenient, freezable, ethical, nutritionally balanced and delicious.</h2>
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
      <h3>Your selection:</h3>
      <div v-for="(item, index) in staging" :key="item.id">
        <h4>{{ item.title }}</h4>
        <p>{{ item.description }}</p>
        <div class="remove-increment">
          <div><button @click.stop.prevent="decrement(index)">-</button> {{ item.quantity }} <button @click.stop.prevent="increment(index)">+</button></div>
          <a @click.stop.prevent="removeFromStaging(index)"><font-awesome-icon :icon="['fas', 'trash']" size="xl" class="icon" /></a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
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
  methods: {
    select(item) {
      this.staging.push(item);
      this.saveToLocalStorage();
    },
    increment(index) {
      this.staging[index].quantity++;
      this.saveToLocalStorage();
    },
    decrement(index) {
      if (this.staging[index].quantity == 1) {
        this.removeFromStaging(index);
        this.saveToLocalStorage();
      } else {
        this.staging[index].quantity--;
        this.saveToLocalStorage();
      }
    },
    removeFromStaging(index) {
      this.staging.splice(index, 1);
      this.saveToLocalStorage();
    },
    saveToLocalStorage() {
      localStorage.setItem("staging", JSON.stringify(this.staging));
    },
  },
};
</script>
<style lang="scss">
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
    }
    .sides {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }
  .staging {
    border: solid 1px var(--primary-colour);
    padding: 2rem;
    width: 50%;
    margin: 1rem;
    border-radius: 10px;
    background-color: var(--tertiary-colour);
    color: var(--alt-text-colour);
    .remove-increment {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
    }
  }
}
</style>
