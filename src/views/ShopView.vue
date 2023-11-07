<template>
  <section class="store-container">
    <section class="store-header">
      <h1>Welcome to </h1>
      <h1>Our Delicatessen</h1>
      <p>Whatever you are lookimg for we can help, you find from our collection of delicious deli delights!</p>
    </section>
    <section class="store-items">
      <div v-for="item in items" :key="item.id" class="item">
        <h2>{{ item.title }} {{ item.price }}</h2>
        <p>{{ item.description }}</p>
        {{ item.image }}
      </div>
    </section>
    <p>we always strive to add more delights to our delicatessen, so come back and check regualarly. because you might be mssing out!</p>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: "ShopView",
  components: {},
  data() {
    return {
      items: [
        {
          id: "item1",
          title: "item title 1",
          description: "item description",
          price: "$00",
          image: "item image",
        },
        {
          id: "item2",
          title: "item title 2",
          description: "item description",
          price: "$00",
          image: "item image",
        },
        {
          id: "item3",
          title: "item title 3",
          description: "item description",
          price: "$00",
          image: "item image",
        },
        {
          id: "item4",
          title: "item title 4",
          description: "item description",
          price: "$00",
          image: "item image",
        },
        {
          id: "item5",
          title: "item title 5",
          description: "item description",
          price: "$00",
          image: "item image",
        },
        {
          id: "item6",
          title: "item title 6",
          description: "item description",
          price: "$00",
          image: "item image",
        },
        {
          id: "item7",
          title: "item title 7",
          description: "item description",
          price: "$00",
          image: "item image",
        },
        {
          id: "item8",
          title: "item title 8",
          description: "item description",
          price: "$00",
          image: "item image",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.store-container {
  width: 100%;
  // height: 100vh;
  display: flex;
  flex-direction: column;
  p {
    padding: 1rem;
  }
  .store-header {
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
      font-size: larger;
    }
  }
  .store-items {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background-color: var(--tertiary-colour);
    .item {
      display: flex;
      flex-direction: column;
      justify-content: left;
      align-items: flex-start;
      width: calc(33.33% - 10rem);
      height: 20rem;
      margin: 1rem;
      padding: 1rem;
      border: 1px solid black;
      border-radius: 5px;
      box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
      background-color: var(--background-colour);
      transition: all 500ms ease-in-out;
    }
    .item:hover {
        box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
        background-color: var(--primary-colour);
        color: var(--alt-text-colour);
      }
  }
}

@media only screen and (orientation: portrait) {
  .store-container {
    .store-items {
      .item {
        width: calc(100% - 2rem);
      }
    }
  }
}
</style>
