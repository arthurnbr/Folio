<script setup lang="ts">
import { TresCanvas } from '@tresjs/core';
import { BasicShadowMap, SRGBColorSpace, NoToneMapping } from 'three'
import { Levioso } from '@tresjs/cientos';
import MowgLilleModel from '../models/MowgLilleModel.vue';

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
    <div class="h-full w-1/2">
      <TresCanvas v-bind="gl">
        <Suspense>
          <Levioso>
            <MowgLilleModel></MowgLilleModel>
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
    <div class="2xl:w-full w-3/5 h-full flex flex-col gap-2 2xl:p-16 p-4 justify-center">
      <div class="flex items-center gap-6">
        <h1 class="text-8xl text-black opacity-90">Mowg'Lille</h1>
        <!-- <div class="flex flex-col justify-center items-center p-4 bg-black bg-opacity-10 rounded-2xl">
          <h2 class="text-5xl text-black font-black opacity-90">500</h2>
          <p class="text-black text-xl font-medium opacity-80">Utilisateurs</p>
        </div>
        <div class="flex flex-col justify-center items-center p-4 bg-black bg-opacity-10 rounded-2xl">
          <div class="flex gap-2">
            <mdicon name="vuejs" width="48" height="48" class="text-black opacity-90"/>
            <mdicon name="tailwind" width="48" height="48" class="text-black opacity-90"/>
            <mdicon name="language-ruby-on-rails" width="48" height="48" class="text-black opacity-90"/> 
            <mdicon name="blender-software" width="48" height="48" class="text-black opacity-90"></mdicon>
          </div>
          <p class="text-black text-xl font-medium opacity-80">Utilisant</p>
        </div> -->
      </div>
      <div class="w-20 h-1 bg-black opacity-80"></div>
      <div class="flex gap-4">
        
      </div>
      <p class="text-black opacity-80 font-medium">
        <b>Mowg'Lille</b> est une application développée dans le cadre de la campagne BDE, visant à simplifier la gestion des événements étudiants tout en favorisant l'engagement collectif. Elle offre une identification rapide grâce à un <b>QR code</b>, un accès centralisé aux <b>informations sur les activités à venir</b>, ainsi qu’un <b>système de classements</b> pour animer les concours. Par ailleurs, l’application propose des <b>défis</b>, des <b>jeux</b> et des <b>collectibles</b> pour renforcer la participation, tout en intégrant des outils de communication adaptés aux besoins des utilisateurs.
      </p>
      <p class="text-black opacity-80 font-medium">
        Au niveau technique, l'application est développée avec un Front en <b>Vue/Tailwind CSS</b> et un Back en <b>Ruby on Rails</b> en implémentant des technologies <b>PWA (Progressive Web App)</b>. Je n'ai pas participé au dévlopement mais j'ai crée l'intégralité des mockups sur <b>Figma</b> ainsi que tous les assets sur <b>Blender</b> ou <b>Photoshop</b>.
      </p>
      <p class="text-black opacity-80 font-medium">
        L'application a été déploiyée sur le <b>Play Store</b> et l'<b>App Store</b> mais elle n'est pas disponible au public car elle avait pour but de durée une semaine pour la campagne BDE. Vous pouvez cependant consulter le code source en <b>cliquant ici</b>
      </p>
      <div class="w-20 h-1 bg-black opacity-80"></div>
      <div class="flex gap-2 items-center">
        <mdicon name="github" width="32" height="32" class="text-black opacity-90"/>
        <a class="text-black opacity-80 font-bold" href="https://github.com/stanig2106/mowglille-campagne" target="_blank">Consulter le code</a>
      </div>
    </div>
  </div>
</template>