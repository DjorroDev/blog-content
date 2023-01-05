<script setup>

const expanded = ref(false)

const flatten = (tags, key) => {
    // console.log(tags)

    let _tags = tags
    .map((tag) => {
      let _tag = tag;
      if (tag[key]) {
        let flattened = flatten(tag[key]);
        _tag = flattened;
      }
      return _tag;
    })
    .flat(1);

    return _tags
}

// function to toggle expanded state
const toggleExpand = () => {
  expanded.value = !expanded.value;
};

// get only tags data from `/blog`
const { data } = await useAsyncData("tags", () => queryContent("blog").only(["tags"]).find());
// generate array without duplicates from flattened array
const articleTags = [...new Set(flatten(data.value, "tags"))];
</script>

<template>
  <div class="tag-list" :class="{ active: expanded }">
    <!-- Button to toggle expand -->
    <button @click="toggleExpand" class="cta w-icon">
      <Icon name="heroicons:tag-solid" class="icon solid" />
      <span>Tags</span>
    </button>
    <ul class="article-tags flex gap-2 overflow-x" :class="{ expanded: expanded }">
      <!-- list out tags with links -->
      <li v-for="(tag, n) in articleTags" :key="n" class="tag">
        <NuxtLink :to="`/blog/tags/${tag}`" class="font-semibold"> {{ tag }} </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* ... */
.tag-list {
  @apply flex items-center gap-2 p-2 border border-transparent  rounded-lg;
}
.tag-list.active {
  @apply border-slate-200;
}
.article-tags {
  @apply transition-all max-w-0 overflow-hidden;
}
.article-tags.expanded {
  @apply max-w-full flex-wrap;
}
.cta {
  @apply p-1.5 px-2 bg-slate-50 border border-slate-200 font-semibold rounded-lg;
  @apply transition-all hover:-translate-y-0.5 focus:bg-slate-100 active:translate-y-0.5 active:shadow-inner;
}

.cta.w-icon {
  @apply flex items-center gap-2 pr-3;
}

.article-tags .tag {
  @apply bg-slate-100 text-slate-700 text-sm p-2 py-1 rounded-md;
  @apply transition-all !py-0.5 hover:-translate-y-0.5;
}
</style>