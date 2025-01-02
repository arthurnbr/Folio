<script setup>

import ChevronRightIcon from 'vue-material-design-icons/ChevronRight.vue';
import { computed, ref } from 'vue';
import { routerViewLocationKey } from 'vue-router';
import TypeWriterText from '../components/TypeWriterText.vue';
import { useMediaQuery } from '@vueuse/core'
import ThreeView from '../components/ThreeView.vue';

const projects = [
  {
    name: "Mowg'Lille",
    description: "Application mobile de covoiturage pour les étudiants de Lille Application mobile de covoiturage pour les étudiants de LilleApplication mobile de covoiturage pour les étudiants de LilleApplication mobile de covoiturage pour les étudiants de LilleApplication mobile de covoiturage pour les étudiants de LilleApplication mobile de covoiturage pour les étudiants de LilleApplication mobile de covoiturage pour les étudiants de LilleApplication mobile de covoiturage pour les étudiants de Lille",
    technologies: ["React Native", "Node.js", "MongoDB"],
    route : "/projects/mowglille"
  },
  {
    name: "Homee",
    description: "Application mobile de gestion de tâches pour les familles",
    technologies: ["React Native", "Node.js", "MongoDB"],
    route : "/projects/homee"
  },
  {
    name: "BlaBla2i",
    description: "Application mobile de covoiturage pour les étudiants de l'ISEN",
    technologies: ["React Native", "Node.js", "MongoDB"],
    route : "/projects/blabla2i"
  },
  {
    name: "inTouch",
    description: "Application mobile de gestion de contacts",
    technologies: ["React Native", "Node.js", "MongoDB"],
    route : "/projects/intouch"
  },
  {
    name: "BDE",
    description: "Application mobile de gestion de contacts",
    technologies: ["React Native", "Node.js", "MongoDB"],
    route : "/projects/bde"
  },
  {
    name: "Bientot",
    description: "Application mobile de gestion de contacts",
    technologies: ["React Native", "Node.js", "MongoDB"],
    route : "/projects/incomming"
  },
  {
    name: "Bientot",
    description: "Application mobile de gestion de contacts",
    technologies: ["React Native", "Node.js", "MongoDB"],
    route : "/projects/vrm2026"
  },
  {
    name: "Bientot",
    description: "Application mobile de gestion de contacts",
    technologies: ["React Native", "Node.js", "MongoDB"],
    route : "/projects/vous-etes-pas-pret"
  }
]
const selectedIndex = ref(0);
const scrollContainer = ref("scrollContainer");

const isXLScreen = useMediaQuery('(min-width: 1280px)');
const is2XLScreen = useMediaQuery('(min-width: 2000px)');
const isTallScreen = useMediaQuery('(min-height: 900px)');


function onWheel(event) {
  event.preventDefault();
  if (event.deltaY > 0) {
    selectedIndex.value = Math.min(selectedIndex.value + 1, projects.length - 4);
  } else {
    selectedIndex.value = Math.max(selectedIndex.value - 1, 0);
  }
  console.log(is2XLScreen);
  console.log(isXLScreen);
  if(is2XLScreen.value) {
    console.log("ici");
    scrollContainer.value.scrollTo({
      top: selectedIndex.value * 96,
      behavior: 'smooth'
    });
  } else if(isXLScreen.value) {
    console.log("ici2");
    scrollContainer.value.scrollTo({
      top: selectedIndex.value * 72,
      behavior: 'smooth'
    });
  } else {
    console.log("ici3");
    scrollContainer.value.scrollTo({
      top: selectedIndex.value * 60,
      behavior: 'smooth'
    });
  }
}

function comptuteOpacity(index) {
  if(index < selectedIndex.value) {
    return 1 - Math.max(Math.abs(index + 1 - selectedIndex.value) * 1, 0.3);
  } else {
    return 1 - Math.abs(index - selectedIndex.value) * 0.3;
  }
}


</script>

<template>
  <div class="w-full h-full flex justify-around items-center px-4">
    <Transition name="slide-fade-left" appear>
      <div class="h-full flex">
        <div class="h-full flex flex-col pt-48 items-center">
            <ChevronRightIcon :fillColor="'#ffa500'" :size="is2XLScreen ? 128 : isXLScreen ? 92 : 72"/>
        </div>
        <div class="pt-48 h-[784px] w-full flex flex-col overflow-auto no-scrollbar snap-y" ref="scrollContainer" @wheel="onWheel">
          <h1 
            v-for="(projects, index) in projects"
            :key="index"
            :style="{
              opacity: comptuteOpacity(index), 
              transition: 'opacity .5s ease', 
              transform : `translateX(${Math.abs(index-selectedIndex)*3}px)`,
              }"
            :class="{'text-7xl xl:text-8xl 2xl:text-9xl cursor-pointer': index === selectedIndex, 'text-6xl xl:text-7xl 2xl:text-8xl': index !== selectedIndex}"
            @click="selectedIndex == index ? $router.push(projects.route) : null" 
            >
            {{projects.name}}
          </h1>
          <!-- TEMPORARY METHODE THIS NOT A VERY CLASSI WAY TO DO I KNOW -->
          <h1 
            v-for="(projects, index) in projects"
            :key="index"
            class="text-8xl cursor-pointer"
            :style="{
              opacity: 0, 
              transition: 'opacity .5s ease', 
              transform : `translateX(${Math.abs(index-selectedIndex)*3}px)`,
              }"
            :class="{'text-8xl': index === selectedIndex, 'text-7xl': index !== selectedIndex}"
            @click="selectedIndex == index ? $router.push(projects.route) : null" 
            >
            {{projects.name}}
          </h1>
        </div>
      </div>
    </Transition>
    <div class="h-full flex flex-col py-24 gap-4 max-w-[50%] w-full">
      <div class="h-full">
          <Suspense>
            <Transition name="slide-fade-left" appear>
              <ThreeView />
            </Transition>
          </Suspense>
      </div>
      <!-- <TypeWriterText class="h-[25%]" :text=projects[selectedIndex].description :delay=5 :v-if="isXLScreen.value" v-if="isTallScreen == true"></TypeWriterText> -->
    </div>
    <router-link to="/" class="absolute top-0 left-0 p-4 cursor-pointer">
    <ChevronRightIcon fillColor="#ffa500" :size="94"/>
    </router-link>
  </div>
</template>


<style>
body {
  margin: 0;
  overflow: hidden;
}

.slide-fade-left-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-left-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-left-enter-from,
.slide-fade-left-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
</style>

