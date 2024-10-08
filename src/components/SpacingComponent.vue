<script setup lang="ts">
import DropDown from './DropDown.vue'
import type { DropDownOption } from '../Interface/DropDown'
import type { SpacingProperty, SpacingType } from '../Interface/StyleObj'
import { isValidInputValue } from '../utils//CSS.utils'
import { useStyleObjStore } from '../stores/styleObjStore'

interface Props {
    initialSpacing: string
    showSuggestions: boolean
    dropDownOptions: DropDownOption[]
    spacingProperty: SpacingProperty
    spacingType: SpacingType
    isInputDisabled: boolean | undefined
}
const props = defineProps<Props>()
const styleObjStore = useStyleObjStore()
let inputValue = props.initialSpacing

styleObjStore.setDefaultValue(props.spacingType, props.spacingProperty, props.initialSpacing)

/**
 * this will set the value in the store,if the value is changed from the dropdown
 * if the value is for all then it will set the value for all the sides
 * if the value is not for all then it will set the value for the current side
 * @param dropDownOption
 */
function selectionChanged(dropDownOption: DropDownOption) {
    if (dropDownOption.hasOwnProperty('value')) {
        inputValue = dropDownOption.value || ''
    }
    if (dropDownOption.forAll) {
        styleObjStore.setStyleObj(props.spacingType, 'ALL', inputValue)
    } else {
        styleObjStore.setStyleObj(props.spacingType, props.spacingProperty, inputValue)
    }
}

/**
 * this will set the value in the store,if the value is changed from the input field
 * if the value is not valid then it will set the value to empty string
 * @param event
 */
function setValueInStore(event: Event) {
    const target = event.target as HTMLInputElement
    inputValue = target.value || ''
    if (!isValidInputValue(inputValue)) {
        inputValue = ''
    }
    styleObjStore.setStyleObj(props.spacingType, props.spacingProperty, inputValue)
}
</script>

<template>
    <span class="flex m-4 inpt-cntr">
        <input
            type="text"
            v-model="styleObjStore.styleObj.value[spacingType][spacingProperty]"
            :disabled="isInputDisabled"
            :id="spacingProperty"
            placeholder="0px"
            class="input no-bg-bdr"
            @change="setValueInStore"
        />
        <DropDown
            :options="props.dropDownOptions"
            :show-suggestions="showSuggestions"
            @set-values="selectionChanged"
        ></DropDown>
    </span>
</template>

<style scoped>
.inpt-cntr {
    height: calc(var(--height-unit) * 4);
}

.input {
    width: calc(var(--width-unit) * 7);
    height: 100%;
    margin: 0;
    font-weight: inherit;
}

.m-4 {
    margin: calc(var(--margin-unit) * 4);
}
</style>
