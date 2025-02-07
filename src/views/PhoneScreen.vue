<script setup lang="ts">
import {useAnimate} from "@vueuse/core";
import {useTemplateRef} from "vue";

const el = useTemplateRef("el");
useAnimate(
    el,
    [
      {
        opacity: 0.5,
        transform: "translateY(0px)"
      },
      {
        opacity: 1,
        transform: "translateY(10px)"
      },
      {
        opacity: 0.5,
        transform: "translateY(0px)"
      }
    ],
    {
      duration: 1500,
      easing: "ease-in-out",
      iterations: Infinity
    }
);
</script>

<template>
  <div class="flex flex-col justify-center items-center h-svh gap-4 opacity-80">
    <img src="/icon.svg" class="w-1/4"/>
    <h3 class="text-2xl" ref="el">Pas sur tel bb</h3>
  </div>
</template>