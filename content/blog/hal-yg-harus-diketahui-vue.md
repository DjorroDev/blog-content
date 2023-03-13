---
title: 'Hal yang harus diketahui sebelum mempelajari Vue JS'
description: 'Vue.js adalah sebuah framework JavaScript yang digunakan untuk membangun antarmuka pengguna pada website dan aplikasi web. Dengan menggunakan Vue.js...'
tags: [vue, dev, tips, javascript]
img: 'f/188427/1280x720/a7af482deb/tips-vue.png'
date: '2023-3-14'
---

Semua yang gua jelaskan di bawah nanti hanyalah sebagian kecil tentang vue. Bisa dibilang ini *sneak peek* atau *spoiler* buat kalian yang mau tau tentang vue itu seperti apa. Dengan membaca artikel ini semoga kalian bisa paham atau mengetahui seperti apa vue secara langsung.

## Penjelasan singkat tentang vue

Vue.js adalah sebuah framework JavaScript yang digunakan untuk membangun antarmuka pengguna pada website dan aplikasi web. Dengan menggunakan Vue.js, Kalian dapat dengan mudah membuat dan mengelola komponen UI yang kompleks dengan data yang dinamis.

<!-- ## Single File Component (SFC) -->

## Sejarah vue

Sampai sekarang vue telah memiliki 3 versi vue. Kenapa penting untuk diketahui? Karena dua versi pada vue masih aktif digunakan sampai sekarang. Biasanya sebuah aplikasi atau program ketika upgrade, versi sebelumnya mengalami *deprecated* atau sudah tidak layak digunakan entah dari segi keamanan ataupun performa sudah lebih baik versi terbarunya.

Pada vue ini perubahannya sangat signifikan bukan hanya performa tapi juga cara penggunaan framework itu dan *workflow*nya berubah menyebabkan kontroversi. Bisa dibilang orang sudah nyaman dengan vue pada umumnya. Yang gua maksud ada upgrade dari vue 2 ke vue 3, gua akan menjelaskan sejarah singkat tentang vue dari versi awalnya biar lebih *srekk* istilahnya.

### Versi 1.0
Vue.js versi 1.0.0 dirilis pada bulan Februari 2014. Vue.js versi 1.0.0 adalah versi pertama dari Vue.js yang dirilis secara resmi dan dikembangkan oleh Evan You. Versi ini memberikan alternatif pada Angular dan React dalam membangun aplikasi web.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Contoh Vue.js</title>
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
</head>
<body>
  <div id="app">
    {{ message }}
  </div>

  <script>
    var app = new Vue({
      el: '#app',
      data: {
        message: 'Halo, masbroo'
      }
    })
  </script>
</body>
</html>
```

- Pada contoh kode di atas, kita menggunakan CDN untuk memuat file Vue.js.
- Selanjutnya, kita membuat elemen div dengan id "app" yang akan menjadi tempat untuk menampilkan data yang dihasilkan oleh Vue.js.
- Pada bagian script, kita membuat sebuah instance Vue dengan menggunakan fungsi konstruktor Vue().
- Pada instance Vue, kita menentukan el dengan nilai #app yang menunjukkan bahwa instance Vue akan bekerja pada elemen dengan id "app".
- Selain itu, kita juga menentukan objek data dengan properti message yang memiliki nilai awal "Halo, masbroo".
- Pada elemen div dengan id "app", kita menggunakan sintaks {{ message }} untuk menampilkan nilai dari properti message.



### Versi 2.0
Vue.js versi 2.0.0 dirilis pada bulan September 2016. Pada versi ini, Vue.js mengalami perubahan besar dalam arsitektur inti, peningkatan performa, dan penambahan fitur seperti sistem render yang ditingkatkan, pengurangan ukuran bundle, peningkatan fitur slot, dan integrasi yang lebih baik dengan aplikasi web modern.

#### SFC
SFC (Single File Components) pada Vue.js juga dirilis bersamaan dengan versi 2.0. SFC adalah cara untuk menyusun komponen Vue.js dalam satu file dengan format template, script, dan style dalam satu file `.vue`.

Dengan penggunaan SFC, Kalian dapat mengorganisir kode menjadi komponen yang modular, memudahkan untuk membagikan dan mendistribusikan komponen, serta mempercepat waktu pengembangan. Oleh karena itu, SFC menjadi fitur yang sangat populer dan menjadi standar dalam pengembangan Vue.js. Versi 2.0.0 ini juga dikenal dengan options API dan banyak orang masih menggunakan pada saat ini.

Contoh vue dengan SFC `.vue`:
```vue
<template>
  <div>{{ msg }}</div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello maxwell!'
    }
  }
}
</script>
```

### Versi 3.0
Vue.js versi 3.0.0 dirilis pada bulan September 2020. Versi ini menghadirkan banyak perubahan dan peningkatan signifikan termasuk peningkatan performa, penyederhanaan kode inti, penambahan fitur baru seperti **Komposisi API**, dan dukungan untuk Typescript yang lebih baik. Mari kita lihat contoh kode vue 3.

```vue
<template>
  <div>{{ msg }}</div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const msg = ref('Subscribe hamdan27');
    
    return {
      msg
    }
  }
}
</script>
```

Sudah terlihat ya perbedaanya. Pada kode di atas, kita menggunakan metode setup() untuk mendefinisikan logika komponen menggunakan Composition API. Kita mengimpor fungsi ref dari Vue dan menggunakannya untuk membuat referensi reaktif ke properti data msg. Kita juga harus secara manual meng-import fungsi seperti`ref` untuk membuat kode reaktif. Pada Options API,data yang reaktif pada kode sudah dimiliki *out of the box*.

#### Script setup

Kalau kalian sadar setiap kita membuat variabel seperti `msg` kita harus return variabel nya agar bisa ditampilkan ke tampilan template.

```vue
<template>
  <div>{{ msg }}</div>
  <div>{{ msg2 }}</div>
  <!-- Yang ketiga akan memberikan error -->
  <div>{{ msg3 }}</div>
</template>

<script>
export default {
  setup() {
    const msg = 'pesan 1'
    const msg2 = 'pesan 2'
    const msg3 = 'pesan 3' // Pesan ketiga gak akan muncul karena gak gua return
    
    // bisa dilihat ketiga gak ada di return
    return {
      msg, 
      msg2
    }
  }
}
</script>
```

Bisa dibilang ini bisa menimbulkan kerjaan tambahan yak kalian harus menulis variabel nya dua kali pada saat deklerasi dan juga pada saat return. Ini juga bisa menimbulkan masalah jika kelupaan me-return kode nya. Maka dari itu script setup diciptakan dan dapat membuat komposisi API lebih sederhana.

Dikutip dari dokumentasi vue js, `<script setup>` adalah sebuah *syntactic sugar* pada waktu kompilasi untuk menggunakan Composition API di dalam Single-File Components (SFCs). Ini adalah sintaks yang direkomendasikan jika Anda menggunakan SFCs dan Composition API. Ini memberikan beberapa keuntungan dibandingkan dengan sintaks normal `<script>`:

- Kode yang lebih singkat dengan lebih sedikit boilerplate
- Kemampuan untuk mendeklarasikan props dan event yang diemmit menggunakan TypeScript murni
- Performa runtime yang lebih baik (template dikompilasi menjadi fungsi render di scope yang sama, tanpa adanya proxy intermediate)
- Performa IDE yang lebih baik dalam hal inferensi tipe (pekerjaan yang lebih sedikit bagi language server untuk mengekstrak tipe dari kode)

contoh kode:

```vue
<template>
  <div>{{ msg }}</div>
</template>

<script setup>
import { ref } from 'vue';

const msg = ref('Hello vue script setup yang luar biasa');
</script>
```

*loook* kalian lihat lahh seberapa simpel kode nya dibanding contoh di atas lainnya. Dari semua di atas gua berikan contoh yang sama, yaitu sebuah variabel string yang ditampilkan pada tag div di template dan contoh ini yang paling terlihat sederhana. Kalian juga pasti sadar kita gak perlu lagi nge-return data apapun karena itu semua telah dilakukan otomatis oleh *compiler*nya vue berkat script setup ini.

## Options VS Composition API

Kalau disuruh memilih, *to the point* gua bakal pilih composition API. Karena paling nikmat dan lebih sedikit penulisan kode.

Terus kenapa Options API tetap *exist*? Karena vue itu sudah ada sejak 9 tahun yang lalu. vue 2 sejak 7 tahun yang lalu. dan vue 3 ini masih sekitar 2 tahunan. Masih banyak orang yang telah menggunakan vue sejak lama masih beradaptasi dengan komposisi API. Banyak juga yang lebih memilih Options API karena sudah nyaman bertahun-tahun penggunaan. Tapi gua atau mungkin kalian juga yang baru mau belajar tidak tau apapun tentang vue bisa menikmati komposisi API.

Walaupun begitu, gua saranin kalian pahami semua versi. Cukup tau dan paham agar kalian tau bagaimana cara penggunaan kerja vue. Jika kalian paham keduanya kalian gak bakal pusing sendiri ketika nyari jawaban pada kode yang error eh malah ketemu API yang berbeda. Kalau paham kalian bisa mengadaptasi kode nya dan implementasikan pada kasus masalah kalian walaupun API nya berbeda.

### Perbandingan

Gua akan memberikan perbandingan kode yang sedikit lebih kompleks dibanding contoh sebelumnya Kalian bisa amati kedua contoh nya secara seksama. Biar simpel styling nya gua hide aja pada kode nya jadi kalian bisa fokus pada kode nya.

#### Options API

```vue
<script>
export default {
  // reactive state
  data() {
    return {
      count: 0
    }
  },

  // Fungsi yang jadi pemicu update variabel
  methods: {
    increment() {
      this.count++
    }
  },
}
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```

#### Composition API

```vue
<script setup>
import { ref } from 'vue'

// reactive state
const count = ref(0)

// Fungsi yang jadi pemicu update variabel
function increment() {
  count.value++
}
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```

Hasil yang sama dari kedua kode di atas:

::CountButton
::

### Pros & Cons

Walaupun gua condong ke Komposisi API, tapi di sini gua akan memberikan kekurangan dan kelebihan yang dimiliki kedua API agar kalian bisa men-*judge*nya masing masing. Gua kutip ini juga dari dokumentasi resmi vue:

#### Composition API:

- Keuntungan:

  - Komponen menjadi lebih mudah dibaca dan dipahami, karena logika dapat dikelompokkan berdasarkan fungsinya.
  - Reusabilitas komponen menjadi lebih mudah, karena logika yang terkait dapat dipisahkan dan digunakan kembali.
  - Menangani kasus penggunaan seperti state management yang kompleks menjadi lebih mudah.
  - Menyediakan fleksibilitas yang lebih besar dalam mengatur lifecycle hooks dan memperoleh data dari komponen lain.

- Kekurangan:

  - Terkadang susah cari tutorial karena rata rata semua menggunakan Options API.
  - Tidak selalu mudah dipahami, terutama bagi pengembang yang baru memulai belajar Vue.js.
  - Memerlukan waktu pembelajaran yang lebih lama karena syntax yang lebih baru.
  
#### Options API:

- Keuntungan:

  - Banyak banget tutorial nya di internet sana.
  - Mudah dipahami dan diikuti karena konsepnya mirip dengan objek JavaScript.
  - Lebih cocok untuk proyek-proyek kecil yang tidak memerlukan struktur yang rumit.
  - Syntax yang lebih sederhana dan lebih familiar bagi pengembang yang sudah terbiasa dengan Vue.js.

- Kekurangan:

  - Susah dalam menangani kasus penggunaan seperti state management yang kompleks.
  - Susah dalam menangani komponen yang sangat besar.
  - Menimbulkan ketergantungan pada struktur template Vue.js.


## Tips belajar vue

Salah satu tips dari gua pelajarin lah keduanya (Komposisi dan Options). "Loh kenapa bang?" karena berdasarkan informasi dan teman teman yang gua ketahui. Di perusahaan mereka yang menggunakan vue masih pada Options API. Kalau kalian tahu, di dalam industri pemrograman tidak semuanya perusahaan menggunakan jenis teknologi terbaru (istilahnya *cutting edge*). Mereka lebih memilih teknologi yang memiliki LTS (*Long Term Support*) yang baik. Jadi wajar aja banyak perusahaan di luar sana menggunakan *tech stack* yang cukup tua tapi masih bekerja dengan baik setidaknya untuk 5 tahun kedepan atau lebih.

<!-- Tidak ada salahnya memahami Options API. Kalian bisa membuat satu projek dengan Options API dan seterusnya bisa fokus ke Komposisi API. -->

Untuk video pembelajaran atau tutorial, Gua sarankan untuk menonton tutorial yang ada pada [https://laracasts.com/](https://laracasts.com/series/learn-vue-3-step-by-step){:target="_blank"} tentang vue. Kalian bisa ke website nya atau ke channel [youtube](https://www.youtube.com/@Laracastsofficial){:target="_blank"} nya. Di sana kalian akan diajari dasar vue dengan baik sebagai fondasi. Kalian juga akan disuguhkan dengan Options API pada pembelajaran dan terus berlanjut (eps 10+) kalian akan baru disuguhkan komposisi API. Agak ngeselin tapi di sanalah kalian akan beradaptasi keduanya dan sang mentor *jeffrey* menjelaskannya dengan baik.

Terima kasih kalau kalian telah membaca sampai bawah sini. Gua apresiasi waktu kalian ketika membaca. Tujuan gua adalah supaya beberapa dari kalian *aware* bahwa penulisan vue ada dua versi dan semoga artikel ini sampai ke kalian. Sekian dari gua *Adios*.