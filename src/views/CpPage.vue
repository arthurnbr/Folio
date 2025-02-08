<script setup lang="ts">
import { TresCanvas } from '@tresjs/core';
import { BasicShadowMap, SRGBColorSpace, NoToneMapping } from 'three'
import { Levioso } from '@tresjs/cientos';
import Dorobo from '../models/CpModel.vue';


const gl = {
  shadows: true,
  alpha: true,
  shadowMapType: BasicShadowMap,
  outputColorSpace: SRGBColorSpace,
  toneMapping: NoToneMapping,
}

</script>

<template>
  <div class="h-screen w-full flex justify-center items-center">
    <div class="2xl:w-full w-3/5 h-full flex flex-col gap-2 2xl:p-16 p-4 justify-center">
      <div class="flex items-center gap-6">
        <h1 class="text-8xl text-[##F1DABF] opacity-90">Campus Privé</h1>
        <!-- <div class="flex flex-col justify-center items-center p-4 bg-black bg-opacity-10 rounded-2xl">
          <h2 class="text-5xl text-[##F1DABF] font-black opacity-90">999</h2>
          <p class="text-[##F1DABF] text-xl font-medium opacity-80">Stat à Mettre</p>
        </div>
        <div class="flex flex-col justify-center items-center p-4 bg-black bg-opacity-10 rounded-2xl">
          <div class="flex gap-2">
            <mdicon name="vuejs" width="48" height="48" class="text-[##F1DABF] opacity-90"/>
            <mdicon name="tailwind" width="48" height="48" class="text-[##F1DABF] opacity-90"/>
            <mdicon name="language-ruby-on-rails" width="48" height="48" class="text-[##F1DABF] opacity-90"/> 
          </div>
          <p class="text-[##F1DABF] text-xl font-medium opacity-80">Utilisant</p>
        </div> -->
      </div>
      <div class="w-20 h-1 bg-[#F1DABF] opacity-80"></div>
      <div class="flex gap-4">
        
      </div>
      <p class="text-[##F1DABF] opacity-80 font-medium">
        Campus Privée est un Centre de Formation d’Apprentis (CFA) présent sur 16 campus à travers la France. Dans le cadre d'une mission freelance, j’ai collaboré avec Campus Privée pour développer un ERP dédié à l’optimisation de la gestion des contrats, transformant ainsi des processus administratifs complexes en une solution fluide et intuitive.
      </p>
      <p class="text-[##F1DABF] opacity-80 font-medium">
        Au cœur de ce projet, ma mission a consisté à analyser les besoins du client, à concevoir une expérience utilisateur ergonomique et à élaborer une interface graphique à la fois moderne et fonctionnelle. L’objectif était de traduire les attentes spécifiques du CFA en un outil performant et évolutif, capable de s’adapter aux exigences d’un environnement de formation dynamique.
      </p>
      <p class="text-[##F1DABF] opacity-80 font-medium">
        Le projet a été réalisé dans le cadre d’un travail à l’École Centrale de Lille et présenté aux professeurs.
      </p>
      <p class="text-[##F1DABF] opacity-80 font-medium">
        Cette approche a permis de créer une plateforme intégrée, simplifiant la gestion quotidienne des contrats tout en favorisant une meilleure organisation et une plus grande réactivité des équipes administratives.
      </p>
      <div class="w-20 h-1 bg-[#F1DABF] opacity-80"></div>
    </div>
    <div class="xl:h-full h-2/3 w-1/2">
      <TresCanvas v-bind="gl">
        <Suspense>
          <Levioso>
            <Dorobo :position="[-.5,0,0]"></Dorobo>
          </Levioso>
        </Suspense>
        <TresPerspectiveCamera
          :position="[0, 0, 14]"
          :look-at="[0, 0, 0]"
        />
        <TresDirectionalLight
          color="#FFFFFF"
          cast-shadow
          :position="[3, 3, 3]"
          :intensity="2"
        />
        <TresAmbientLight :intensity="1" />
      </TresCanvas>
    </div>
  </div>
</template>