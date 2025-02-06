<script setup lang="ts">
import { useAssetStore } from '../Store/store.ts';
import { storeToRefs } from 'pinia';

const assetStore = useAssetStore();
const { test } = storeToRefs(assetStore); // Toujours réactif

</script>

<template>
  <TresMesh v-if="test">
    <primitive :object="test" />
  </TresMesh>
</template>
