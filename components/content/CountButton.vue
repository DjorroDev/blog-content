<script setup>
import { ref } from 'vue'

// reactive state
const count = ref(0)

// functions that mutate state and trigger updates
function increment() {
    count.value++
}
</script>

<template>
    <button class="bg-pink-200 active:bg-pink-300 p-2 rounded-lg" @click="increment">Count is: {{ count }}</button>
</template>