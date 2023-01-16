<script setup>
const {path} = useRoute()
const {data} = await useAsyncData(`content-${path}`, async () => {
  let article = queryContent().where({_path: path}).findOne()
  let surround = queryContent().only(['_path', 'title', 'description']).sort({date: 1}).findSurround(path)

  return {
    article: await article,
    surround: await surround,
  };
})
const [prev, next] = data.value.surround;
// console.log({ data, prev, next });

useHead({
  title: data.value.article.title,
  htmlAttrs: {
    lang: 'en'
  },
  meta: [
    { name: "description", content: data.value.article.description },
    {
      hid: "og:image",
      property: "og:image",
      content: `https://a.storyblok.com/${data.value.article.img}`,
    },
  ],
});
</script>

<template>
  <main id="main" class="article-main">
    <header v-if="data.article" class="article-header">
      <div class="img-cont h-72 mb-12">
        <nuxt-img 
          format="webp"
          :src="`/${data.article.img}`" 
          :alt="data.article.title" 
          class=" rounded-2xl" />
      </div>
      <h1 class="heading">{{ data.article.title }}</h1>
      <p class="supporting">{{ data.article.description }}</p>
      <ul class="article-tags flex gap-2">
        <li class="tag" v-for="(tag, n) in data.article.tags" :key="n">{{ tag }}</li>
      </ul>
    </header>
    <hr />
    <section class="article-section">
      <aside class="aside">
        <!-- Toc Component -->
        <Toc :links="data.article.body.toc.links" />
      </aside>
      <article class="article">
        <!-- render document coming from query -->
        <ContentRenderer :value="data.article">
          <!-- render rich text from document -->
          <!-- <MarkdownRenderer :value="data.article" /> -->

          <!-- display if document content is empty -->
          <template #empty>
            <p>No content found.</p>
          </template>
        </ContentRenderer>
      </article>
    </section>

    <!-- PrevNext Component -->
    <PrevNext :prev="prev" :next="next" />
  </main>
</template>

<style scoped>
.article-tags .tag {
  @apply bg-slate-100 text-slate-700 text-sm p-2 py-1 rounded-md w-max;
  @apply transition-all !py-0.5 hover:-translate-y-0.5;
}

.article-main {
  @apply p-4 max-w-5xl m-auto;
}
.article-header {
  @apply p-4 pb-12;
}
.article-header .heading {
  @apply font-extrabold text-5xl;
}
.article-header .supporting {
  @apply font-medium text-lg;
}
.article-section {
  @apply grid grid-cols-8;
}
.aside {
  @apply col-span-full md:col-span-2 row-start-1 w-full pt-14;
}
.aside .toc {
  @apply sticky top-20;
}
.article {
  @apply col-span-full md:col-span-6 md:col-start-1 md:row-start-1 prose w-full p-4 max-w-3xl m-auto;
}

.img-cont img {
  @apply h-full w-full object-cover;
}

</style>