<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
  quotes: {
    type: Array,
    required: true,
  },
});

const slideIndex = ref(1);
let autoScrollInterval;

function resetAutoScroll() {
  clearInterval(autoScrollInterval);
  startAutoScroll();
}

function plusSlides(n) {
  resetAutoScroll();
  showSlides((slideIndex.value += n));
}

function currentSlide(n) {
  resetAutoScroll();
  showSlides((slideIndex.value = n));
}

function showSlides(n) {
  if (n > props.quotes.length) {
    slideIndex.value = 1;
  }
  if (n < 1) {
    slideIndex.value = props.quotes.length;
  }
}

function startAutoScroll() {
  autoScrollInterval = setInterval(() => {
    plusSlides(1);
  }, 11000); // 11 seconds
}

onMounted(() => {
  startAutoScroll();
});

onUnmounted(() => {
  clearInterval(autoScrollInterval);
});
</script>

<template>
  <!-- Slideshow container -->
  <div class="slideshow-container">
    <!-- Full-width slides/quotes -->
    <div
      class="slides-wrapper"
      :style="{ transform: `translateX(-${(slideIndex - 1) * 100}%)` }"
    >
      <div v-for="(quote, index) in quotes" :key="index" class="mySlides">
        <q>{{ quote.text }}</q>
        <p class="author">{{ quote.author }}</p>
      </div>
    </div>

    <!-- Next/prev buttons -->
    <a class="prev" @click="plusSlides(-1)">&#10094;</a>
    <a class="next" @click="plusSlides(1)">&#10095;</a>
  </div>

  <!-- Dots/bullets/indicators -->
  <div class="dot-container">
    <span
      v-for="(quote, index) in quotes"
      :key="index"
      class="dot"
      :class="{ active: slideIndex === index + 1 }"
      @click="currentSlide(index + 1)"
    ></span>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
body {
  font-family: Verdana, sans-serif;
  margin: 0;
}

/* Slideshow container */
.slideshow-container {
  position: relative;
  background: #f1f1f1f1;
  overflow: hidden;
}

/* Wrapper for slides */
.slides-wrapper {
  display: flex;
  align-items: center; /* Center slides vertically */
  transition: transform 0.5s ease-in-out;
  height: 100%; /* Ensure wrapper takes full height */
}

/* Individual slides */
.mySlides {
  flex: 0 0 100%;
  padding: 50px 80px 20px 80px;
  text-align: center;
  display: flex; /* Use flexbox for vertical centering */
  flex-direction: column;
  justify-content: center; /* Center content vertically */
}

/* Next & previous buttons */
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -30px;
  padding: 16px;
  color: #888;
  font-weight: bold;
  font-size: 20px;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  position: absolute;
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  background-color: #66bb6a;
  color: white;
}

/* The dot/bullet/indicator container */
.dot-container {
  text-align: center;
  padding: 20px;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

/* Add a background color to the active dot/circle */
.active,
.dot:hover {
  background-color: #66bb6a;
}

/* Add an italic font style to all quotes */
q {
  font-style: italic;
}

/* Add a blue color to the author */
.author {
  color: #43a047;
  margin-top: 20px;
}
/* Some adjustments for smaller screens */
@media (min-width: 576px) {
  .slideshow-container {
    margin-top: 40px;
  }
}
</style>
