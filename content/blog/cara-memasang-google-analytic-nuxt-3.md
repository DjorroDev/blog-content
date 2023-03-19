---
title: 'Cara memasang google analytics pada nuxt 3'
description: 'Menganalisis website dan menggunakan Google Analytics (GA) sangat penting untuk memahami perilaku pengunjung, mengukur traffic, meningkatkan konversi...'
tags: [nuxt, vue, dev, tutorial]
img: 'f/188427/1280x720/33255de997/cara-memasang-google-analytics-pada-nuxt-3.png'
date: '2023-3-19'
---

<!-- Kebutuhan website agar bisa kita monitor, seperti seberapa banyak orang melihat.
 -->
Menganalisis website dan menggunakan Google Analytics (GA) sangat penting untuk memahami perilaku pengunjung, mengukur *traffic*, meningkatkan konversi, dan memperbaiki kinerja situs web. Dengan informasi yang diberikan oleh GA, Kalian dapat mengoptimalkan situs web Kalian dan meningkatkan kinerja secara keseluruhan. GA juga menjadi syarat utama untuk mendaftar Google Adsense ke website kalian.

Pada blog kali ini, lebih tepatnya tutorial pertama gua. Kita akan mencoba memasang Google Analytics ke dalam website yang berbasis dengan vue dan nuxt 3.

## Cara mendapatkan ID GA

Sebelum kita install alangkah baiknya gua kasih tau (barangkali belum tau) cara mendapatkan id GA nya. ID ini dibutuhkan sebagai kunci antara GA dan aplikasi kalian. 

Untuk mendapatkan ID Google Analytics (GA), Kalian perlu membuat akun Google Analytics terlebih dahulu dan menambahkan properti atau situs web yang ingin Kalian lacak. Berikut langkah-langkah cara mendapatkan ID GA:

1. Buka situs web Google Analytics di https://analytics.google.com/.
2. Klik tombol "Sign in" di sudut kanan atas dan masuk dengan akun Google Kalian.
3. Setelah berhasil login, klik tombol "Admin" di sudut kiri bawah halaman.
4. Di bagian "Account" dan "Property", pilih "Create Account" dan "Create Property".
5. Isi informasi tentang situs web Kalian seperti nama situs web, URL, zona waktu, dan jenis platform.
6. Klik tombol "Create" untuk membuat properti situs web Kalian.
7. Setelah dibuat klik propertinya, pilih data streams(aliran data) dan klik nama yang ada di tab nya.
8. Nanti akan kebuka tab baru berisi stream url, stream ID, dan ID GA yang kita butuhkan. Biasanya ID nya berbentuk seperti ini `UA-1234567-8` atau `G-1223454`.
9. Salin Id nya karena kita akan gunakan untuk di projek nuxt.

<!-- 7. Setelah berhasil membuat properti, Kalian akan diberikan kode tracking GA, yang biasanya berupa script JavaScript. Salin kode ini dan tambahkan ke dalam kode HTML pada halaman situs web Kalian, tepat sebelum tag `</head>`. -->
## Module resmi GA nuxt (deprecated)

Gua menemukan sebuah modul Google Analytics untuk nuxt [di sini](https://google-analytics.nuxtjs.org/). Tapi ternyata ini hanya bisa digunakan untuk nuxt 2 ke bawah. Ketika kalian mencoba install dan memasang ke projek nuxt 3 akan menimbulkan error. Mungkin akan ada update pada module nya, makanya tetap gua mention di blog kali ini. Karena tutorial ini memasang GA pada nuxt 3, jadi gua tidak akan menggunakan modul ini. 

## Vue gtag next

Setelah gua *research* dan membaca banyak forum seperti *stackoverflow*. Gua menemukan library milik vue yaitu [vue-gtag-next](https://matteo-gabriele.gitbook.io/vue-gtag/v/next/)

Ini adalah salah satu library vue untuk memasang GA pada vue aplikasi. Karena ini bukan modul resmi dari nuxt, kita harus install ke nuxt projek melalui fitur plugin dari nuxt 3. Panduan tentang plugin pada nuxt 3 ada di [dokumentasi resminya](https://nuxt.com/docs/guide/directory-structure/plugins). Tapi tenang saja gua akan bantu prosesnya juga.

### instalasi

Pertama kita install dulu package nya ke dalam nuxt 3 project.

instalasi command melalui npm ataupun yarn:

```bash
yarn add --dev vue-gtag-next
```

```bash
npm install --save-dev vue-gtag-next
```

Setelah itu kita akan membuat folder `plugins/` pada direktori nuxt 3. Setelah itu kita buat file `vue-gtag-client.js` di dalam folder tersebut dan memasukan kode berikut:

```js
// file plugins/vue-gtag-client.js

import VueGtag, { trackRouter } from 'vue-gtag-next'
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: 'GA_MEASUREMENT_ID'
    }
  })
  trackRouter(useRouter())
})
```

Setelah itu kita tidak perlu import lagi ke `nuxt.config.ts` karena nuxt 3 sudah otomatis deteksi pluginnya dan langsung import.

## Alternatif menggunakan script tag

Terlalu pusing cara di atas? Kita bisa menggunakan cara alternatif yang biasanya sebagai cara manual memasang tag GA. Disarankan untuk memasangnya tepat di atas tag `<head>`. Oh iya kalian bisa mendapatkan langsung kode ini di GA kalian dengan memilih install secara manual. Berikut kode nya.

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-XXXXXXX');
</script>
```

Cara ini biasanya cocok untuk website yang berbasis server side atau static. Kalau di nuxt 3 karena bisa keduanya, kita tinggal menggunakan `useHead()` atau pakai `<Head>` tag langsung ke vue file dan meletakan kode di atas.
## Penutup

Setelah berhasil menambahkan kode tracking ke situs web Kalian, tunggu beberapa jam atau hari untuk melihat data analytics di Google Analytics. Biasanya dituliskan butuh 48 jam. Tapi website gua ini sudah gak ada sehari data nya sudah bisa gua monitor, keren sekali. Sekian dari tutorial gua yang pertama ini. Gua akan mencoba membuat tutorial lainnya lagi mungkin yang lebih sederhana. Terima kasih sudah membaca, *Adios*.