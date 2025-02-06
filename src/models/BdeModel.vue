<script setup lang="ts">
import {useAssetStore} from "../Store/store.ts";
import {storeToRefs} from "pinia";

const assetStore = useAssetStore();
const { bde } = storeToRefs(assetStore); // Toujours réactif
</script>

<template>
    <TresMesh v-if="bde">
        <primitive :object="bde"/>
    </TresMesh>
</template>