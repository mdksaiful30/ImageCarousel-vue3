
<script setup>
import { ref } from 'vue';

const slides = ref([
  {
    src: "/img/gallery/1.jpg",
    alt: "Mountain Scenery",
  },
  {
    src: "/img/gallery/2.jpg",
    alt: "Hilly Area",
  },
  {
    src: "/img/gallery/3.jpg",
    alt: "Ocean Area",
  },
]);
const currentIndex = ref(0);
function goToSlide(index) {
  currentIndex.value = index;
}
function goToPrevSlide() {
  currentIndex.value = (currentIndex.value - 1 + slides.length) % slides.length;
}
function goToNextSlide() {
  currentIndex.value = (currentIndex.value + 1) % slides.length;
}
</script>

<template>
  <section id="image-carousel">
    <div class="container">
      <div class="row text-center">
          <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">

            <!-- Indicators/dots -->
            <div class="carousel-indicators">
              <button
                  v-for="(slide, index) in slides"
                  :key="index"
                  type="button"
                  :data-bs-target="'#carouselExampleCaptions'"
                  :data-bs-slide-to="index"
                  :class="{ active: index === currentIndex }"
                  @click="goToSlide(index)"
              ></button>
            </div>

            <!-- The slideshow/carousel -->
            <div class="carousel-inner">
              <div
                  v-for="(slide, index) in slides"
                  :key="index"
                  :class="{ 'carousel-item': true, active: index === currentIndex }"
              >
                <img :src="slide.src" :alt="slide.alt" class="d-block" style="width:100%">
              </div>
            </div>

            <!-- Left and right controls/icons -->
            <button
                class="carousel-control-prev"
                type="button"
                :data-bs-target="'#carouselExampleCaptions'"
                data-bs-slide="prev"
                @click="goToPrevSlide"
            >
              <span class="carousel-control-prev-icon"></span>
            </button>
            <button
                class="carousel-control-next"
                type="button"
                :data-bs-target="'#carouselExampleCaptions'"
                data-bs-slide="next"
                @click="goToNextSlide"
            >
              <span class="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>
    </div>
  </section>
</template>


<style scoped>
.carousel-indicators button {
  background-color: red;
  width: 50px;
  height: 10px;
}
</style>
