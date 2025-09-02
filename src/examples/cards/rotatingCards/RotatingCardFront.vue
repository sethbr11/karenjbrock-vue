<script setup>
import { ref, onMounted, watch } from "vue";

const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
});

const imageWidth = ref(0);
const imageHeight = ref(0);

const loadImageDimensions = () => {
  const img = new Image();
  img.src = props.image;
  img.onload = () => {
    imageWidth.value = img.naturalWidth;
    imageHeight.value = img.naturalHeight;
  };
};

onMounted(() => {
  loadImageDimensions();
});

watch(
  () => props.image,
  () => {
    loadImageDimensions();
  }
);
</script>
<template>
  <div
    class="front-background"
    :style="{
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      width: imageWidth ? `${imageWidth * 1.05}px` : 'auto',
      height: imageHeight ? `${imageHeight * 1.05}px` : 'auto',
    }"
  >
    <div class="card-body text-center">
      <i v-if="icon" class="material-icons text-white text-4xl my-3">{{
        icon
      }}</i>
      <p
        v-if="label"
        class="text-sm text-white text-uppercase font-weight-normal"
      >
        {{ label }}
      </p>
      <h3 class="text-white" v-html="title" />
      <p class="text-white opacity-8">
        {{ description }}
      </p>
    </div>
  </div>
</template>
