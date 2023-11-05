<template>
  <div class="about-container">
    <section class="about-header">
      <img src="../../public/images/logo-two.svg" alt="" />
      <h1>Who We Are</h1>
    </section>
    <section class="about-content">
      <div class="about-content-inner">
        <h3 class="wrap-me">Where we come from</h3>
        <h3 class="wrap-me">Where we are going</h3>
        <p>{{ content.contentP1 }}</p>
        <p>{{ content.contentP2 }}</p>
        <p>{{ content.contentP3 }}</p>
        <p>{{ content.contentP4 }}</p>
      </div>
    </section>
    <section class="about-content-2">
      <div class="about-content-inner-2">
        <h3 class="wrap-me">What we Do</h3>
        <h3 class="wrap-me">How we do it</h3>
        <p>{{ content2.contentP1 }}</p>
        <p>{{ content2.contentP2 }}</p>
        <div class="images">
          <img class="no-show" src="../../public/images/eto-trailer6.jpeg" alt="" />
          <img src="../../public/images/eto-trailer1.jpeg" alt="" />
          <img class="no-show" src="../../public/images/eto-trailer8.jpeg" alt="" />
        </div>

        <!-- <div class="images">
          <img src="../../public/images/eto-trailer1.jpeg" alt="" />
          <img src="../../public/images/alfie2.jpeg" alt="" />
          <img src="../../public/images/alfie2.jpeg" alt="" />
        </div> -->
        <p>{{ content2.contentP3 }}</p>
        <p>{{ content2.contentP4 }}</p>
        <div class="images">
          <img src="../../public/images/pop-up1.jpeg" alt="" />
          <img class="no-show" src="../../public/images/pop-up4.jpeg" alt="" />
          <img class="no-show" src="../../public/images/pop-up8.jpeg" alt="" />
        </div>

        <!-- <div class="images">
          <img src="../../public/images/eto-trailer1.jpeg" alt="" />
          <img src="../../public/images/alfie2.jpeg" alt="" />
          <img src="../../public/images/alfie2.jpeg" alt="" />
        </div> -->
        <!-- <div class="images">
          <img src="../../public/images/pop-up2.jpeg" alt="" />
          <img src="../../public/images/customer4.jpeg" alt="" />
          <img src="../../public/images/pop-up5.jpeg" alt="" />
        </div> -->
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "AboutView",
  data() {
    return {
      content: {
        contentP1:
          "Over the course of 35 years in the hospitality industry, we have embarked on a remarkable journey that has shaped both our past and our future. As we continue on our path, our culinary adventures will only become more exciting and innovative. We remain dedicated to delivering an unparalleled dining experience that tantalizes taste buds, all while nourishing the planet.",
        contentP2: "We have seamlessly blended expertise with an unbridled love of food, and together, we have cultivated a wealth of culinary knowledge and creativity.",
        contentP3:
          "Our journey has been marked by a relentless commitment to pushing the boundaries of street food to new heights. We've evolved, adapted, and constantly strived for innovation in the culinary world. Each bite from our menu reflects our enduring commitment to flavor, quality, and the sheer joy that food can bring.",
        contentP4: "The future holds endless opportunities to create and share the delectable delights that define us, shaping both our past and the exciting chapters yet to come.",
      },
      content2: {
        title: "what we do and how we do it",
        contentP1:
          "At the heart of our culinary journey, we take to the road, bringing our delectable creations to the masses. With a trailer that travels to gigs, festivals, markets, and private events, we've transformed the way you experience street food.",
        contentP2:
          "Our mobile kitchen serves as a hub of innovation, allowing us to remain agile and responsive to the diverse tastes and preferences of our customers. Whether you catch us at a lively music festival or a quiet private event, you can always count on us to deliver a memorable dining experience.",
        contentP3:
          "But that's not all; for those who wish to continue the Earth to Oven journey, we offer a small kitchen that stocks a wholesale delicatessen. Here, you can take a piece of our culinary artistry home with you, savoring the flavors that have become a hallmark of our brand.",
        contentP4:
          "Our journey continues to evolve, and as we move forward, we look forward to serving you wherever you are, ensuring that our passion for food and sustainability remains at the forefront of our mission.",
      },
    };
  },
  components: {},
};
</script>

<style lang="scss">
.about-container {
  width: 100%;
  .about-header {
    display: flex;
    padding: 2rem;
    justify-content: center;
    align-items: top;
    h1 {
      flex-grow: 1;
    }
    img {
      width: 10rem;
    }
  }
  .about-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5rem;
    background-image: url(../../public/images/alfie-joey1.jpeg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    .about-content-inner {
      background-color: rgba(255, 255, 255, 0.8);
      padding: 2rem;
      border-radius: 10px;
      h3 {
        font-size: 2rem;
        font-weight: bold;
        font-family: EarthToOvenFont;
      }
      p {
        font-size: 1.5rem;
      }
    }
  }
  .about-content-2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5rem;
    background-color: var(--tertiary-colour);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    .about-content-inner-2 {
      background-color: rgba(255, 255, 255, 0.7);
      padding: 2rem;
      border-radius: 10px;
      h3 {
        font-size: 2rem;
        font-weight: bold;
        font-family: EarthToOvenFont;
      }
      p {
        font-size: 1.5rem;
      }
      .images {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        img {
          width: 20rem;
          height: 20rem;
          object-fit: cover;
          border-radius: 10px;
        }
      }
    }
  }
}

@media only screen and (orientation: portrait) {
  .about-container {
    width: 100%;
    .about-header {
      display: flex;
      padding: 0rem;
      justify-content: center;
      align-items: top;

      h1 {
        flex-grow: 1;
        text-wrap: wrap;
      }
      img {
        display: none;
      }
    }
    .about-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 3rem;
      background-image: url(../../public/images/alfie-joey2.jpeg);
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      .about-content-inner {
        background-color: rgba(255, 255, 255, 0.8);
        border-radius: 10px;
        width: 100%;
        .wrap-me {
          font-size: 1.5rem;
          font-family: EarthToOvenFont;
        }
        p {
          font-size: 1rem;
        }
      }
    }
    .about-content-2 {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 3rem;
      background-color: var(--tertiary-colour);
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      .about-content-inner-2 {
        background-color: rgba(255, 255, 255, 0.8);
        border-radius: 10px;
        width: 100%;
        .wrap-me {
          font-size: 1.5rem;
          font-weight: bold;
        }
        p {
          font-size: 1rem;
        }
        .images {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          img {
            width: 10rem;
            height: 10rem;
            object-fit: cover;
            border-radius: 10px;
            padding: 1rem;
          }
          .no-show {
            display: none;
            width: 0rem;
            height: 0rem;
          }
        }
      }
    }
  }
}
</style>
