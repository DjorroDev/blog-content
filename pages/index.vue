<template>
    <main>
      <section class="flex items-center justify-center text-center w-full h-screen  bg-slate-50 text-slate-700">

        <header>
          <h1 class="font-black text-8xl">Welcome to my world </h1>
          <p class="my-2">Take a look at <NuxtLink class="underline" to="/blog">my blog</NuxtLink></p>
          <!-- <Button/> -->
          <div
            class="min-h-[500px] relative flex items-end justify-center my-6 rounded-[5px] overflow-hidden"
          >
            <div
              class="relative z-10 w-full text-center bg-gradient-to-t from-black/70 via-black/50 to-transparent py-6"
            >
              <h1 class="text-6xl text-white font-bold mb-3">
                hello
              </h1>
            </div>
            <nuxt-img
              format="webp"
              class="absolute top-0 left-0 z-0 w-full h-full object-cover"
              src="img/kucing.jpg"
            />
        </div>
        </header>
      </section>
    </main>
  </template>