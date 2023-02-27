<script setup>
const props = defineProps(["type"])
</script>

<template>
    <div class="info-box not-prose" :class="[type]">
        <Icon class="icon" name="heroicons-solid:exclamation-circle" v-if="type == 'warning'" />
        <Icon class="icon" name="heroicons-solid:ban" v-else-if="type == 'error'" />
        <Icon class="icon" name="heroicons-solid:information-circle" v-else />

        <details>
            <summary>
                <slot />
            </summary>
            <div class="details pt-2">
                <ContentSlot :use="$slots.details" unwrap="p"></ContentSlot>
            </div>
        </details>
    </div>
    
</template>

<style scoped>
.info-box {
  @apply flex items-start gap-2 p-4 bg-slate-100 border border-slate-200 text-slate-500 rounded-lg;
}
details summary {
  @apply flex font-semibold leading-tight cursor-pointer;
}
details .details {
  @apply text-sm;
}
.info-box .icon {
  @apply shrink-0;
}

.info-box.warning {
  @apply bg-yellow-200 border-yellow-400 text-yellow-600;
}
.info-box.warning .icon.solid {
  @apply fill-yellow-600;
}
.info-box.error {
  @apply bg-red-200 border-red-400 text-red-600;
}
.info-box.error .icon.solid {
  @apply fill-red-600;
}
</style>