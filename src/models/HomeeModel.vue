<script setup lang="ts">
import {useAssetStore} from "../Store/store.ts";
import {storeToRefs} from "pinia";


const assetStore = useAssetStore();
const { homee } = storeToRefs(assetStore); // Toujours réactif

</script>

<template>
    <TresMesh v-if="homee">
        <primitive :object="homee"/>
    </TresMesh>
</template>