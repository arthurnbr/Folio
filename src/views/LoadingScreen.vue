<script setup lang="ts">
import {useAnimate} from "@vueuse/core";
import {useTemplateRef} from "vue";
import {useAssetStore} from "../Store/store.ts";

const assetStore = useAssetStore();

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
  <div class="flex flex-col justify-center items-center h-svh gap-8 opacity-80">
    <img src="/icon.svg" class="h-1/4 w-1/4"/>
    <h3 class="text-3xl" ref="el">Chargement des resources</h3>
    <h3 class="text-3xl" ref="el">{{assetStore.progress}}</h3>
  </div>

  <div class="absolute bottom-0 left-0 w-full z-10 flex justify-center items-center p-8 gap-2">
    <mdicon name="alert-outline" class="h-[24px] w-[24px] mb-1"/>
    <p>Ce site est encore en cours de développement, des pertes de performances pourraient survenir.</p>
  </div>
</template>