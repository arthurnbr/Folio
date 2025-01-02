<script setup lang="ts">
import { ref, onMounted } from 'vue';

const projects = defineProps(['projects'])

const isHovered = ref(false)

console.log(projects.projects);
</script>

<template>
  <div class="flex flex-col justify-center items-center px-4">
    <div 
      class="bg-white flex flex-col justify-center items-start p-4 text-black gap-2 transition-all duration-300 overflow-hidden" 
      :class="{
            'w-48': isHovered, 
            'w-12': !isHovered,
            'rounded-xl': isHovered,
            'rounded-3xl': !isHovered,}" 
      @mouseenter="isHovered = true" 
      @mouseleave="isHovered = false"
    >
      <div v-for="(project, index) in projects.projects" :key="index" class="flex justify-center items-center gap-4">
        <p class="font-bold">oe</p>
        <p class="font-bold">{{project.title}}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
