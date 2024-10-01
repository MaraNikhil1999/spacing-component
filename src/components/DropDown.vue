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
        <div v-if="showDropDown">
            <ul>
                <li
                    v-for="option in props.options"
                    :key="option.key"
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
    width: 10px;
    height: 10px;
}
</style>
