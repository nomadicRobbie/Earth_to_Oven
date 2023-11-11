<template>
  <section class="store-container">
    <section class="store-header">
      <h1>Delicatessen</h1>
    </section>
    <section class="store-content">
      <div class="subtitle">
        <h2>Whatever you are looking for, we can help. We have planty to choose from our collection of delicious deli delights!</h2>
        <h3>{{ content.contentP2 }}</h3>
        <h3><router-link to="/HireUs">Get in touch</router-link></h3>
        <p>{{ content.contentP3 }}</p>
      </div>
    </section>
    <section class="store-items">
      <div v-for="item in items" :key="item.id" class="item">
        <div class="item-content">
          <h2>{{ item.title }} {{ item.price }}</h2>
          <p>{{ item.description }}</p>
        </div>
        <div class="item-image">{{ item.image }}</div>
      </div>
    </section>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: "ShopView",
  components: {},
  data() {
    return {
      content: {
        contentP1: "Whatever you are lookimg for we can help, from our collection of delicious deli delights we give you some of our favourites and of course all of yours!",
        contentP2: "If there is something you can't find, and think you should be able to find. Reach out it'll take two minutes!",
        contentP3: "We are always looking to add more delights to our delicatessen, so come back and check regualarly. Because you might be mssing out!",
      },
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
    height: 100%;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
      font-size: larger;
    }
  }

  .store-content {
    background-image: url(../../public/images/eto-trailer5.jpeg);
    background-size: cover;
    padding: 10rem;
    // opacity: 0.5;
    // z-index: -1;
    .subtitle {
      display: flex;
      flex-direction: column;
      padding: 3rem;
      background-color: rgba(255, 255, 255, 0.8);
      border-radius: 10px;
      a {
        text-decoration: none;
      }
    }
  }
  .store-items {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: var(--tertiary-colour);
    .item {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: flex-start;
      width: calc(50% - 20rem);
      height: 20rem;
      margin: 1rem;
      padding: 1rem;
      border: 1px solid black;
      border-radius: 20px;
      box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
      background-color: var(--background-colour);
      transition: all 500ms ease-in-out;
      .item-content {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-end;
        width: 50%;
        height: 100%;
        background-color: var(--tertiaty-colour);
      }
      .item-image {
        display: flex;
        width: 50%;
        height: 100%;
        justify-content: center;
        align-items: center;
        background-color: rgba(255, 255, 255, 0.8);
        border-radius: 10px;
      }
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
    .store-content {
      padding: 1rem;
      background-position: center;
    }
    .store-items {
      .item {
        width: calc(100% - 2rem);
        display: flex;
        flex-direction: column;
        .item-content {
          width: 100%;
          height: 40%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .item-image {
          height: 60%;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
}
</style>
