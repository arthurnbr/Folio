<script setup lang="ts">
import { ref, onMounted } from 'vue';
import PageIndicateur from './components/PageIndicateur.vue';

const selectedIndex = ref(0);
const projects = [{title: "Mowg'Lille", icon : "mdi-car"},{title: "BDE", icon : "mdi-car"},{title: "SALUT", icon : "mdi-car"}];
const scrollContainer = ref<HTMLElement | null>(null);
const isScrolling = ref(false);
const scrollCooldown = 150;

function onWheel(event: WheelEvent) {
  event.preventDefault();
  if (isScrolling.value) return;

  isScrolling.value = true;
  setTimeout(() => {
    isScrolling.value = false;
  }, scrollCooldown);

  if (event.deltaY > 0) {
    selectedIndex.value = Math.min(selectedIndex.value + 1, projects.length - 1);
  } else {
    selectedIndex.value = Math.max(selectedIndex.value - 1, 0);
  }
  console.log(selectedIndex.value);
  console.log(scrollContainer.value?.clientHeight);
  window.scrollTo({
    top: scrollContainer.value?.clientHeight!/3 * selectedIndex.value,
    behavior: 'smooth'
  });
}

onMounted(() => {
  console.log(scrollContainer.value);
});

</script>

<template>
  <PageIndicateur class="fixed right-0 inset-y-0" :projects="projects"/>
  <div class="bg-cyan-50 w-full flex flex-col justify-center items-center overflow-auto no-scrollbar snap-both snap-mandatory" ref="scrollContainer" @wheel="onWheel">
    <div class="h-screen w-full bg-black snap-center"></div>
    <div class="h-screen w-full bg-red-300 snap-center"></div>
    <div class="h-screen w-full bg-black snap-center"></div>
  </div>
</template>

<style scoped>



.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
