<script setup lang="ts">
import { useGLTF } from '@tresjs/cientos'


const { scene, nodes, animations, materials } = await useGLTF('/models/test.glb')

</script>

<template>
    <TresMesh>
        <primitive :object="scene"/>
    </TresMesh>
</template>