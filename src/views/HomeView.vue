<template>
  <section class="home-container">
    <section class="home-header"></section>
    <section class="home-content">
      <img src="../../public/images/logo.svg" alt="eto Logo" />
    </section>
    <section class="content-img">
      <img src="../../public/images/awards.svg" alt="" />
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.home-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: url(../../public/images/flatbread4.jpeg);
  background-color: var(--tertiary-colour);
  background-repeat: no-repeat;
  background-blend-mode: multiply;
  height: 100%;

  .home-header {
    display: flex;
    padding: 5rem;
  }

  .home-content {
    height: 50vh;
    align-items: center;
    justify-content: center;
    padding: 3rem;
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
    background-image: url(../../public/images/flatbread2.jpeg);
    background-color: var(--tertiary-colour);
    background-repeat: no-repeat;
    background-blend-mode: multiply;
    background-size: cover;
    background-position: 40%;
    img {
      width: 100%;
      height: 50vh;
    }
    .content-img {
      img {
        width: 50%;
      }
    }
  }
}
</style>
