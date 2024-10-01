<script setup lang="ts">
import { reactive, watch, ref, computed } from 'vue';
import SpacingComponent from './components/SpacingComponent.vue';
import type { DropDownOption } from './Interface/DropDown'
import { useStyleObjStore } from './stores/styleObjStore';

interface SpacingValues {
    top: string;
    right: string;
    bottom: string;
    left: string;
}
interface Props {
    initialMargin: SpacingValues;
    initialPadding: SpacingValues;
    suggestions: DropDownOption[];
    showSuggestions: boolean;
};

const props = withDefaults(defineProps<Props>(), {
    initialMargin: () => ({ top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' }),
    initialPadding: () => ({ top: '20px', right: '20px', bottom: '20px', left: '20px' }),
    suggestions: () => [{ key: "applyToAll", displayName: "Apply to all" }],
    showSuggestions: true,
});

const emit = defineEmits(['update-values']);
const { styleObj } = useStyleObjStore();


</script>

<template>
    <div class="margin-adjuster">
        <h2>Margin Adjuster</h2>

        <div class="">

            <SpacingComponent :initial-margin="initialMargin.top" :show-suggestions="props.showSuggestions"
                :drop-down-options="props.suggestions" spacing-position="top" spacing-type="margin">
            </SpacingComponent>
            <div class="flex">
                <SpacingComponent :initial-margin="initialMargin.left" :show-suggestions="props.showSuggestions"
                    :drop-down-options="props.suggestions" spacing-position="left" spacing-type="margin">
                </SpacingComponent>

                <div class="padding">
                    
                </div>
                <SpacingComponent :initial-margin="initialMargin.right" :show-suggestions="props.showSuggestions"
                    :drop-down-options="props.suggestions" spacing-position="right" spacing-type="margin">
                </SpacingComponent>

            </div>
            <SpacingComponent :initial-margin="initialMargin.bottom" :show-suggestions="props.showSuggestions"
                :drop-down-options="props.suggestions" spacing-position="bottom" spacing-type="margin">
            </SpacingComponent>

        </div>

        <pre>
            {{ styleObj }}
        </pre>
    </div>
</template>



<style scoped>
.margin-adjuster {
    margin: 20px;
    text-align: center;
}

.flex {
    display: flex;
    justify-content: space-between;
}
</style>
