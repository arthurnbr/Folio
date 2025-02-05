<script setup lang="ts">
import { useGLTF } from "@tresjs/cientos";

const { scene } = await useGLTF("/models/CP.glb");
</script>

<template>
  <TresMesh>
    <primitive :object="scene" />
  </TresMesh>
</template>
