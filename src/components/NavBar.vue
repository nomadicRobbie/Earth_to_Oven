<template lang="">
  <div class="shadow-navbar">
    <nav :class="isScrolled ? 'nav-shadow' : 'nav'">
      <router-link to="/" class="navTag">Welcome</router-link>
      <router-link to="/about" class="navTag">Our Story</router-link>
      <router-link to="/hireUs" class="navTag">Get in Touch</router-link>
      <router-link to="/shop" class="navTag">Delicatessen</router-link>
    </nav>
  </div>

  <div class="nav-collapse" @click="handleNavClick">
    <p>=</p>
    <transition mode="out-in" name="slide">
      <nav :class="navbarOpen ? 'show-nav' : 'hide-nav'">
        <router-link to="/" class="navTag">Welcome</router-link>
        <router-link to="/about" class="navTag">Our Story</router-link>
        <router-link to="/hireUs" class="navTag">Get in Touch</router-link>
        <router-link to="/shop" class="navTag">Delicatessen</router-link>
      </nav>
    </transition>
  </div>
</template>
<script>
export default {
  name: "NavBar",
  data() {
    return {
      navbarOpen: false,
      isScrolled: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleNavClick() {
      this.navbarOpen = !this.navbarOpen;
    },
    handleScroll() {
      if (window.scrollY > 50) {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    },
  },
};
</script>
<style scoped lang="scss">
.shadow-navbar {
  padding-right: 3rem;
  .nav {
    position: fixed;
    width: 100%;
    right: 0.1mm;
    padding: 2rem;
    display: flex;
    flex-direction: row;
    // justify-content: right;
    justify-content: flex-end;
    background-color: var(--background-colour);
    transition: all 250ms ease-in-out;

    .navTag {
      text-decoration: none;
      color: var(--action-colour);
      padding: 0rem 1rem;
    }
  }
  .nav-shadow {
    display: flex;
    width: 100%;
    right: 0.1mm;
    flex-direction: row;
    justify-content: right;
    padding: 2rem;
    // padding-right: 3rem;
    justify-content: flex-end;
    display: flex;
    box-shadow: 0px 1px 5px var(--action-colour);
    position: fixed;
    background-color: var(--background-colour);
    transition: all 250ms ease-in-out;

    .navTag {
      text-decoration: none;
      color: var(--action-colour);
      padding: 0rem 1rem;
    }
  }
}

.nav-collapse {
  display: none;
}

#nav .active-link {
  font-weight: bold;
  border-bottom: 2px solid var(--action-colour);
}

@media only screen and (orientation: portrait) {
  .nav {
    display: none;
  }
  .shadow-navbar {
    display: none;
  }

  .hide-nav {
    display: none;
  }

  .nav-collapse {
    .v-enter-active,
    .v-leave-active {
      transition: opacity 3s ease-in-out;
    }
    .v-enter-from,
    .v-leave-to {
      opacity: 0;
    }
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 5rem;
    right: 0.5rem;
    top: 0rem;
    z-index: 10;

    p {
      font-size: xx-large;
      position: absolute;
      padding-right: 1rem;
    }
    .show-nav {
      position: relative;
      width: 80%;
      right: 2rem;
      top: 8rem;
      display: flex;
      flex-direction: column;
      background-color: var(--background-colour);
      box-shadow: 0px 5px 10px var(--action-colour);
      border-radius: 10px;

      .navTag {
        padding: 1rem;
        text-decoration: none;
        right: 5rem;
        color: var(--action-colour);
        font-size: large;
      }
    }
  }
}
</style>
