import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { SpacingComponentData, SpacingProperty, SpacingType } from '@/Interface/StyleObj'
import { allSpacingProperties } from '@/utils/CSS.utils'

// TODO: Make this store accesiible to all components and functions for setting and getting the styleObj

export const useStyleObjStore = defineStore('styleObj', () => {
    const styleObj = ref<SpacingComponentData>({
        changed: {
            margin: {},
            padding: {}
        },
        value: {
            margin: {},
            padding: {}
        }
    })
    function setStyleObj(
        spacingType: SpacingType,
        spacingProperty: SpacingProperty | 'ALL',
        value: string
    ) {
        if (spacingProperty === 'ALL') {
            for (const property of allSpacingProperties) {
                styleObj.value.changed[spacingType][property] = value
                styleObj.value.value[spacingType][property] = value
            }
        } else {
            styleObj.value.changed[spacingType][spacingProperty] = value
            styleObj.value.value[spacingType][spacingProperty] = value
        }
    }
    function setDefaultValue(
        spacingType: SpacingType,
        spacingProperty: SpacingProperty,
        value: string
    ) {
        styleObj.value.value[spacingType][spacingProperty] = value
    }
    return { styleObj, setStyleObj, setDefaultValue }
})
