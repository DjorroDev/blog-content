<script setup>
// const props = defineProps({
//   filter: any,
//   limit: {
//     type: number,
//     default: 0
//   }
// }) 

const props = defineProps(['filter', 'limit', 'type'])
</script>

<template>
    <ContentList
        path="/blog"
        :query="{
          only: ['title', 'description', 'tags', '_path', 'img', 'date'],
          where: {
            tags: {
              $contains: filter,
            },
          },
          $sensitivity: 'base',
          sort: { date: -1 },
          limit: limit,
        }"
      >
        <!-- Default list slot -->
        <template v-slot="{ list }">
          <ul :class="type == 'landing' ? 'article-list-landing' : 'article-list'">
            <li v-for="article in list" :key="article._path" :class="type == 'landing' ? 'article-item-landing' : 'article-item'">
              <NuxtLink :class="type == 'landing' ? 'flex justify-center' : 'flex justify-center md:block'" :to="article._path">
                <div class="wrapper">
                  <div class="img-cont w-72 md:w-96 shrink-0">
                    <nuxt-img format="webp" :src="`/${article.img}`" :alt="article.title" class="rounded-lg" />
                  </div>
                  <header>
                    <h1 class="text-2xl font-semibold">{{ article.title }}</h1>
                    <p>{{ article.description }}</p>
                    <p class="font-semibold">{{ formatDate(article.date) }}
                    </p>
                    <ul :class="type == 'landing' ? 'article-tags md:w-96 w-72' : 'article-tags w-72 md:w-fit'">
                      <li class="tag !py-0.5" v-for="(tag, n) in article.tags" :key="n">{{ tag }}</li>
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
</template>

<style>
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

.article-list {
  @apply flex flex-col gap-6;
}

.article-list-landing {
  @apply flex flex-col flex-wrap md:flex-row justify-center gap-12 mb-20;
}

.article-item {
  @apply pt-6 first-of-type:border-none border-t border-slate-200;
}

.article-item-landing {
  @apply pt-6;
}

.article-item a {
  @apply no-underline;
}

.article-item>*>.wrapper {
  @apply flex flex-col items-center md:items-start md:flex-row gap-4 max-w-min md:max-w-max;
}

.article-item-landing>*>.wrapper {
  @apply flex flex-col items-center md:items-start gap-4 flex-wrap w-72 md:w-96;
}
</style>