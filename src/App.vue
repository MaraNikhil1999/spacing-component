<script setup lang="ts">
import SpacingComponent from './components/SpacingComponent.vue'
import type { DropDownOption } from './Interface/DropDown'
import type { InputDisabled } from './Interface/StyleObj'
import { useStyleObjStore } from './stores/styleObjStore'

interface SpacingValue {
    value: string
    displayName: string
}

interface Props {
    initialMargin?: SpacingValue
    initialPadding?: SpacingValue
    suggestions?: DropDownOption[]
    showSuggestionsForMarigin?: boolean
    showSuggestionsForPadding?: boolean
    inputDisabled?: InputDisabled
}

const props = withDefaults(defineProps<Props>(), {
    initialMargin: () => ({ value: 'auto', displayName: 'Set to auto' }),
    initialPadding: () => ({ value: '20px', displayName: 'Set to 20px' }),
    suggestions: () => [
        { displayName: 'Apply current value to all', forAll: true },
        { displayName: 'set value to 0px', value: '0px' },
        { displayName: 'Remove this value', value: '' },
        { displayName: 'Remove all value', value: '', forAll: true }

    ],
    showSuggestionsForMarigin: true,
    showSuggestionsForPadding: true,
    inputDisabled: () => ({ margin: { left: true }, padding: {} })
})

const { styleObj } = useStyleObjStore()
const marginSuggestions = [...[props.initialMargin], ...props.suggestions]
const paddingSuggestions = [...[props.initialPadding], ...props.suggestions]
</script>

<template>
    <div class="main">
        <h2>Margin And Padding Adjuster</h2>

        <div class="flex flex-veritcal margin-box full-width brdr-rad-2">
            <div class="flex flex-veritcal full-width pos-rel">
                <span class="top-left p-4 text-cap"> Margin </span>
                <SpacingComponent :initial-spacing="initialMargin.value"
                    :show-suggestions="props.showSuggestionsForMarigin" :drop-down-options="marginSuggestions"
                    spacingProperty="top" spacing-type="margin" :is-input-disabled="inputDisabled.margin.top">
                </SpacingComponent>
            </div>

            <div class="flex full-width">
                <SpacingComponent :initial-spacing="initialMargin.value"
                    :show-suggestions="props.showSuggestionsForMarigin" :drop-down-options="marginSuggestions"
                    spacingProperty="left" spacing-type="margin" :is-input-disabled="inputDisabled.margin.left">
                </SpacingComponent>

                <div class="padding-box full-width brdr-rad-2">
                    <div class="flex flex-veritcal full-width pos-rel">
                        <span class="top-left p-4 text-cap"> Padding </span>

                        <SpacingComponent :initial-spacing="initialPadding.value"
                            :show-suggestions="props.showSuggestionsForPadding" :drop-down-options="paddingSuggestions"
                            spacingProperty="top" spacing-type="padding" :is-input-disabled="inputDisabled.padding.top">
                        </SpacingComponent>
                    </div>

                    <div class="flex">
                        <SpacingComponent :initial-spacing="initialPadding.value"
                            :show-suggestions="props.showSuggestionsForPadding" :drop-down-options="paddingSuggestions"
                            spacingProperty="left" spacing-type="padding"
                            :is-input-disabled="inputDisabled.padding.left">
                        </SpacingComponent>

                        <div class="rectangle-box bg-white brdr-rad-2"></div>
                        <SpacingComponent :initial-spacing="initialPadding.value"
                            :show-suggestions="props.showSuggestionsForPadding" :drop-down-options="paddingSuggestions"
                            spacingProperty="right" spacing-type="padding"
                            :is-input-disabled="inputDisabled.padding.right">
                        </SpacingComponent>
                    </div>
                    <SpacingComponent :initial-spacing="initialPadding.value"
                        :show-suggestions="props.showSuggestionsForPadding" :drop-down-options="paddingSuggestions"
                        spacingProperty="bottom" spacing-type="padding"
                        :is-input-disabled="inputDisabled.padding.bottom">
                    </SpacingComponent>
                </div>
                <SpacingComponent :initial-spacing="initialMargin.value"
                    :show-suggestions="props.showSuggestionsForMarigin" :drop-down-options="marginSuggestions"
                    spacingProperty="right" spacing-type="margin" :is-input-disabled="inputDisabled.margin.right">
                </SpacingComponent>
            </div>
            <SpacingComponent :initial-spacing="initialMargin.value" :show-suggestions="props.showSuggestionsForMarigin"
                :drop-down-options="marginSuggestions" spacingProperty="bottom" spacing-type="margin"
                :is-input-disabled="inputDisabled.margin.bottom">
            </SpacingComponent>
        </div>
    </div>
    <pre>
        {{ styleObj }}
    </pre>
</template>

<style scoped>
.main {
    margin: calc(var(--margin-unit) * 5);
    text-align: center;
    font-weight: bold;
}

.margin-box {
    border: 1px solid var(--bdr-grey);
    background-color: var(--bg-grey);
}

.padding-box {
    border: 1px solid var(--bdr-blue);
    background-color: var(--bg-blue);
}

.rectangle-box {
    flex-grow: 1;
    min-height: calc(var(--height-unit) * 13);
}

.p-4 {
    padding: calc(var(--padding-unit) * 4);
}

.top-left {
    align-self: flex-start;
    justify-self: flex-start;
    position: absolute;
    top: 0;
    left: 0;
}
</style>
