<script setup lang="ts">
import { computed, ref, watch } from "vue";
import LandingPage from "./views/LandingPage.vue";
import PageIndicateur from "./components/PageIndicateur.vue";
import MowgLille from "./views/MowgLille.vue";
import HomeePage from "./views/HomeePage.vue";
import BdePage from "./views/BdePage.vue";
import Dorobo from "./views/Dorobo.vue";
import ContactPage from "./views/ContactPage.vue";
import { useMediaQuery, useWindowScroll } from "@vueuse/core";

const isXLScreen = useMediaQuery("(min-width: 1536px)");
const projects = [
  { title: "Présentation", icon: "account" },
  { title: "Mowg'Lille", icon: "teddy-bear" },
  { title: "Homee", icon: "lightbulb-outline" },
  { title: "BDE", icon: "party-popper" },
  { title: "Campus Privée", icon: "human-male-board" },
  // { title: "Contact", icon: "phone" },
];
const { isScrolling, directions } = useWindowScroll({idle: 300});
const { y } = useWindowScroll({behavior: "smooth"});
const lastDirection = ref("down");
 
const selectedIndex = computed(() => (lastDirection.value === "up" ? Math.floor : Math.ceil)(y.value / window.innerHeight));

watch(isScrolling, () => {
  if (directions.top) lastDirection.value = "up";
  if (directions.bottom) lastDirection.value = "down";
  if (isScrolling.value) return;
  scrollto(selectedIndex.value);
});

function showable(index: number) {
  return computed(() => selectedIndex.value === index || selectedIndex.value === index - 1 || selectedIndex.value === index + 1);
}

function scrollto(index: number) {
  y.value = index * window.innerHeight;
}
</script>

<template>
  <PageIndicateur
    class="fixed right-0 inset-y-0 z-30"
    :projects="projects"
    :selected-index="selectedIndex"
    :scroll-to="scrollto"
    v-if="isXLScreen"
  />
  <div
    class="bg-cyan-50 w-full flex flex-col justify-center items-center overflow-auto no-scrollbar snap-both snap-mandatory"
    ref="scrollContainer"
  >
    <LandingPage class="h-screen w-full" :scrollto="scrollto" :show="showable(0).value"/>
    <MowgLille class="h-screen w-full bg-[#FFE860] snap-center pr-4" :show="showable(1).value"/>
    <HomeePage class="h-screen w-full bg-[#674B41] snap-center pr-4" :show="showable(2).value"/>
    <BdePage class="h-screen w-full bg-[#FFA07A] snap-center pr-4" :show="showable(3).value"/>
    <Dorobo class="h-screen w-full bg-[#002147] snap-center pr-4" :show="showable(4).value"/>
    <!-- <ContactPage class="h-screen w-full" :show="showable(5).value"/> -->
  </div>
  salut
</template>

<style scoped></style>
