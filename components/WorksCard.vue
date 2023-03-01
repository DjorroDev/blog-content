<script setup>
import json from "../src/projects.json";


const projects = json;
// console.log(projects);
</script>

<template>
    <div class="w-screen lg:w-[80vw] flex lg:flex-wrap lg:justify-center overflow-x-auto gap-8 px-12 py-12">
      <div
        v-for="(project, i) in projects.project"
        :key="i"
        class="relative h-[400px] w-[290px] flex-shrink-0 bg-slate-200  rounded-lg"
      >
        <!-- <div class="bg-slate-border-slate-300 h-[168px]"></div> -->
        <div class="w-[290px]">
            <nuxt-img format="webp" :src="project.img" :alt="`Image of ${project.title} project`" class="rounded-t-lg max-h-[216px] min-w-[290px] object-cover overflow-hidden" />
        </div>
        <div class="flex flex-col p-5">
          <h4 class="pb-3 text-2xl mb-2 font-semibold text-black bold">
            {{ project.title }}
          </h4>
          <p>
            {{ project.desc }}
          </p>
          <a
            class="px-5 absolute mr-auto bottom-5 py-2 transition border-pinkbg-slate-border-slate-300 rounded-md text-text hover:text-slate-800 hover:-translate-y-2 hover:bg-slate-300 active:bg-black border-2 border-slate-300"
            :href="project.link"
            >Check</a
          >
        </div>
      </div>
    </div>
</template>
