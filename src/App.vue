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
  }
}




</style>
