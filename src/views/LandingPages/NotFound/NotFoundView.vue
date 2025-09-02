<script setup>
// example components
import DefaultNavbar from "@/examples/navbars/MainNavbar.vue";
import Header from "../../../examples/Header.vue";

// image
import image from "@/assets/img/city-profile.jpg";
</script>
<template>
  <DefaultNavbar transparent />
  <div
    :style="{ backgroundImage: `url(${image})` }"
    style="height: 900px"
    loading="lazy"
    class="d-flex align-items-center"
  >
    <span class="mask bg-gradient-dark opacity-8"></span>
    <div class="text-center mx-auto position-relative">
      <h1 class="text-white">Page Not Found</h1>
      <p class="text-white">
        The page you attempted to navigate to does not exist. Please try a
        different page.
      </p>
    </div>
  </div>
</template>

<style scoped></style>
