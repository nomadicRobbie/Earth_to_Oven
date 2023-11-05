<template>
  <div class="carousel">
    <div class="carousel-container">
      <transition-group name="fade" mode="out-in">
        <div class="slide" v-for="(item, idx) in items" :key="idx">{{ item.content }}</div>
      </transition-group>
    </div>
    <button @click="prevSlide">Previous</button>
    <button @click="nextSlide">Next</button>
  </div>
</template>

<script>
export default {
  name: "CarouselItem",
  data() {
    return {

      items: [
        { id: 1, content: "Slide 1" },
        { id: 2, content: "Slide 2" },
      ],
      currentSlide: 0,
    };
  },
  methods: {
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.items.length) % this.items.length;
      console.log(this.currentSlide);
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.items.length;
      console.log(this.currentSlide);
    },
  },
};
</script>

<style lang="scss">
.carousel {
  position: relative;
  width: 100%;
  overflow: hidden;

  .carousel-container {
    display: flex;
    transition: transform 0.5s;
    .fade-enter-active,
    .fade-leave-active {
      transition: opacity 0.5s;
    }

    .slide {
      flex: 0 0 100%;
      width: 100%;
    }
  }
}
</style>
