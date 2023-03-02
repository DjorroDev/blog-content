<script setup>
defineProps(['links'])

const flattenLinks = (links) => {
    let _links = links
        .map((link) => {
            let _link = [link]
            if(link.children) {
                let flattened = flattenLinks(link.children);
                _link = [link, ...flattened];
            }
            return _link
        })
        .flat(1)
    return _links
}
</script>

<template>
    <nav class="toc">
        <header class="pb-2 mb-2 border-b border-slate-200">
            <h3 class="text-xl font-bold"> Daftar Isi </h3>
        </header>
        <ul class="toc-links">
            <li v-for="link in flattenLinks(links)" :key="link.id" :class="`toc-link toc-link_${link.depth}`">
                <a :href="`#${link.id}`">{{ link.text }}</a>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
.toc {
  @apply p-4 mx-2 md:mx-0 bg-slate-50 border border-slate-200 rounded-lg;
  @apply max-h-[calc(100vh-6rem)] overflow-auto;
}

.toc-links {
  @apply flex flex-col gap-2 px-2;
}
.toc-link {
  @apply text-slate-500;
}
.toc-link_3 {
  @apply pl-3;
}
.toc-link_4 {
  @apply pl-6;
}
.toc-link_undefined {
  @apply pl-8;
}

</style>