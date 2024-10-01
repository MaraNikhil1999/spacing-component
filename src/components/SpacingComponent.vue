<script setup lang="ts">
import { ref, watch, onBeforeMount } from 'vue'
import DropDown from './DropDown.vue'
import type { DropDownOption } from '../Interface/DropDown'
import type { SpacingProperty, SpacingType } from '../Interface/StyleObj'
import { isValidPadding } from '../utils//CSS.utils'
import { useStyleObjStore } from '../stores/styleObjStore'

interface Props {
    initialSpacing: string
    showSuggestions: boolean
    dropDownOptions: DropDownOption[]
    spacingPosition: SpacingProperty
    spacingType: SpacingType
    isInputDisabled: boolean | undefined
}
const props = defineProps<Props>()
const styleObjStore = useStyleObjStore()
const initialSpacing = ref(props.initialSpacing)

onBeforeMount(() => {
    styleObjStore.setStyleObj(props.spacingType, props.spacingPosition, initialSpacing.value)
})

function selectionChanged(dropDownOption: DropDownOption) {
    if (dropDownOption.value) {
        initialSpacing.value = dropDownOption.value
    }
    if (dropDownOption.forAll) {
        styleObjStore.setStyleObj(props.spacingType, 'ALL', initialSpacing.value)
    } else {
        styleObjStore.setStyleObj(props.spacingType, props.spacingPosition, initialSpacing.value)
    }
}

function setValueInStore() {
    if (isValidPadding(initialSpacing.value)) {
        styleObjStore.setStyleObj(props.spacingType, props.spacingPosition, initialSpacing.value)
    } else {
        initialSpacing.value = ''
    }
}

watch(
    () => styleObjStore,
    (newVal) => {
        const updatedValue = newVal.styleObj.changed[props.spacingType][props.spacingPosition]
        if (updatedValue) {
            initialSpacing.value = updatedValue
        }
    },
    { deep: true }
)
</script>

<template>
    <div class="flex m-4">
        <input type="text" v-model="initialSpacing" :disabled="isInputDisabled" :id="spacingPosition"
            @change="setValueInStore" placeholder="0px" class="input-box" />
        <DropDown :options="props.dropDownOptions" @set-values="selectionChanged"></DropDown>
    </div>
</template>

<style scoped>
.input-box {
    width: calc(var(--width-unit)*10);
}

.m-4 {
    margin: calc(var(--margin-unit)*4);
}
</style>
