<script setup lang="ts">
import { useCounterStore } from './stores/counter'
import HelloWorld from './components/HelloWorld.vue'
const store = useCounterStore()
</script>

<template>
    {{ store.count }}
    <HelloWorld msg="Hello Vue 3 + Vite" />
</template>

<style scoped></style>
