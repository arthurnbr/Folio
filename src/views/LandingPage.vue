<script setup lang="ts">
import { TresCanvas } from '@tresjs/core';
import { MouseParallax, Levioso } from '@tresjs/cientos';
import { BasicShadowMap, SRGBColorSpace, NoToneMapping } from 'three'
import { Bloom, EffectComposer, Noise } from '@tresjs/post-processing/pmndrs'
import { Suspense } from 'vue';
import { BlendFunction } from 'postprocessing'
import Test from '../models/Test.vue';



const gl = {
  clearColor: '#2c0e36',
  shadows: true,
  alpha: false,
  shadowMapType: BasicShadowMap,
  outputColorSpace: SRGBColorSpace,
  toneMapping: NoToneMapping,
}

</script>

<template>
<div>
  <div class="absolute top-0 left-0 w-full h-full z-40 flex flex-col justify-center items-center p-8" >
    <div class="xl:w-[50%] flex flex-col bg-black bg-opacity-40 backdrop-blur-md gap-5 transition-all duration-300 overflow-hidden rounded-3xl shadow-2xl p-4">
      <div class="inline-flex gap-4">
        <div class="w-7 h-7 bg-[#68cfcf] rounded-full shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)]"></div>
        <div class="w-7 h-7 bg-[#a371e0] rounded-full shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)]"></div>
      </div>
      <div class="flex gap-4 justify-center items-center p-2">
        <img src="/assets/pp.png" class="w-40 h-40" />
        <div class="flex flex-col justify-center items-start gap-2">
          <h1 class="text-5xl">Arthur Nobrega</h1>
          <p class="text-white text-base font-semibold">Ingénieur en formation, passionné d'informatique, mon objectif est d'en apprendre plus sur ces métiers en entreprise, en particulier dans le domaine des systèmes embarqués ou du développement WEB/Mobile. Pour cette raison, je recherche un contrat de professionnalisation dans ces domaines pour la période de septembre 2025 à juin 2026.</p>
        </div>
      </div>
      <div class="flex gap-4">
        <div class="flex-grow flex items-center justify-center p-2.5 bg-black bg-opacity-50 rounded-xl cursor-pointer" @click="scrollto(1)">
          <h2 class="text-white text-2xl font-bold">Découvrir mon travail</h2>
        </div>
        <div class="flex-grow flex items-center justify-center p-2.5 cursor-pointer">
          <h2 class="text-white text-2xl font-semibold">Voir mon CV</h2>
        </div>
      </div>
    </div>
  </div>
  <TresCanvas v-bind="gl">
    <TresPerspectiveCamera
    :position="[0, 0, 10]"
    :look-at="[0, 0, 0]"
  />
    <Suspense>
        <Levioso>
        <Test />
        </Levioso>
    </Suspense>
    <TresDirectionalLight
      color="#F78B3D"
      :position="[3, 3, 3]"
      :intensity="1"
    />
    <TresAmbientLight :intensity="2" />
    <EffectComposer>
        <Bloom
      :radius="10"
      :intensity=".5"
      :luminance-threshold="0.1"
      :luminance-smoothing="0.3"
      mipmap-blur
    />
        <Noise
        premultiply
        :blend-function="BlendFunction.SCREEN"
        />
    </EffectComposer>
    <MouseParallax
      :factor="1"
      :ease="[5, 0.1]"
    />
  </TresCanvas>
</div>
</template>