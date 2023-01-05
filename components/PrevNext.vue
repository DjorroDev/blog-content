<script setup>
defineProps(['prev', 'next'])
</script>

<template>
    <ul class="prev-next-cont">
      <li class="link-item prev">
        <NuxtLink v-if="prev" :to="prev._path">
          <Icon name="heroicons:arrow-left" class="my-auto"/>
          <span class="underline"> {{ prev.title }} </span>
        </NuxtLink>
      </li>
      <li class="link-item next">
        <NuxtLink v-if="next" :to="next._path">
          <span class="underline"> {{ next.title }} </span>
          <Icon name="heroicons:arrow-right" class="my-auto" />
        </NuxtLink>
      </li>
    </ul>
  </template>
  
  <style scoped>
  .prev-next-cont {
    @apply flex gap-4 justify-between p-4 border border-slate-200 rounded-lg;
  }
  .link-item a {
    @apply flex gap-2;
  }
  </style>