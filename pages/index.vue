<template>
    <main class="container max-w-7xl mt-5 mx-auto">
      <h1 class="text-center text-6xl font-bold py-20">Welcome to Djorro blog</h1>
      <div
            class="min-h-[500px] relative flex items-end justify-center my-6 rounded-[5px] overflow-hidden"
          >
            <div
              class="relative z-10 w-full text-center bg-gradient-to-t from-black/70 via-black/50 to-transparent py-6"
            >
              <h1 class="text-6xl text-white font-bold mb-3">
                Welcome to my world
              </h1>
            </div>
            <nuxt-img
              format="webp"
              class="absolute top-0 left-0 z-0 w-full h-full object-cover"
              src="/f/188427/1920x1080/c6187785bc/kucing.JPG"
            />
        </div>
        <article>
          <h1 class="text-center text-6xl font-bold py-20">Popular article</h1>
          <ContentList
            path="/blog"
            :query="{
              only: ['title', 'description', 'tags', '_path', 'img'],
              limit: 3,
            }"
             v-slot="{ list }"
          >
          <ul class="article-list">
            <li v-for="article in list" :key="article._path" class="article-item">
              <NuxtLink :to="article._path">
                <div class="wrapper">
                  <div class="img-cont w-96 md:w-72 shrink-0">
                    <nuxt-img format="webp" :src="`/${article.img}`" :alt="article.title" class="rounded-lg md:max-h-[10rem]" />
                  </div>
                  <header>
                    <h1 class="text-2xl font-semibold">{{ article.title }}</h1>
                    <p>{{ article.description }}</p>
                    <ul class="article-tags w-96 md:w-fit">
                      <li class="tag !py-0.5" v-for="(tag, n) in article.tags" :key="n">{{ tag }}</li>
                    </ul>
                  </header>
                </div>
              </NuxtLink>
            </li>
          </ul>
          </ContentList>
        </article>
    </main>


    <!-- <section class="flex items-center justify-center text-center w-full h-screen  bg-slate-50 text-slate-700">
        <header>
          
        <h1 class="font-black text-6xl">Baca baca blog seru <NuxtLink class="underline" to="/blog">di sini!</NuxtLink> </h1>
          <p class="my-2">Take a look at <NuxtLink class="underline" to="/blog">my blog</NuxtLink></p>
          <Button/>
        </header>
      </section> -->
</template>

<style scoped>
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
  @apply flex flex-col flex-wrap md:flex-row justify-center gap-12 mb-20;
}

.article-item {
  @apply pt-6 border-slate-200;
}

.article-item a {
  @apply no-underline;
}

.article-item>*>.wrapper {
  @apply flex flex-col items-center md:items-start gap-4;
}
</style>