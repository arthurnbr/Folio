<script setup lang="ts">
import { useAssetStore } from '../Store/store.ts';
import { storeToRefs } from 'pinia';

const assetStore = useAssetStore();
const { landingpage } = storeToRefs(assetStore); // Toujours réactif

</script>

<template>
  <TresMesh v-if="landingpage">
    <primitive :object="landingpage" />
  </TresMesh>
</template>
