import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { SpacingComponentData, SpacingProperty, SpacingType } from '@/Interface/StyleObj'
import { allSpacingProperties } from '@/utils/CSS.utils'

export const useStyleObjStore = defineStore('styleObj', () => {
    const styleObj = ref<SpacingComponentData>({
        changed: {
            margin: {},
            padding: {}
        },
        value: {
            margin: {
                top: '',
                bottom: '',
                right: '',
                left: ''
            },
            padding: {
                top: '',
                bottom: '',
                right: '',
                left: ''
            }
        }
    })

    /**
     * Set the value of the styleObj
     * @param spacingType this tells the function if it is margin or padding
     * @param spacingProperty this tells the function which property to change, if all is passed, all properties will be changed
     * @param value set the property to this value
     */
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

    /**
     * Set the default value of the styleObj
     * @param spacingType this tells the function if it is margin or padding
     * @param spacingProperty this tells the function which property to change
     * @param value set the property to this value
     */
    function setDefaultValue(
        spacingType: SpacingType,
        spacingProperty: SpacingProperty,
        value: string
    ) {
        styleObj.value.value[spacingType][spacingProperty] = value
    }
    return { styleObj, setStyleObj, setDefaultValue }
})
