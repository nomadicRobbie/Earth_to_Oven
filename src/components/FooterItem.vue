<template>
  <div class="footer-container">
    <div class="footer-left">
      <section>footer content here</section>
    </div>
    <div class="footer-center">
      <section>footer content here</section>
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
  }
}
</style>
