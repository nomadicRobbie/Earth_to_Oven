<template>
  <NavBar />
  <div class="content">
    <router-view />
  </div>
  <FooterItem />
</template>

<script>
import NavBar from "./components/NavBar.vue";
import FooterItem from "./components/FooterItem.vue";

export default {
  components: {
    NavBar,
    FooterItem,
  },
};
</script>

<style lang="scss">
body {
  font-family: 'Apex Mk3-Regular', Helvetica, Arial, sans-serif;
  text-align: center;
  color: var(--action-colour);
  background-color: var(--background-colour);
  margin: 0;
  h1 {
    font-family: 'EarthToOvenFont';
    font-size: 3rem;
    letter-spacing: 1px;
    text-wrap: wrap;
  }
  h2 {
    font-family: 'Apex mk3-regular';
    font-size: 23px;
    font-weight: 500;
    letter-spacing: 1px;
  }
  h3 {
    font-family: 'Apex mk3-regular';
    font-size: 20px;
    font-weight: 500;
    letter-spacing: .5px;
    text-decoration: none;
  }
  p {
    letter-spacing: 1px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 600;
    font-size: x-larger;
  }
  .content {
    padding-top: 5rem;
  }
}
@media only screen and (orientation: portrait) {
  body {
    h1 {
      word-wrap: break-word;
    }
    .content {
      padding: 0rem;
    }
  }
}




</style>
