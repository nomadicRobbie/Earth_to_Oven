<template>
  <section class="more-container">
    <div class="more-head">
      <h1>Want More...</h1>
    </div>
    <section class="more-content">
      <article class="more-article">
        <div class="more-article-inner">
          <h3 class="wrap-me">Want to hire us or just chat?</h3>
          <p>Either way, we want to hear from you! <br>So reach out, it'll take two minutes</p>
          <p>{{ content.contentP1 }}</p>
          <img src="../../public/images/eto-trailer6.jpeg" alt="">
        </div>
      </article>
      <div class="more-form">
        <form @submit.prevent="clickHandle" action="">
          <label for="name">Full Name</label>
          <input v-model="name" name="name" type="text" placeholder="" required />
          <label for="email">Email</label>
          <input v-model="email" type="email" name="email" placeholder="" required />
          <label for="phone">Contact Number</label>
          <input v-model="phone" type="number" name="phone" id="phone" placeholder="" />
          <label for="message">What do you want to say?</label>
          <textarea v-model="message" name="message" id="message" cols="30" rows="10" placeholder=""></textarea>
          <button>Submit</button>
          <p>By submitting this form, you agree to our <router-link to="/privacyPolicy">Privacy Policy</router-link> and <router-link to="/TsAndCs">Terms of Service</router-link>.</p>
        </form>
        
      </div>
    </section>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HireUsView",
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      message: "",
      content: {
        contentP1:
          "We are available for hire for private events, weddings, festivals, and more. We can provide a range of services; full catering service to a simple drop off. If you are interested, reach out! it'll take two minutes",
      },
    };
  },
  components: {},
  methods: {
    clickHandle() {},
  },
};
</script>

<style scoped lang="scss">
.more-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  .more-content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .more-article {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 50%;
      margin: 4rem;
      .more-article-inner {
        background-color: rgba(255, 255, 255, 0.6);
        padding: 2rem;
        border-radius: 10px;
        h3 {
          font-size: 2rem;
          font-weight: bold;
          font-family: EarthToOvenFont;
        }
        p {
          font-size: 1.5rem;
          letter-spacing: .1rem;
        }
        img {
          width: 100%;
          border-radius: 10px;
        }
      }
    }
  }
  .more-form {
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 80%;
      label {
        width: 100%;
        font-size: 1.25rem;
        font-weight: bold;
        text-align: left;
        // margin: 1rem 0;
      }
      input {
        width: 100%;
        height: 2rem;
        margin: 0.5rem 0;
        border: none;
        box-shadow: 2px 2px 2px var(--tertiary-colour);
        border-radius: 5px;
        background-color: transparent;
        color: var(--action-colour);
        font-size: 1.5rem;
        font-weight: bold;
        padding: 0.5rem;
      }
      textarea {
        width: 100%;
        height: 10rem;
        margin: 1rem 0;
        border: none;
        box-shadow: 2px 2px 2px var(--tertiary-colour);
        border-radius: 5px;
        background-color: transparent;
        color: var(--action-colour);
        font-size: 1.5rem;
        font-weight: bold;
        padding: 0.5rem;
      }
      button {
        display: flex;
        width: 103%;
        align-items: center;
        justify-content: center;
        height: 5rem;
        margin: 1rem 0;
        border: none;
        border: 1.7px solid var(--action-colour);
        box-shadow: 2px 2px 4px var(--action-colour);
        border-radius: 5px;
        background-color: var(--tertiary-colour);
        color: var(--alt-text-colour);
        font-size: 1.25rem;
        font-weight: bold;
        padding: 0.5rem;
      }
      p {
        font-size: 0.75rem;
        font-weight: bold;
        text-align: center;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        margin: 1rem 0;}
    }
  }
}

@media only screen and (orientation: portrait) {
  .more-container {
    display: flex;
    flex-direction: column;
    // width: 100%;
    .more-content {
      display: flex;
      flex-direction: column;
      .more-form {
          width: 100%;
          button {
            height: 5rem;
          }
          input {
            box-shadow: 2px 2px 2px var(--tertiary-colour);
          }
        }
      // width: 100%;
      .more-article {
        width: 100%;
        .more-article-inner {
          // width: 100%;
        }
      }
    }
  }
}
</style>
