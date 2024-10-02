<script setup lang="ts">
import type { DropDownOption } from './../Interface/DropDown'
import { ref } from 'vue'
interface Props {
    options: DropDownOption[],
    showSuggestions: boolean
}
const props = defineProps<Props>()
const showDropDown = ref(false)
const mainElement = ref<HTMLElement>()
const emit = defineEmits(['set-values'])

function setInputValueInParent(DropDownOption: any) {
    emit('set-values', DropDownOption)
    toggleDropDown()
}

function checkIsOutSideClick(event: MouseEvent) {
    const target = event.target as HTMLElement
    if (target && !mainElement.value?.contains(target)) {
        toggleDropDown()
    }
}

function toggleDropDown() {
    showDropDown.value = !showDropDown.value
    if (showDropDown.value) {
        document.addEventListener('click', checkIsOutSideClick)
    } else {
        document.removeEventListener('click', checkIsOutSideClick)
    }
}
</script>

<template>
    <div ref="mainElement">
        <button @click="toggleDropDown" :disabled="!showSuggestions" class="no-bg-bdr cursor-pointer">
            <img class="icon" :class="{ 'rotate': showDropDown }" src="@/icons/icons.svg" alt="Icon" />
        </button>
        <div v-if="showDropDown" class="pos-rel">
            <ul class="list-ctnr bg-white brdr-rad-1 box-shd pos-abs">
                <li
                    v-for="option in props.options"
                    :key="option.value"
                    class="cursor-pointer list"
                    @click="setInputValueInParent(option)"
                >
                    {{ option.displayName }}
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.icon {
    width: calc(var(--width-unit) * 2);
    height: 100%;
}

.cursor-pointer {
    cursor: pointer;
}
.rotate{
    transform: rotate(180deg);
}

.box-shd {
    box-shadow: 0px 0px 12px 6px #b7b5c1;
}

.list-ctnr {
    padding: calc(var(--padding-unit) * 1);
    margin: 0;
    width: max-content;
    left: -74px;
    top: calc(var(--height-unit) * 2);
    z-index: 1;
    text-align: start;
    font-weight: 600;
}

.list {
    list-style-type: none;
    padding: calc(var(--margin-unit) * 2) calc(var(--margin-unit) * 4);
}

.list:hover {
    background-color: var(--hover-color-grey);
}
</style>
