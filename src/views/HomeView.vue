<template>
  <section class="home-container">
    <!-- <section class="home-header"></section> -->
    <section class="home-content">
      <img src="../../public/images/logo.svg" alt="eto Logo" />
    </section>
    <section class="home-testimonials">
      <div v-for="testimony in testimonials" :key="testimony.id" class="testimony">
        <h1>{{ testimony.name }}</h1>
        <p>{{ testimony.content }}</p>
      </div>
    </section>
    <section class="content-img">
      <img src="../../public/images/awards.svg" alt="" />
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      testimonials: [
        {
          id: "test1",
          name: "Alistair",
          content: "Had my first Earth to Oven dinner last night for Valentine's Day. Total success. Delicious prawn bhajees followed by melt-in-the-mouth beef. Highly recommend! ",
        },
        {
          id: "test2",
          name: "John and Charlotte",
          content:
            "A feast of deliciousness! Alfie and Joey are genius with flavour and texture and he creates exciting menus with seasonal, locally sourced ingredients. A delivery from Earth to Oven is an absolute joy!’",
        },
        {
          id: "test3",
          name: "Jackie",
          content:
            "'ETO dishes offer you heightened dining experience that in my opinion supersedes all other takeaway meals currently on offer in its holistic approach. From the preparation to the packaging to the savouring of the food; it satisfies all the hungry home diners looking for a top notch dish using ingredients that include plant based foods, seasonal local produce all beautifully presented in environmental friendly packaging. An all round dining success that must be shared with everyone who has a passion for mindful eating and living!’ ",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.home-container {
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  // align-items: center;

  .home-header {
    display: flex;
    padding: 5rem;
  }

  .home-content {
    // height: 50vh;
    align-items: center;
    justify-content: center;
    padding: 3rem;
    background-image: url(../../public/images/flatbread4.jpeg);
    background-color: var(--tertiary-colour);
    background-repeat: no-repeat;
    background-blend-mode: multiply;
    background-position: center;
    height: 100%;
  }

  .home-testimonials {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--tertiary-colour);
    .testimony {
      margin: 1rem;
      width: 50%;
      background-color: rgba(255, 255, 255, 0.8);
      border-radius: 10px;
      padding: 1rem;
      p {
        margin: 0;
      }
    }
  }
  .content-img {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30vh;
    padding: 3rem;
    img {
      width: 15%;
    }
  }
}
@media only screen and (orientation: portrait) {
  .home-container {
    img {
      width: 100%;
      height: 50vh;
    }
    .home-content {
      background-image: url(../../public/images/flatbread2.jpeg);
      background-color: var(--tertiary-colour);
      background-repeat: no-repeat;
      background-blend-mode: multiply;
      background-size: cover;
      background-position: 40%;
    }
    .home-testimonials {
      display: flex;
      flex-direction: column;
      padding: 2rem;
      .testimony {
        width: 100%;
        height: 100%;
      }
    }
    .content-img {
      img {
        width: 50%;
      }
    }
  }
}
</style>
