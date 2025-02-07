<script setup lang="ts">
import { TresCanvas } from "@tresjs/core";
import { MouseParallax, Levioso } from "@tresjs/cientos";
import { BasicShadowMap, SRGBColorSpace, NoToneMapping } from "three";
import { Bloom, EffectComposer, Noise } from "@tresjs/post-processing/pmndrs";
import Test from "../models/LandingPageModel.vue";
import { BlendFunction } from "postprocessing";


const gl = {
  clearColor: "#2c0e36",
  shadows: true,
  alpha: false,
  shadowMapType: BasicShadowMap,
  outputColorSpace: SRGBColorSpace,
  toneMapping: NoToneMapping,
};
</script>
<template>
  <div>
    <TresCanvas v-bind="gl">
      <TresPerspectiveCamera :position="[0, 0, 10]" :look-at="[0, 0, 0]" />
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
          :intensity="0.5"
          :luminance-threshold="0.1"
          :luminance-smoothing="0.3"
          mipmap-blur
        />
        <Noise premultiply :blend-function="BlendFunction.SCREEN" />
      </EffectComposer>
      <MouseParallax :factor="1" :ease="[5, 0.1]" />
    </TresCanvas>
  </div>
</template>
