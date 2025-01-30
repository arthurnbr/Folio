<script setup lang="ts">
import { ref } from 'vue';
import LandingPage from './views/LandingPage.vue';
import PageIndicateur from './components/PageIndicateur.vue';
import MowgLille from './views/MowgLille.vue';
import HomeePage from './views/HomeePage.vue';
import BdePage from './views/BdePage.vue';
import Dorobo from './views/Dorobo.vue';
import ContactPage from './views/ContactPage.vue';
import { useMediaQuery } from '@vueuse/core'

const isXLScreen = useMediaQuery('(min-width: 1536px)');
const projects = [{title: "Mowg'Lille", icon : "react"},{title: "BDE", icon : "react"},{title: "SALUT", icon : "react"},{title: "SALUT", icon : "react"},{title: "SALUT", icon : "react"},{title: "SALUT", icon : "react"}];
const selectedIndex = ref(0);
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
    top: scrollContainer.value?.clientHeight!/projects.length * index,
    behavior: 'smooth'
  });
}
</script>

<template>
  <PageIndicateur class="fixed right-0 inset-y-0 z-30" :projects="projects" :selected-index="selectedIndex" :scroll-to="scrollto" v-if="isXLScreen"/>
  <div class="bg-cyan-50 w-full flex flex-col justify-center items-center overflow-auto no-scrollbar snap-both snap-mandatory" ref="scrollContainer" @wheel="onWheel">
    <LandingPage class="h-screen w-full" :scrollto="scrollto"/>
    <MowgLille class="h-screen w-full bg-[#FFE860] snap-center"/>
    <HomeePage class="h-screen w-full bg-[#674B41] snap-center"/>
    <BdePage class="h-screen w-full bg-[#FFA07A] snap-center"/>
    <Dorobo class="h-screen w-full bg-[#2F2718] snap-center"/>
    <ContactPage class="h-screen w-full"/>
  </div>
  salut
</template>

<style scoped>
</style>
