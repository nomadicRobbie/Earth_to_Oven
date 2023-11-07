<template>
  <div class="footer-container">
    <div class="footer-left">
      <router-link to="/tsAndCs">Terms and Conditions</router-link>
      <router-link to="/PrivacyPolicy">Privacy Policy</router-link>
    </div>
    <div class="footer-center">
      <section></section>
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
  height: 10vh;
  align-items: center;
  .footer-left {
    display: flex;
    justify-content: left;
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
