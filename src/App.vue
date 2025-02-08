<script setup lang="ts">
import {computed, onMounted, ref, watch} from "vue";
import LandingPage from "./views/LandingPage.vue";
import PageIndicateur from "./components/PageIndicateur.vue";
import MowgLille from "./views/MowgLille.vue";
import HomeePage from "./views/HomeePage.vue";
import BdePage from "./views/BdePage.vue";
import CpPage from "./views/CpPage.vue";
import { useMediaQuery, useWindowScroll } from "@vueuse/core";
import { useAssetStore } from './Store/store.ts';
import LoadingScreen from "./views/LoadingScreen.vue";
import PhoneScreen from "./views/PhoneScreen.vue";

const assetStore = useAssetStore();

onMounted(() => {
  assetStore.loadModel(); // Charge la scène après le montage
});

function isMobile(): boolean {
  // @ts-expect-error userAgent
  const userAgent = navigator.userAgent || navigator["vendor"] || window["opera"] || "";
  return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase()) || window.innerWidth < 768;
}

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
  <div class="h-full w-full" ref="el" :class="{'overflow-clip': assetStore.isLoading}">
    <PhoneScreen v-if="isMobile()"/>
    <LoadingScreen v-else-if="assetStore.isLoading" class="bg-[#242424] z-50"/>
    <div
    class="bg-cyan-50 w-full flex flex-col justify-center items-center overflow-auto no-scrollbar snap-both snap-mandatory"
    ref="scrollContainer"
    v-if="!isMobile()"
    >
      <LandingPage class="h-screen w-full" :scrollto="scrollto"/>
      <MowgLille class="h-screen w-full bg-[#FFE860] snap-center pr-4"/>
      <HomeePage class="h-screen w-full bg-[#674B41] snap-center pr-4"/>
      <BdePage class="h-screen w-full bg-[#FFA07A] snap-center pr-4"/>
      <CpPage class="h-screen w-full bg-[#002147] snap-center pr-4"/>
      <!-- <ContactPage class="h-screen w-full" :show="showable(5).value"/> -->
    </div>
  </div>
</template>

<style scoped></style>
