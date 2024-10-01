<script setup lang="ts">
import type { DropDownOption } from './../Interface/DropDown'
import { ref } from 'vue'
interface Props {
    options: DropDownOption[]
}
const props = defineProps<Props>()
const showDropDown = ref(false)
const emit = defineEmits(['set-values'])

function setInputValueInParent(DropDownOption: any) {
    showDropDown.value = false
    emit('set-values', DropDownOption)
}
</script>

<template>
    <div>
        <button @click="showDropDown = !showDropDown">
            <img class="icon" src="@/icons/icons.svg" alt="Icon" />
        </button>
        <div v-if="showDropDown" class="pos-abs bg-white">
            <ul class="list-ctnr">
                <li v-for="option in props.options" :key="option.key" class="cursor-pointer list"
                    @click="setInputValueInParent(option)">
                    {{ option.displayName }}
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.icon {
    width: calc(var(--width-unit)*2);
    height: 10px;
}

.cursor-pointer {
    cursor: pointer;
}

.list-ctnr {
    padding:  calc(var(--padding-unit)*2);
    margin: 0;
}

.list {
    list-style-type: none;
    margin: 10px 0;
}
</style>
