import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { SpacingComponentData, SpacingProperty, SpacingType } from '@/Interface/StyleObj'
import { allSpacingProperties } from '@/utils/CSS.utils'

// TODO: Make this store accesiible to all components and functions for setting and getting the styleObj

export const useStyleObjStore = defineStore('styleObj', () => {
    const styleObj = ref<SpacingComponentData>({
        "changed": {
            "margin": {
            },
            "padding": {
            }
        },
        "value": {
            "margin": {
                "top": "auto",
                "bottom": "auto",
                "right": "auto",
                "left": "auto"
            },
            "padding": {
                "top": "12%",
                "bottom": "12%",
                "right": "12%",
                "left": "12%"
            }
        }
    })
    function setStyleObj(spacingType: SpacingType, spacingProperty: SpacingProperty | 'ALL', value: string) {
        if (spacingProperty === 'ALL') {
            for (const property of allSpacingProperties) {
                styleObj.value.changed[spacingType][property] = value;
            }
        } else {
            styleObj.value.changed[spacingType][spacingProperty] = value;
        }
    }
    return { styleObj,setStyleObj }
})
