<script setup lang="ts">
import { ref, watch } from 'vue';
import DropDown from './DropDown.vue';
import type { DropDownOption } from '../Interface/DropDown';
import type { SpacingProperty, SpacingType } from '../Interface/StyleObj';
import { isValidPadding } from '../utils//CSS.utils';
import { useStyleObjStore } from '../stores/styleObjStore';
import { allSpacingProperties } from '../utils//CSS.utils';

interface Props {
    initialMargin: string;
    showSuggestions: boolean;
    dropDownOptions: DropDownOption[];
    spacingPosition: SpacingProperty;
    spacingType: SpacingType
}
const props = defineProps<Props>();
const styleObjStore = useStyleObjStore();
const initialMargin = ref(props.initialMargin);

function selectionChanged(dropDownOption: DropDownOption) {
    if(dropDownOption.forAll){
        styleObjStore.setStyleObj(props.spacingType, 'ALL', initialMargin.value);

    }else{
        styleObjStore.setStyleObj(props.spacingType, props.spacingPosition, initialMargin.value);
    }
        
}

function setValueInStore() {
    if (isValidPadding(initialMargin.value)) {
       styleObjStore.setStyleObj(props.spacingType, props.spacingPosition, initialMargin.value);
    } else {
        initialMargin.value = '';
    }
}


</script>

<template>
    <div>
        <input v-model="initialMargin" type="text" id="marginTop" @change="setValueInStore" placeholder="0px" />
        <DropDown :options="props.dropDownOptions" @set-values="selectionChanged"></DropDown>
    </div>
</template>

<style scoped></style>
