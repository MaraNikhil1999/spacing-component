<script setup lang="ts">
import { reactive, defineProps, watch, defineEmits, ref, computed } from 'vue';
import MarginInputGroup from './components/MarginInputGroup.vue';

interface SpacingValues {
    top: string;
    right: string;
    bottom: string;
    left: string;
}
interface Props {
    initialMargin: SpacingValues;
    initialPadding: SpacingValues;
    suggestions: string[];
    showSuggestions: boolean;
};

const props = withDefaults(defineProps<Props>(), {
    initialMargin: () => ({ top: '0', right: '0', bottom: '0', left: '0' }),
    initialPadding: () => ({ top: '20px', right: '20px', bottom: '20px', left: '20px' }),
    suggestions: () => ['0', '4', '8', '12', '16', '20', '24', '32', '40', '48', '56', '64'],
    showSuggestions: true,
});

const emit = defineEmits(['update-values']);

const marginLeft = ref("0px");
const marginRight = ref("0px");
const marginTop = ref("0px");
const marginBottom = ref("0px");
const paddingLeft = ref("0px");
const paddingRight = ref("0px");
const paddingTop = ref("0px");
const paddingBottom = ref("0px");
const rectangleStyle = computed(() => ({
    marginLeft: marginLeft.value,
    marginRight: marginRight.value,
    marginTop: marginTop.value,
    marginBottom: marginBottom.value,
    paddingLeft: paddingLeft.value,
    paddingRight: paddingRight.value,
    paddingTop: paddingTop.value,
    paddingBottom: paddingBottom.value,
    width: '100px',
    height: '100px',
    backgroundColor: 'blue',
}));


const positions = ['top', 'right', 'bottom', 'left'];



// Methods to set suggested values
const setMarginSuggestion = (event: Event, position: keyof SpacingValues) => {
    const value = (event.target as HTMLSelectElement).value;
    // margin[position] = value;
};

const setPaddingSuggestion = (event: Event, position: keyof SpacingValues) => {
    const value = (event.target as HTMLSelectElement).value;
    // padding[position] = value;
};
</script>

<template>
    <div class="margin-adjuster">
        <h2>Margin Adjuster</h2>

        <div class="">
            <div>
                <MarginInputGroup :initial-margin="'20px'" :show-suggestions="props.showSuggestions" :drop-down-options="props.suggestions"></MarginInputGroup>
            </div>
            <div class="flex">
                <div>
                    <label for="marginLeft">Margin Left: </label>
                    <input v-model="marginLeft" type="text" id="marginLeft" placeholder="e.g., 10px" />
                </div>
                <div class="padding">
                    <div>
                        <label for="paddingTop">padding Top: </label>
                        <input v-model="paddingTop" type="text" id="paddingTop" placeholder="e.g., 10px" />
                    </div>
                    <div class="flex">
                        <div>
                            <label for="paddingLeft">padding Left: </label>
                            <input v-model="paddingLeft" type="text" id="paddingLeft" placeholder="e.g., 10px" />
                        </div>
                        <div class="rectangle" :style="rectangleStyle"></div>
                        <div>

                            <label for="paddingRight">padding Right: </label>
                            <input v-model="paddingRight" type="text" id="paddingRight" placeholder="e.g., 10px" />
                        </div>
                    </div>
                    <div>
                        <label for="paddingBottom">padding Bottom: </label>
                        <input v-model="paddingBottom" type="text" id="paddingBottom" placeholder="e.g., 10px" />
                    </div>
                </div>
                <div>
                    <label for="marginRight">Margin Right: </label>
                    <input v-model="marginRight" type="text" id="marginRight" placeholder="e.g., 10px" />
                </div>
            </div>
            <div>
                <label for="marginBottom">Margin Bottom: </label>
                <input v-model="marginBottom" type="text" id="marginBottom" placeholder="e.g., 10px" />
            </div>
        </div>
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
