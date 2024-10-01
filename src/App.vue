<script setup lang="ts">
import SpacingComponent from './components/SpacingComponent.vue';
import type { DropDownOption } from './Interface/DropDown'
import type { InputDisabled } from './Interface/StyleObj';
import { useStyleObjStore } from './stores/styleObjStore';

interface SpacingValues {
    top: string;
    right: string;
    bottom: string;
    left: string;
}
interface Props {
    initialMargin?: SpacingValues;
    initialPadding?: SpacingValues;
    suggestions?: DropDownOption[];
    showSuggestionsForMarigin?: boolean;
    showSuggestionsForPadding?: boolean;
    inputDisabled?: InputDisabled
};

const props = withDefaults(defineProps<Props>(), {
    initialMargin: () => ({ top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' }),
    initialPadding: () => ({ top: '20px', right: '20px', bottom: '20px', left: '20px' }),
    suggestions: () => [{ key: "applyToAll", displayName: "Apply current value to all", forAll: true }, { key: "0px", displayName: "set value to 0px", value: '0px' }],
    showSuggestionsForMarigin: true,
    inputDisabled: () => ({ margin: {left:true}, padding: {} })
});

const emit = defineEmits(['update-values']);
const { styleObj } = useStyleObjStore();


</script>

<template>
    <div class="main">
        <h2>Margin Adjuster</h2>

        <div class="flex flex-veritcal margin">

            <SpacingComponent :initial-spacing="initialMargin.top" :show-suggestions="props.showSuggestionsForMarigin"
                :drop-down-options="props.suggestions" spacing-position="top" spacing-type="margin"
                :is-input-disabled="inputDisabled.margin.top">
            </SpacingComponent>
            <div class="flex">
                <SpacingComponent :initial-spacing="initialMargin.left"
                    :show-suggestions="props.showSuggestionsForMarigin" :drop-down-options="props.suggestions"
                    spacing-position="left" spacing-type="margin" :is-input-disabled="inputDisabled.margin.left">
                </SpacingComponent>

                <div class="padding">
                    <SpacingComponent :initial-spacing="initialPadding.top"
                        :show-suggestions="props.showSuggestionsForPadding" :drop-down-options="props.suggestions"
                        spacing-position="top" spacing-type="padding" :is-input-disabled="inputDisabled.padding.top">
                    </SpacingComponent>
                    <div class="flex">
                        <SpacingComponent :initial-spacing="initialPadding.left"
                            :show-suggestions="props.showSuggestionsForPadding" :drop-down-options="props.suggestions"
                            spacing-position="left" spacing-type="padding"
                            :is-input-disabled="inputDisabled.padding.left">
                        </SpacingComponent>

                        <div class="rectangle-box">
                            <h4>BOX</h4>
                        </div>
                        <SpacingComponent :initial-spacing="initialPadding.right"
                            :show-suggestions="props.showSuggestionsForPadding" :drop-down-options="props.suggestions"
                            spacing-position="right" spacing-type="padding"
                            :is-input-disabled="inputDisabled.padding.right">
                        </SpacingComponent>

                    </div>
                    <SpacingComponent :initial-spacing="initialPadding.bottom"
                        :show-suggestions="props.showSuggestionsForPadding" :drop-down-options="props.suggestions"
                        spacing-position="bottom" spacing-type="padding"
                        :is-input-disabled="inputDisabled.padding.bottom">
                    </SpacingComponent>
                </div>
                <SpacingComponent :initial-spacing="initialMargin.right"
                    :show-suggestions="props.showSuggestionsForMarigin" :drop-down-options="props.suggestions"
                    spacing-position="right" spacing-type="margin" :is-input-disabled="inputDisabled.margin.right">
                </SpacingComponent>

            </div>
            <SpacingComponent :initial-spacing="initialMargin.bottom"
                :show-suggestions="props.showSuggestionsForMarigin" :drop-down-options="props.suggestions"
                spacing-position="bottom" spacing-type="margin" :is-input-disabled="inputDisabled.margin.bottom">
            </SpacingComponent>

        </div>

        <pre>
            {{ styleObj }}
        </pre>
    </div>
</template>



<style scoped>
.main {
    margin: 20px;
    text-align: center;
    position: absolute;
    width: 80%;
    left: 10%;
}

.margin {
    border: 2px solid grey;
    background-color: lightgrey;
}

.padding {
    border: 2px solid blue;
    background-color: lightblue;
}

.rectangle-box {
    width: 100%;
    background-color: white;
}
</style>
