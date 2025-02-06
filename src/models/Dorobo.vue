<script setup lang="ts">
import {useAssetStore} from "../Store/store.ts";
import {storeToRefs} from "pinia";

const assetStore = useAssetStore();
const { CP } = storeToRefs(assetStore); // Toujours réactif
</script>

<template>
  <TresMesh v-if="CP">
    <primitive :object="CP" />
  </TresMesh>
</template>
