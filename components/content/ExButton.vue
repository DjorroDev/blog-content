<script setup>
const isPink = ref(true)

function changeColor() {
    isPink.value = !isPink.value
}

</script>

<template>
    <button @click="changeColor" class="button" :class=" isPink === true ? 'pink' : 'white'">Pencet bang</button>
</template>

<style>
.button {
    color: black;
    padding: 5px;
    border-radius: 10px;
}

.button:hover {
    scale: 104%;
}

.pink {
    background-color: pink;
}

.white {
    background-color: wheat ;
}
</style>