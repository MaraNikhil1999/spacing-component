<script setup lang="ts">
import { ref, watch } from 'vue';
interface Props {
    initialMargin: string;
    showSuggestions?: boolean;
    dropDownOptions: string[];
}
const props = withDefaults(defineProps<Props>(), { showSuggestions: true });
const initialMargin = ref(props.initialMargin);
watch(() => props.initialMargin, (newVal) => {
    initialMargin.value = newVal;
});
</script>

<template>
    <div>
        <label for="marginTop">Margin Top: </label>
        <input v-model="initialMargin" type="text" id="marginTop" placeholder="e.g., 10px" />
        <select v-if="props.showSuggestions" name="" id="">
            <option v-for="option in props.dropDownOptions" :key="option" :value="option">{{ option }}</option>
        </select>
    </div>
</template>

<style scoped></style>
