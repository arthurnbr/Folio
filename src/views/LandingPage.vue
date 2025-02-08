<script setup lang="ts">
import {TresCanvas} from '@tresjs/core';
import {MouseParallax, Levioso} from '@tresjs/cientos';
import {BasicShadowMap, SRGBColorSpace, NoToneMapping} from 'three'
import {Bloom, EffectComposer, Noise} from '@tresjs/post-processing/pmndrs'
import {useAssetStore} from '../Store/store.ts';
import {BlendFunction} from 'postprocessing'
import Test from '../models/LandingPageModel.vue';
import {useAnimate} from "@vueuse/core";
import {ref} from "vue";

defineProps<{ scrollto: (index: number) => void}>();
const assetStore = useAssetStore();

const gl = {
  clearColor: '#2c0e36',
  shadows: true,
  alpha: false,
  shadowMapType: BasicShadowMap,
  outputColorSpace: SRGBColorSpace,
  toneMapping: NoToneMapping,
}

const iconRef = ref();

useAnimate(
    iconRef,
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
  <div class="relative">
    <div class="absolute top-0 left-0 w-full h-full z-10 flex flex-col justify-center items-center p-8">
      <Transition name="slide-fade" mode="out-in">
        <div
            class="xl:w-[50%] flex flex-col bg-black bg-opacity-40 backdrop-blur-md gap-5 transition-all duration-300 overflow-hidden rounded-3xl shadow-2xl p-4"
            v-if="!assetStore.isLoading">
          <div class="inline-flex gap-4">
            <div class="w-7 h-7 bg-[#68cfcf] rounded-full shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)]"></div>
            <div class="w-7 h-7 bg-[#a371e0] rounded-full shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)]"></div>
          </div>
          <div class="flex gap-4 justify-center items-center p-2">
            <img src="/assets/pp.png" class="w-40 h-40"/>
            <div class="flex flex-col justify-center items-start gap-2">
              <h1 class="text-5xl">Arthur Nobrega</h1>
              <p class="text-white text-base font-semibold">
                Ingénieur en formation à Centrale Lille, j'ai développé, au cours de mon cursus et à travers mes projets personnels (<a href="https://folio.nobrega.fr" target="_blank">disponibles ici</a>), de solides compétences en informatique. L'année prochaine, je souhaite approfondir mes connaissances en réalisant un contrat de professionnalisation dans ce domaine, pour la période de septembre 2025 à juin 2026.
              </p>
            </div>
          </div>
          <div class="flex gap-4">
            <button
                class="flex-grow flex items-center justify-center p-2.5 bg-black bg-opacity-50 rounded-xl cursor-pointer text-white text-2xl font-bold"
                @click="scrollto(1)">
              Découvrir mon travail
            </button>

              <a
                  class="flex-grow flex items-center justify-center p-2.5 cursor-pointer text-white text-2xl font-semibold"
                  href="https://cv.nobrega.fr"
                  target="_blank"
              >
                Voir mon CV
              </a>
          </div>
        </div>
      </Transition>
      <Transition name="fade" mode="out-in">
        <div class="w-full z-10 flex justify-center items-center p-8 h-32" v-if="!assetStore.isLoading" >
          <button @click="scrollto(1)">
            <mdicon name="chevron-double-down" height="48" width="48" ref="iconRef"/>
          </button>
        </div>
      </Transition>
    </div>
    <Transition name="fade" mode="out-in">
      <div class="absolute bottom-0 left-0 w-full z-10 flex justify-center items-center p-8"
           v-if="!assetStore.isLoading">
        <div id="contacts" class="flex flex-row flex-wrap pt-5 gap-4">
          <p class="flex">
            <img
                class="inline h-5 w-5 mr-1 mt-[2px]"
                src="https://uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/email-envelope-line-white-icon.svg"
            />
            <a href="mailto:arthur.nbga@gmail.com" target="_blank">arthur.nbga@gmail.com</a>
          </p>
          <p>
            <img
                class="inline h-5 w-5 mr-1 mb-1"
                src="https://uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/phone-ringing-white-icon.svg"
            />
            <a href="tel:0782786247" target="_blank">+33782786247</a>
          </p>
          <p>
            <img
                class="inline h-5 w-5 mr-1 mb-1"
                src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-app-white-icon.svg"
            />
            <a href="https://www.linkedin.com/in/arthurnbga/" target="_blank">arthurnbga</a>
          </p>
          <p>
            <img
                class="inline h-5 w-5 mr-1 mb-1"
                src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-white-icon.svg"
            />
            <a href="https://github.com/arthurnbr" target="_blank">arthurnbr</a>
          </p>
        </div>
      </div>
    </Transition>
    <TresCanvas v-bind="gl">
      <TresPerspectiveCamera
          :position="[0, 0, 10]"
          :look-at="[0, 0, 0]"
      />
      <Suspense>
        <Levioso>
          <Test/>
        </Levioso>
      </Suspense>
      <TresDirectionalLight
          color="#F78B3D"
          :position="[3, 3, 3]"
          :intensity="1"
      />
      <TresAmbientLight :intensity="2"/>
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

<style scoped>
.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}


.fade-enter-active {
  transition: all 1s ease-out;
}

.fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>