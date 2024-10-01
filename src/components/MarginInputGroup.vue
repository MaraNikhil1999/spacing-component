<script setup lang="ts">
import { ref, watch,defineEmits } from 'vue';
import DropDown from './DropDown.vue';
import type { DropDownOption } from './../Interface/DropDown';

interface Props {
    initialMargin: string;
    showSuggestions?: boolean;
    dropDownOptions: DropDownOption[];
}
const props = withDefaults(defineProps<Props>(), { showSuggestions: true });
const selectedOption = ref('');
const emit = defineEmits(['update-values']);

function selectionChanged(dropDownOption: any) {
    initialMargin.value = selectedOption.value;
    // setValueInParent();
    console.log(dropDownOption);
}

function setValueInParent(){
    emit('update-values', initialMargin.value);
}

const initialMargin = ref(props.initialMargin);
watch(() => props.initialMargin, (newVal) => {
    initialMargin.value = newVal;
});
</script>

<template>
    <div>
        <input v-model="initialMargin" type="text" id="marginTop" @change="setValueInParent" placeholder="0px" />
        <DropDown :options="props.dropDownOptions" @set-values="selectionChanged"></DropDown>
    </div>
</template>

<style scoped></style>
