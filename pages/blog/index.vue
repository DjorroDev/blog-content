<!-- ./pages/blog/index.vue -->
<script setup>
definePageMeta({
  key: (route) => route.fullPath,
});

// get tag query
const {
  query: { tags },
} = useRoute();

const filter = ref(tags?.split(","));

// set meta for page
useHead({
  title: "All articles",
  meta: [{ name: "description", content: "Here's a list of all my great articles" }],
});
</script>
<template>
  <main>
    <header class="page-heading">
      <div class="wrapper">
        <h1 class="text-5xl font-extrabold">All articles</h1>
        <p class="font-medium text-lg">Here's a list of all my great articles</p>
      </div>
    </header>
    <section class="page-section">
      <Tags />
      <!-- Render list of all articles in ./content/blog using `path` -->
      <!-- Provide only defined fieldsin the `:query` prop -->
     <ArticleCard />
    </section>
  </main>
</template>

<style scoped>
.page-heading {
  @apply p-12 bg-slate-50;
}

.page-heading>.wrapper {
  @apply max-w-3xl m-auto;
}

.page-section {
  @apply p-4 py-8 m-auto max-w-3xl;
}

.icon.stroke {
  @apply stroke-slate-500;
}

.cta {
  @apply p-1.5 px-2 bg-slate-50 border border-slate-200 font-semibold rounded-lg;
  @apply transition-all hover:-translate-y-0.5 focus:bg-slate-100 active:translate-y-0.5 active:shadow-inner;
}

.cta.w-icon {
  @apply flex items-center gap-2 pr-3;
}
</style>