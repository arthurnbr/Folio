<script setup lang="ts">
import { ref } from 'vue';
import LandingPage from './views/LandingPage.vue';
import PageIndicateur from './components/PageIndicateur.vue';

const selectedIndex = ref(0);
const projects = [{title: "Mowg'Lille", icon : "react"},{title: "BDE", icon : "react"},{title: "SALUT", icon : "react"}];
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
  scrollto(selectedIndex.value);
}

function scrollto(index: number) {
  selectedIndex.value = index;
  window.scrollTo({
    top: scrollContainer.value?.clientHeight!/3 * index,
    behavior: 'smooth'
  });
}

</script>

<template>
  <PageIndicateur class="fixed right-0 inset-y-0 z-30" :projects="projects" :selected-index="selectedIndex" :scroll-to="scrollto"/>
  <div class="bg-cyan-50 w-full flex flex-col justify-center items-center overflow-auto no-scrollbar snap-both snap-mandatory" ref="scrollContainer" @wheel="onWheel">
    <Suspense>
      <LandingPage class="h-screen w-full"/>
    </Suspense>
    <div class="h-screen w-full bg-cyan-100 snap-center"></div>
    <div class="h-screen w-full bg-orange-500 snap-center"></div>
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
