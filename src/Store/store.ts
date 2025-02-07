import { defineStore } from 'pinia';
import {computed, shallowRef} from 'vue';
import { useGLTF } from '@tresjs/cientos';
import type { Scene } from 'three'; // Typage correct pour la scène Three.js

export const useAssetStore = defineStore('assets', () => {
const test = shallowRef<Scene | null>(null);
    const CP = shallowRef<Scene | null>(null);
    const homee = shallowRef<Scene | null>(null);
    const mowglille = shallowRef<Scene | null>(null);
    const bde = shallowRef<Scene | null>(null);

    async function loadModel() {
        const [testModel, CPModel, homeeModel, mowglilleModel, bdeModel] = await Promise.all(
            [
                useGLTF('models/test.glb'),
                useGLTF('models/CP.glb'),
                useGLTF('models/homee.glb'),
                useGLTF('models/mowglille.glb', {draco: true}),
                useGLTF('models/bde.glb')
                ]);

        test.value = testModel.scene; // Affectation correcte
        CP.value = CPModel.scene
        homee.value = homeeModel.scene
        mowglille.value = mowglilleModel.scene
        bde.value = bdeModel.scene
    }

    const isLoading = computed(() => {return !(test.value || CP.value || homee.value || mowglille.value || bde.value)});

    return { loadModel, isLoading, test, CP, homee, mowglille, bde };
});
