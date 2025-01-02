<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface Project {
  title: string;
}

const {projects, selectedIndex, scrollTo} = defineProps<{ projects: Project[], selectedIndex: number, scrollTo: Function}>();

const isHovered = ref(false)

</script>

<template>
  <div class="flex flex-col justify-center items-center px-4">
    <div 
      class="bg-black bg-opacity-30 flex flex-col justify-center items-start p-3 gap-2 transition-all duration-300 overflow-hidden" 
      :class="{
            'w-48': isHovered, 
            'w-12': !isHovered,
            'rounded-xl': isHovered,
            'rounded-3xl': !isHovered,
            'shadow-2xl': isHovered,}" 
      @mouseenter="isHovered = true" 
      @mouseleave="isHovered = false"
    >
      <div 
      v-for="(project, index) in projects" 
      :key="index" 
      class="flex justify-center items-center gap-4 transition-all duration-700 cursor-pointer"
      :class="{
        'text-white': index === selectedIndex,
        'text-black': index !== selectedIndex,
        'opacity-100': index === selectedIndex,
        'opacity-50': index !== selectedIndex,
      }"
      @click="scrollTo(index)"
    >
        <mdicon name="react" class="h-[24px] w-[24px]"/> 
        <p class="font-bold">{{project.title}}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
