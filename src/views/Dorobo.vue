<script setup lang="ts">
import { TresCanvas } from '@tresjs/core';
import { BasicShadowMap, SRGBColorSpace, NoToneMapping } from 'three'
import { Levioso } from '@tresjs/cientos';
import Dorobo from '../models/Dorobo.vue';

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
        <h1 class="text-8xl text-[##F1DABF] opacity-90">Homee</h1>
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
        Homee est un projet de domotique conçu pour offrir une solution accessible, flexible et performante face aux limites des systèmes traditionnels. En s'appuyant sur un réseau mesh, Homee élimine les contraintes de portée des réseaux classiques tout en réduisant les coûts d'installation. Pensé pour être "Plug and Play", le système permet une mise en œuvre simplifiée et évolutive, sans nécessiter de travaux lourds. Il intègre également une application mobile intuitive pour contrôler un grand nombre d'appareils, avec des mises à jour à distance pour garantir sa pérennité.
      </p>
      <p class="text-[##F1DABF] opacity-80 font-medium">
        Sur le plan technique, j’ai réalisé l’application mobile de bout en bout, du design à la mise en œuvre, en utilisant une PWA développée avec Vue.js et Tailwind CSS. J’ai également conçu le circuit imprimé du produit à l’aide du logiciel de CAO électronique KiCad.
      </p>
      <p class="text-[##F1DABF] opacity-80 font-medium">
        Le projet a été réalisé dans le cadre d’un travail à l’École Centrale de Lille et présenté aux professeurs.
      </p>
      <p class="text-[##F1DABF] opacity-80 font-medium">
        Cependant, aucun plan de déploiement n’est prévu à ce jour.
      </p>
      <div class="w-20 h-1 bg-[#F1DABF] opacity-80"></div>
      <div class="flex gap-2 flex-col">
        <div class="flex gap-2 items-center">
          <mdicon name="github" width="32" height="32" class="text-[##F1DABF] opacity-90"/>
          <p class="text-[##F1DABF] opacity-80 font-bold">Le code de l'application n'est pas public pour le moment</p>
        </div>
        <div class="flex gap-2 items-center">
          <mdicon name="github" width="32" height="32" class="text-[##F1DABF] opacity-90"/>
          <p class="text-[##F1DABF] opacity-80 font-bold">Consulter le Code de la partie électronique ici (Pas réalisé pas moi)</p>
        </div>
        <div class="flex gap-2 items-center">
          <mdicon name="github" width="32" height="32" class="text-[##F1DABF] opacity-90"/>
          <p class="text-[##F1DABF] opacity-80 font-bold">Consulter les fichiers sources du circuit imprimé</p>
        </div>
        <div class="flex gap-2 items-center">
          <mdicon name="github" width="32" height="32" class="text-[##F1DABF] opacity-90"/>
          <p class="text-[##F1DABF] opacity-80 font-bold">Consulter la présentation</p>
        </div>
      </div>
    </div>
    <div class="h-full w-1/2">
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
          color="#F78B3D"
          cast-shadow
          :position="[3, 3, 3]"
          :intensity="10"
        />
        <TresAmbientLight :intensity="1" />
      </TresCanvas>
    </div>
  </div>
</template>