<script setup lang="ts">
import {useAssetStore} from "../Store/store.ts";
import {storeToRefs} from "pinia";

const assetStore = useAssetStore();
const { mowglille } = storeToRefs(assetStore); // Toujours réactif

</script>

<template>
    <TresMesh v-if="mowglille">
        <primitive :object="mowglille"/>
    </TresMesh>
</template>