<template>
  <div class="footer-container">
    <div class="footer-left">
      <p><router-link to="/tsAndCs">Terms Of Service</router-link></p>
      <p><router-link to="/PrivacyPolicy">Privacy Policy</router-link></p>
    </div>
    <div class="footer-center">
      <section>
        <img src="../../public/images/logo-two.svg" alt="">
      </section>
    </div>
    <div class="footer-right">
      <section>footer content here</section>
    </div>
  </div>
</template>

<script>
export default {
  name: "FootItem",
};
</script>

<style lang="scss">
.footer-container {
  display: flex;
  justify-content: space-evenly;
  height: 20vh;
  align-items: center;
  .footer-left {
    display: flex;
    justify-content: left;
    align-items: flex-start;
    flex-direction: column;
    p{
      margin: 0;
    a {
      text-decoration: none;
      color: var(--text-colour);
      
    }
  }
  }
  .footer-center {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
      width: 15rem;
    }
  }
}
</style>
