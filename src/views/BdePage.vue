<script setup lang="ts">
import { TresCanvas } from '@tresjs/core';
import { BasicShadowMap, SRGBColorSpace, NoToneMapping } from 'three'
import { Levioso } from '@tresjs/cientos';
import BdeModel from '../models/BdeModel.vue';

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
    <div class="xl:h-full h-2/3 w-1/2">
      <TresCanvas v-bind="gl">
        <Suspense>
          <Levioso>
            <BdeModel :position="[0,-1,0]"></BdeModel>
          </Levioso>
        </Suspense>
        <TresPerspectiveCamera
          :position="[0, 0, 9]"
          :look-at="[0, 0, 0]"
        />
        <TresDirectionalLight
          color="#FFFFFF"
          cast-shadow
          :position="[3, 3, 3]"
          :intensity="5"
        />
        <TresAmbientLight :intensity="1" />
      </TresCanvas>
    </div>
    <div class="2xl:w-full w-3/5 h-full flex flex-col gap-2 2xl:p-16 p-4 justify-center">
      <div class="flex items-center gap-6">
        <div class="flex flex-col 2xl:flex-row 2xl:gap-3 items-baseline">
          <h1 class="text-8xl text-black opacity-90">BDE</h1>
          <h2 class="text-2xl 2xl:text-5xl text-black opacity-90 font-semibold">de Centrale Lille</h2>
        </div>
        <div class="flex flex-col justify-center items-center p-4 bg-black bg-opacity-10 rounded-2xl">
          <h2 class="text-5xl text-black font-black opacity-90">1200</h2>
          <p class="text-black text-xl font-medium opacity-80">Étudiants</p>
        </div>
      </div>
      <div class="w-20 h-1 bg-black opacity-80"></div>
      <div class="flex gap-4">
        
      </div>
      <p class="text-black opacity-80 font-medium">
        Durant mon cursus à Centrale Lille, j’ai eu l’opportunité d’assumer le rôle de responsable de l’image du Bureau des Étudiants (BDE). Chargé de promouvoir l’identité visuelle et les activités du BDE auprès de la communauté étudiante, j’ai conçu et réalisé divers supports de communication en m’appuyant sur des outils tels que Photoshop, Blender et Illustrator. Ce travail m’a permis de créer, entre autres, des affiches, des bannières et même le design du pull de promo, garantissant ainsi une cohérence graphique et un fort impact visuel.
      </p>
      <p class="text-black opacity-80 font-medium">
        Par ailleurs, j’ai piloté la réalisation de la plaquette institutionnelle de Centrale, élaborée exclusivement sous InDesign et destinée à illustrer la vie associative aux étudiants de classes préparatoires. Ce projet, mené de bout en bout, a exigé un important travail de recherche, d’organisation et de créativité, afin de transmettre avec précision et dynamisme l’esprit et les valeurs de notre école.
      </p>
      <div class="w-20 h-1 bg-black opacity-80"></div>
      <div class="flex gap-2 items-center">
        <mdicon name="book-open-blank-variant-outline" width="32" height="32" class="text-black opacity-90"/>
        <a class="text-black opacity-80 font-bold" href="https://ecole.centralelille.fr/wp-content/uploads/sites/33/plaquette_alpha_centale-lille_2024-2025.pdf" target="_blank">Consulter la plaquette de Centrale Lille</a>
      </div>
    </div>
  </div>
</template>