---
title: 'Teknologi yang digunakan dalam website ini'
description: 'Banyaknya teknologi dan tools yang canggih di web dev gua harus memilih dalam pembuatan website gua ini'
tags: [nuxt, content, learning]
img: 'f/188427/1280x720/7d7e4fd038/techstack.png'
date: [2023, 02, 25]
---

Haloo manusia manusia, mungkin kalian semua sudah menebak teknologi dan tools apa saja yang gua pakai pada web ini. Langsung aja cus kita bahas.

## Tech stack
Tech stack atau tumpukan teknologi adalah istilah sering digunakan para developer dalam pembuatan website. banyak sekali di luar sana tech stack yang terkenal seperti MERN, MEAN, MEVN, LAMPP, dll. Stack yang gua gunakan adalah JAMSTACK. JAM nya adalah Javascript, API, Markup. JAMSTACK populer karena pembuatannya yang murah tidak perlu menyewa server per tahun hanya tinggal deploy ke web hosting saja karena hasil web nya itu static. Banyak sekali kekurangan dan kelebihan JAMSTACK mungkin saja gua bisa buat artikel sendiri ngebahas stack ini hehe.

JAMSTACK itu adalah nama stack nya tapi teknologi nya ada banyak banget. Setelah memilah ini lah tools dan framework yang gua gunakan pada website ini:
- Vue
- Nuxt & nuxt content
- Markdown
- Tailwind
- Storyblok
- Netlify (Deployment host)

Gua akan menjelaskan satu satu tools nya dan lumayan panjang jadi _brace yourself_ dan selamat membaca.

::InfoBox{type=warning}

Disclaimer!

#details

Membaca artikel di bawah ini dapat menyebabkan pusing, mual-mual, tidak sadar diri, kayang dll. Jika melanjutkan membaca mengalami salah satu gejala yang disebut. Dimohon Kebijakan pembaca sangat disarankan.

::


## Vue

Vua adalah javascript framework yang populer dalam membuat website yang interaktif. Salah satu keunggulan dari Vue adalah kemampuannya dalam mengatur dan mengelola tampilan atau UI pada aplikasi web. Dengan kemampuan ini, pengembang dapat membangun aplikasi web dengan tampilan yang menarik dan responsif, sehingga pengguna dapat dengan mudah mengakses dan menggunakan aplikasi.

Selain itu, Vue juga menyediakan berbagai macam fitur dan komponen yang dapat digunakan untuk membangun aplikasi web, seperti routing, komunikasi antar komponen, dan manajemen state. Hal ini membuat Vue menjadi pilihan yang tepat untuk pengembangan aplikasi web yang kompleks dan skala besar.

Maka dari itu gua memilih vue pada pembuatan website ini.

Mungkin untuk sedikit lebih paham gua bakal memberikan sedikit contoh penggunaan vue.

```vue
<script setup>
import { ref } from 'vue'

const isPink = ref(true)

function changeColor() {
    isPink.value = !isPink.value
}
</script>

<template>
    <button 
        @click="changeColor" 
        class="button" 
        :class="isPink === true ? 'pink' : 'white'"
    >
        Pencet bang
    </button>
</template>

<style>
.button {
    color: black;
    border-radius: 10px;
    padding: 5px;
}

.pink {
    background-color: pink;
}

.white {
    background-color: wheat ;
}
</style>
```

Hasil:

::ExButton
::

Contoh sangat sederhana. 

- Vue memiliki tiga bagian yaitu `<script>`, `<template>` dan `<style>`
- Bagian `script` kita bisa memasukan segala logika javascript pada umumnya. Kode di atas gua mengimport `ref()` yaitu state handler milik vue dan memasukannya di variabel. Pada bagian `script` juga terdapat logika function sederhana.
- Pada bagian `template` adalah tempat kita bisa memasuki kode html. Bukan hanya html `template` pada vue ini juga memiliki fitur seperti loop `v-for` *if-statement* `v-if` dan juga masih banyak lagi.
- pada contoh terdapat `class` dan juga `:class` di button. Class yang memiliki kolon itu dinamis dan bisa memasukan variabel dari script bahkan dapat membuat *if-statement*. Ketika kode nya di*compile* kedua class nya akan disatukan. `@click` adalah event handler ketika diklik akan memanggil function `changeColor()` dan `ref` pada `isPink` akan diupdate di DOM.
- Terakhir ada bagian `style`. Sesuai namanya untuk styling layaknya css.


Yang paling gua suka tentang vue adalah kita bisa membagi bagi potongan code nya menjadi komponen seperti contoh di atas. Dalam satu komponen kita sudah bisa memberikan html, script nya dan juga style.


## Nuxt

Salah satu kelemahan vue adalah berat akan javascript dan juga tidak ramah untuk SEO (Search Engine Optimazation) Untuk memecahkan masalah ini Nuxt pun diciptakan. [Nuxt](https://nuxt.com/){:target="_blank"} adalah vue framework yang *powerful* dan memiliki fitur seperti *server side rendering* ataupun *static site generation*. Di sini lah kunci gua dalam membuat website yang berbasis JAMSTACK. Nuxt menjadi salah satu pilihan terbaik dalam pembuatan JAMSTACK. 

Banyak sekali fitur dan manfaat pada framework ini. Salah satu nya auto import. Jadi gua gak sudah gak perlu lagi memasuki kode seperti `import { ref, onMounted } from 'vue'` ataupun import komponen seperti `import Button from ./components/Button.vue`.

Alasan terbesar gua menggunakan Nuxt adalah karena gua sudah telanjur belajar vue. Untuk membuat website static menggunakan vue, Nuxt menjadi pilihan utama karena orang yang develop nuxt itu sama dengan yang membuat vue jadi sewajarnya gua memilih. Jika gua gak belajar vue bisa merubah keseluruhan tech stack ini. Bisa aja gua menggunakan React dan Next, Hugo, Astra atau mungkin Ruby for static site. 

Nuxt juga disebut sebagai minimalist framework. Setelah instalasi kita diberikan direktori yang sederhana dan kita bisa menambahkan folder sesuai kebutuhan. Jika dibandingkan dengan framework seperti laravel sangat berbeda. Gua inget banget pertama kali pakai laravel melihat foldernya sangat *overwhelmed* sekali.
```vue
// direktori struktur project ini
+---assets
|   +---css
|   \---img
+---components
|   \---content
+---content
|   \---blog
+---node_modules
+---pages
|   \---blog
|       \---tags
+---public
\---utils
```

<!-- mungkin dimasukin atau nggak -->

### Nuxt content

Nuxt content adalah salah satu module API di nuxt untuk pembuatan konten *file based* system dengan menambahkan folder directory `content/` pada nuxt. Untuk penulisan konten gua bisa menggunakan salah satu pilihan format yang disediakan nuxt content.

- Markdown
- JSON
- YAML/YML
- CSV

Module ini juga bisa melakukan *query* pada file konten yang dimiliki. Dengan menggunakan *query* gua bisa mengfilter konten seperti berdasarkan tags mengurutkan berdasarkan tanggal publish dan lain lain.

Contoh query pada nuxt content
```html
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
            Isi Artikel hasil query
        </template>

        <!-- Not found slot to display message when no content us is found -->
        <template #not-found>
          <p>No articles found.</p>
        </template>
      </ContentList>
</template>

```

## Markdown

Untuk markup dan penulisan blog gua menggunakan markdown. Bagi sebagian besar orang untuk penulisan script ataupun blog mereka menggunakan semacam text editor nya *wordpress* ataupun menggunakan *office word*. Pada blog ini gua tidak menggunakan tools seperti itu tapi gua langsung ngetik pada `.md` file.

Markdown menggunakan sintaks untuk formatting teks nya. Kalau di word kita biasa pencet tombol bold untuk tebalin teks. Di markdown itu harus menggunakan format yang disediakan markdown nya contoh:

```md
<!-- teks pada markdown.md -->
***Teks ini tebal***
*teks ini miring*
~ini bukan teks~
```
hasil:

***Teks ini tebal***

*teks ini miring*

~ini bukan teks~

walaupun kesannya simpel dan ngeselin tapi gua bisa membuat teks formatting yang lebih kompleks menggunakan markdown seperti list ataupun tabel.

Dengan bantuan nuxt dan nuxt content gua bisa membuat komponen untuk markdown. Markdown di nuxt content dikenal dengan MDC (*Markdown Components*). Memasukan komponen di `.md` file memberikan kemudahan dan fleksibilitas pada pembuatan konten di blog. Salah satu contohnya mungkin tanda note atau disclaimer di bawah ini.

```vue
// components/content/InfoBox.vue
<script setup>
const props = defineProps(["type"])
</script>

<template>
    <div class="info-box not-prose" :class="[type]">
        <Icon class="icon" name="heroicons-solid:exclamation-circle" v-if="type == 'warning'" />
        <Icon class="icon" name="heroicons-solid:ban" v-else-if="type == 'error'" />
        <Icon class="icon" name="heroicons-solid:information-circle" v-else />

        <details>
            <summary>
                <slot />
            </summary>
            <div class="details pt-2">
                <ContentSlot :use="$slots.details" unwrap="p"></ContentSlot>
            </div>
        </details>
    </div>
    
</template>
```

```mdc
<!-- memanggil komponen di markdown -->
::InfoBox{type=info}

Ingfo mazsehh

#details

lorem ipsum dolor sit amet

::
```

Hasil:

::InfoBox{type=info}

Ingfo mazsehh

#details

lorem ipsum dolor sit amet

::

Kalian bisa lihat di dalam kode vue komponennya gua bisa memasuki slot agar ketika komponen nya dipanggil isi dalam komponennya bisa dinamis sesuai yang kita inginkan.
## Tailwind

Tailwind adalah framework CSS berbasis ultility-class. Gua punya *Love and hate relationship* sama tailwind ini yang ujung-ujung nya gua gunakan pada project blog ini. Lain kali mungkin gua curhatkan tentang tailwind ini tapi untuk sekarang lebih baik gua memberikan alasan kenapa gua memilih framework CSS satu ini. 

Manfaat yang paling utama adalah karena dia ultility-class yang berarti kita bisa styling tanpa perlu ke `.css` file. Kalau kalian sudah lama di ranah web development kalian pasti sadar basic CSS saja tidak bisa untuk membuat web yang skala nya besar. Banyak di luar sana tutorial membuat website yang nan indah hanya mengandalkan html css tapi itu semua hanyalah sebatas pembuatan landing page atau pun portofolio website. Pada website yang lebih besar dan kompleks dibutuhkan code yang lebih organized. Di sinilah css mengalami kendala bukan karena css jelek tapi karena css itu susah untuk di organisir. CSS sulit karena propertinya berinteraksi, seringkali dengan cara yang tidak terduga. satu perubahan style properti dapat menyebabkan dampak pada properti lainnya yang mungkin saja bisa menimbulkan bug yang tidak diinginkan.

Maka dari itu CSS Framework dibuat seperti bootstrap, bulma, tailwind dll. Butuh waktu untuk membuat dan mendesain sebuah UI. framework CSS di luar sana menghabiskan ribuan jam membuat inovasi dan pemecahan masalah ini untuk kita gunakan. Walaupun begitu bukan berarti basic CSS tidak diperlukan sama sekali. Semua pembuatan framework ini masih menggunakan fundamental CSS yang harus kita ketahui juga dalam rangka menggunakan framework nya kita harus paham css itu seperti apa.

Alasan gua memilih tailwind bukan hanya menghilangkan masalah yang mungkin saja datang di masa depan pada website ini nanti. Tapi karena tailwind sangat fleksibel dan mudah di *customize* berbeda dengan bootstrap yang memiliki seakan template pada design nya dan mungkin saja orang akan menyadarinya kalau itu bootstrap. Tailwind juga bekerja sangat mulus dengan javascript framework yang berbasis komponen seperti vue dan react. Bahkan dari dokumentasi tailwind sendiri disarankan untuk membagi style properti menjadi bagian bagian komponen.

Tailwind juga memiliki kekurangannya sendiri malah banyak. Sebagian besar masalahnya mungkin lebih ke arah subjektif yang gak bisa gua bahas di sini. Salah satu kekurangan terbesar nya adalah ribet nya setup tailwind ini seperti proses install dan konfigurasi. Kalau kalian lihat [dokumentasi instalasi tailwind](https://tailwindcss.com/docs/installation){:target="_blank"} dibutuhkan setidaknya 5 step yang kurang ramah bagi user biasa dan ini harus dilakukan di setiap project. Bukan hanya itu saja untuk framework nuxt yang gua pake memiliki [proses instalasi tailwind](https://tailwindcss.com/docs/guides/nuxtjs#3){:target="_blank"} yang berbeda juga bahkan bisa sampai 8 step. Menurut gua ini lah kenapa tailwind mudah di kustomisasi dan bayarannya adalah setup nya yang cukup melelahkan.

## Netlify

Setelah website nya jadi langkah selanjutnya adalah men*deploy* website nya ke platform hosting. Banyak sekali pilihan dan rata rata semuanya memang harus bayar per bulan ataupun per tahun. Tapi karena website ini statik tidak membutuhkan database seperti Mysql pembiayaan hosting dapat dipangkas. Netlify adalah platform hosting khusus untuk website yang berbasis JAMSTACK dan statis website yang tidak membutuhkan database atau *backend*.

Tentu saja netlify itu berbayar per bulan. Tapi, *according to* [*pricing* pada netlify](https://www.netlify.com/pricing/){:target="_blank"} sepertinya website gua bisa menikmati *Tier free*nya tanpa biaya beban sama sekali. Kecuali, traffic web gua ramai dan melebihi batas bandwitdh yang ditentukan gua harus bayar per bulan pada tier pertama.

Itu saja sepertinya pembahasan kali ini lumayan asik juga. Banyak sekali yang ingin gua tulis menjadi blog seperti ini project gua lainnya atau mungkin sekedar *sharing* tips & trik pada pembuatan aplikasi maupun website. Sekian dan terima kasih.