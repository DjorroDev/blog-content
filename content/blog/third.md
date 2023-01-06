---
title: 'third blog'
description: 'This is first article!'
tags: [nuxt, content, learning, ketiga, gaming]
img: 'f/188427/2560x1440/3ca679026b/cover3.png'
---

# three
## ketiga

btul


Aperiam numquam omnis magnam sit sequi laboriosam architecto expedita totam corrupti possimus vitae nemo facilis dolor, animi mollitia sed exercitationem odio. Corrupti, sunt quas adipisci nisi, nesciunt ratione repellat cupiditate ipsa, iste voluptate dolores! Itaque esse vitae error eos commodi laboriosam nesciunt facere quod suscipit exercitationem culpa alias, illum pariatur provident repellat eum dolor voluptatem ipsum tenetur et totam eaque illo. Voluptatibus, provident totam quidem nihil illum reiciendis facilis praesentium? Atque animi, culpa modi, molestiae suscipit voluptas tenetur, sed sint hic distinctio neque. Fugiat, dolor ab sed impedit neque quidem provident? Atque, porro. Eum hic tenetur, ex asperiores neque praesentium a, qui aperiam eveniet eligendi porro sit ipsam laudantium pariatur labore numquam ratione omnis nulla inventore earum culpa quaerat dolores quas quisquam?

```js

<script setup>

const expanded = ref(false)

const flatten = (tags, key) => {
    console.log(tags)

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
      <TagIcon class="icon solid" />
      <span>Tags</span>
    </button>
    <ul class="article-tags" :class="{ expanded: expanded }">
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
  @apply max-w-full;
}
</style>

```

## Conclusion

  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eligendi quae, vero itaque quos possimus similique reiciendis ipsa, voluptates exercitationem nobis fugit. Dicta delectus iste molestiae minus eos soluta vitae doloremque consectetur. Natus commodi eum eos vitae in aliquid nesciunt beatae. Blanditiis natus sapiente perferendis odit dolorem beatae repudiandae neque repellendus, iusto ut laboriosam totam. Unde ipsam vitae, dolor veritatis beatae ex reprehenderit voluptate quam, quidem neque dolorum aspernatur earum molestiae sunt laborum laboriosam, nostrum assumenda minima natus laudantium enim quia. Qui quibusdam saepe quaerat porro aperiam praesentium tempora exercitationem amet possimus non, soluta placeat impedit suscipit, modi vero et, voluptates numquam nihil rerum architecto consequatur. Quam, alias? Itaque laborum nemo alias tempore esse reprehenderit enim molestias ea, accusamus rerum, maiores earum pariatur, a consequuntur aliquam excepturi delectus expedita deleniti perferendis quasi modi totam est eveniet. Enim ab dolorum nam. Tempore harum officiis repellendus architecto. Deleniti eos voluptate atque provident cumque enim a harum veritatis accusamus totam vitae commodi minima sapiente in, possimus aut odio nostrum ipsum molestiae reprehenderit consequuntur ducimus doloribus laudantium recusandae. Iure eligendi cum consectetur eveniet consequatur officiis quam. Vero illo, laboriosam et eius velit ad possimus distinctio, amet molestiae ducimus veritatis maxime omnis cumque in voluptatibus!
