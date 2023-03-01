<script setup>

</script>

<template>
      <div class="w-full h-[62px] bg-slate-100 -translate-y-[62px] -mb-[62px]"></div>
      <section class="flex flex-col md:flex-row gap-24 pt-[160px] md:gap-36 justify-center items-center min-w-max bg-slate-100 min-h-[50vh] md:min-h-[50vh]">
        <h1 class="text-5xl md:text-7xl font-bold text-center md:text-start w-80">HI, WELCOME</h1>
        <p class="w-80 text-center md:text-start font-semibold">I am Djorro, Discover the world of web development through my personal blog and dev log</p>
      </section>
      <div class="min-w-max min-h-[160px] bg-gradient-to-b from-slate-100 to-white"></div>
      <section>
        <article>
            <h1 class="text-center text-5xl md:text-6xl font-bold pt-20 pb-5">Rekomendasi artikel</h1>
            <NuxtLink class="flex justify-center underline text-2xl" to="/blog">All Articles >></NuxtLink>
        </article>
        <div class="mx-auto">
          <ArticleCard type="landing" :limit="3" /> 
        </div>
      </section>
      <div class="min-w-max min-h-[200px] bg-gradient-to-t from-slate-100 to-white"></div>
      <section class="flex flex-col justify-center items-center min-w-max bg-slate-100 min-h-[70vh] md:min-h-[50vh]">
        <h1 class="text-5xl md:text-6xl font-bold">MY WORKS</h1>
        <p>Some of my projects that I made</p>
        <p>to this day</p>
        <WorksCard/>
      </section>
      <div class="min-w-max min-h-[320px] bg-gradient-to-b from-slate-100 to-white"></div>
      <footer class="p-4">&copy; Made by Djorro</footer>
</template>

<style scoped>
.img-cont img {
  @apply h-full w-full object-cover;
}
</style>