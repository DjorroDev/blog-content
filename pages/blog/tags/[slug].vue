<!-- ./pages/blog/tags/[slug].vue -->

<script setup>
// const print = (wareev) => {
//   console.log(wareev);
// };

// get current route
const {
  params: { slug },
} = useRoute();

const filter = slug.split(",");
// console.log({ filter });


// set meta for page
useHead({
  title: `All articles with ${slug}`,
  meta: [{ name: "description", content: "Here's a list of all my great articles" }],
});
</script>
<template>
  <main>
    <header class="page-heading">
      <div class="wrapper">
        <h1 class="text-5xl font-extrabold">All articles with "{{ slug }}"</h1>
        <p class="font-medium text-lg">Here's a list of all my great articles</p>
      </div>
    </header>
    <section class="page-section">
      <Tags />
      <!-- Render list of all articles in ./content/blog using `path` -->
      <!-- Provide only defined fieldsin the `:query` prop -->
      <ContentList
        path="/blog"
        :query="{
          only: ['title', 'description', 'tags', '_path', 'img'],
          where: {
            tags: {
              $contains: filter,
            },
          },
          $sensitivity: 'base',
        }"
      >
        <!-- Default list slot -->
        <template v-slot="{ list }">
          <ul class="article-list">
            <li v-for="article in list" :key="article._path" class="article-item">
              <NuxtLink :to="article._path">
                <div class="wrapper">
                  <div class="img-cont w-72 md:w-64">
                    <img :src="`/${article.img}`" :alt="article.title" class="rounded-lg max-h-[8rem]" />
                  </div>
                  <header>
                    <h1 class="text-2xl font-semibold">{{ article.title }}</h1>
                    <p>{{ article.description }}</p>
                    <ul class="article-tags">
                      <li class="tag" v-for="(tag, n) in article.tags" :key="n">
                        <NuxtLink :to="`/blog/tags/${tag}`" class="underline"> {{ tag }} </NuxtLink>
                      </li>
                    </ul>
                  </header>
                </div>
              </NuxtLink>
            </li>
          </ul>
        </template>

        <!-- Not found slot to display message when no content us is found -->
        <template #not-found>
          <p>No articles found.</p>
        </template>
      </ContentList>
    </section>
  </main>
</template>

<style scoped>

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

.img-cont img {
  @apply h-full w-full object-cover;
}

.article-tags {
  @apply flex gap-2 py-2 flex-wrap;
}

.article-tags .tag {
  @apply bg-slate-100 text-slate-700 text-sm p-2 py-1 rounded-md;
  @apply transition-all !py-0.5 hover:-translate-y-0.5;
}


.page-heading {
  @apply p-12 bg-slate-50;
}

.page-heading>.wrapper {
  @apply max-w-3xl m-auto;
}

.page-section {
  @apply p-4 py-8 m-auto max-w-3xl;
}

.article-list {
  @apply flex flex-col gap-6;
}

.article-item {
  @apply pt-6 first-of-type:border-none border-t border-slate-200;
}

.article-item a {
  @apply no-underline;
}

.article-item>*>.wrapper {
  @apply flex flex-col items-center md:items-start md:flex-row gap-4;
}
</style>