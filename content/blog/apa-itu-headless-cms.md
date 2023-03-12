---
title: 'Apa itu Headless CMS'
description: 'Berbeda dengan CMS pada umumnya seperti Wordpress. headless CMS lebih fleksibel'
tags: [web, dev, static, jamstack, api]
img: 'f/188427/1640x924/62c44a2f15/headless-cms.png'
date: '2023-3-07'
---

Halo semuanya, sepertinya gua memulai blog ini dengan membahas Jamstack. Ya ini salah satu series lanjutan tentang jamstack yaitu tools populer nya yaitu Headless CMS. Berbeda dengan CMS tradisional pada umumnya seperti wordpress. Bagi yang tidak tau CMS atau Content Management System adalah cara untuk mengatur konten atau data yang dimiliki pada website. Headless CMS ini unik dan wajib untuk dipelajari. Mari kita bahas.

## Pengertian

Headless CMS (Content Management System) adalah platform manajemen konten yang memisahkan antara tampilan front-end (tampilan pengguna) dan back-end (pengaturan konten). Dalam hal ini, headless CMS hanya bertanggung jawab untuk mengelola dan menyimpan konten, sedangkan front-end diatur oleh pengembang yang berbeda menggunakan API yang disediakan oleh headless CMS.

Contoh headless CMS yang populer adalah:

- Contentful: Headless CMS ini menyediakan API yang mudah digunakan, dan memungkinkan pengembang untuk membuat dan mengelola konten dari berbagai jenis, seperti blog, halaman, produk, dll.

- Prismic: Headless CMS ini menyediakan berbagai macam fitur seperti pengelolaan konten, penjadwalan publikasi, dan penggunaan API untuk mengakses konten.

- Strapi: Headless CMS ini adalah platform open source yang mudah digunakan dan memungkinkan pengguna untuk membuat dan mengelola konten dengan cepat dan efisien.


## Perbedaan

Perbedaan utama antara headless CMS dan CMS (Content Management System) tradisional adalah pada bagian tampilan atau front-end. Pada CMS tradisional, front-end dan back-end terhubung dan diatur bersama-sama dalam satu platform, sementara pada headless CMS, keduanya dipisahkan.

Berikut ini adalah beberapa perbedaan antara headless CMS dan CMS tradisional:

1. Arsitektur:
Headless CMS memiliki arsitektur yang terpisah antara back-end dan front-end, sementara pada CMS tradisional, keduanya terhubung dan diatur bersama-sama dalam satu platform.

2. Kontrol tampilan:
Pada CMS tradisional, pengguna memiliki kendali penuh terhadap tampilan front-end dan back-end. Sedangkan pada headless CMS, pengguna hanya bertanggung jawab untuk mengelola dan menyimpan konten saja.

3. Fleksibilitas:
Headless CMS lebih fleksibel karena API yang disediakan dapat digunakan untuk berbagai jenis platform dan perangkat. CMS tradisional cenderung terbatas pada jenis platform tertentu.

4. Kustomisasi:
Dalam headless CMS, pengembang dapat membangun tampilan front-end yang unik dan sepenuhnya disesuaikan dengan kebutuhan. Pada CMS tradisional, fitur dan tampilan front-end sudah ditentukan oleh platform yang digunakan.

5. Performa:
Headless CMS cenderung memiliki performa yang lebih baik karena hanya fokus pada manajemen konten. Pada CMS tradisional, platform harus mengelola baik konten maupun tampilan front-end, sehingga dapat mempengaruhi performa.

Jadi, perbedaan utama antara headless CMS dan CMS tradisional terletak pada cara mereka mengelola dan mengatur konten dan tampilan front-end. Headless CMS lebih fleksibel dan dapat diintegrasikan dengan lebih banyak jenis platform, sementara CMS tradisional lebih terbatas dan kustomisasinya terbatas pada fitur dan tampilan yang sudah ditentukan oleh platform tersebut.

## Cara kerja

Nahhh, Waktunya bagian asiknya ya. Dari tadi bahas teori mulu sekarang mari kita coba praktekan. Di sini gua akan menggunakan [Storyblok](https://www.storyblok.com/) sebagai Headless CMS nya. Berikut adalah beberapa langkah cara kerja Headless CMS:

1. Mengelola konten
Pada Headless CMS, Kalian mengelola konten seperti biasa dengan menambah, mengedit, atau menghapus konten. Namun, perbedaannya adalah konten tersebut tidak terikat dengan tampilan front-end atau template yang telah ditentukan. Mungkin masih membingungkan langkah selanjutnya mungkin bisa lebih paham. Disini gua bakal mencoba membuat komponen Hero image sederhana.

    ![Langkah pertama](https://a.storyblok.com/f/188427/731x536/68498f2aeb/langkah-1.png/m/filters:format(webp))

2. Menyimpan konten
Setelah konten dibuat atau diubah, Headless CMS akan menyimpannya di database atau penyimpanan cloud yang telah diatur sebelumnya. Konten ini dapat disimpan dalam berbagai format, seperti JSON, Markdown, atau HTML.

3. Mengambil data dengan API
Setelah konten disimpan, Headless CMS akan menyediakan API untuk mengambil data. API ini dapat diakses melalui berbagai bahasa pemrograman, sebagai contoh gua menggunakan javascript vue. Pada storyblok juga kita bisa melihat JSON API nya untuk kita analisa dengan klik draft json.

    ![langkah ketiga](https://a.storyblok.com/f/188427/207x311/5416f55672/langkah-3.png/m/filters:format(webp))

    Untuk isi API nya dari hero image nya seperti ini:

    ```json
    {
    "story": {
        "name": "Home",
        "created_at": "2022-12-17T12:14:33.648Z",
        "published_at": "2022-12-27T07:06:17.286Z",
        "id": 235850842,
        "uuid": "0175b35b-5284-4cb5-a336-5948c1f3c940",
        "content": {
        "_uid": "c449a7cc-6089-4fec-aecd-3eacf4c59854",
        "body": [
            {
            "_uid": "eb93cc7a-1dce-45f7-9649-262f82cf91de",
            "headline": "HELLO MAMANK",
            "component": "hero",
            "subheadline": "Selamat datang",
            "background_image": {
                "id": 6812618,
                "alt": "",
                "name": "",
                "focus": "",
                "title": "",
                "filename": "https://a.storyblok.com/f/188427/1920x1080/c6187785bc/kucing.JPG",
                "copyright": "",
                "fieldtype": "asset",
                "is_external_url": false
            },
            "_editable": "<!--#storyblok#{\"name\": \"hero\", \"space\": \"188427\", \"uid\": \"eb93cc7a-1dce-45f7-9649-262f82cf91de\", \"id\": \"235850842\"}-->"
            },
        ],
        "component": "page",
        "_editable": "<!--#storyblok#{\"name\": \"page\", \"space\": \"188427\", \"uid\": \"c449a7cc-6089-4fec-aecd-3eacf4c59854\", \"id\": \"235850842\"}-->"
        }
    }
    ```
    Agak pusing ya wkwkwkwk. Gua ingin kalian fokus aja kebagian body, di sana ada komponen dengan nama 'hero'. Kalau kalian sadar headline dan subheadline nya itu sama persis pada yang gua buat dilangkah pertama. Di sana juga ada data untuk gambar hero nya seperti link filenamenya.

4. Membuat tampilan front-end
Setelah mengambil data dari API, Kita baru akan membuat front-end nya atau tampilannya. Selama semua langkah yang dilakukan kita belum memiliki tampilan dan hanya data konten nya. Gua akan menggunakan vue js dan tailwind sebagai contoh.
    ```vue
    <template>
        <div
        v-editable="blok"
        class="min-h-[500px] relative flex items-end justify-center my-6 rounded-[5px] overflow-hidden"
        :class="heroClasses"
        >
        <div
            class="relative z-10 w-full text-center bg-gradient-to-t from-black/70 via-black/50 to-transparent py-6"
        >
            <h1 class="text-6xl text-white font-bold mb-3">
            {{ blok.headline }}
            </h1>
            <h2 class="text-4xl text-white font-light">
            {{ blok.subheadline }}
            </h2>
        </div>
        <img
            :src="blok.background_image.filename"
            :alt="blok.background_image.alt"
            class="absolute top-0 left-0 z-0 w-full h-full object-cover"
        />
        </div>
    </template>
    
    <script setup>
    const props = defineProps({ blok: Object })
    </script>
    ```
    Pada kode di atas, gua mengambil data json nya dan memasukkannya pada blok dan dari blok gua tinggal memasukkan data konten dari storyblok ke dalam kode gua.

5. Menampilkan data pada tampilan front-end
Setelah tampilan front-end dibuat, akhirnya dapat menampilkan data dari Headless CMS pada tampilan tersebut. Hal ini dilakukan dengan mengambil data melalui API dan menampilkan konten pada tampilan front-end yang telah dibuat.

    ![langkah 5](https://a.storyblok.com/f/188427/1057x512/bc1b762e2f/langkah-5.png/m/filters:format(webp))

Dalam cara kerja Headless CMS jika lebih dari satu orang, satunya bertanggung jawab untuk mengelola dan menyimpan konten pada back-end, sedangkan tampilan front-end diatur oleh orang yang berbeda. Hal ini memungkinkan untuk lebih fleksibel dan dapat diintegrasikan dengan lebih banyak jenis platform.

## Penutup

Itulah penjelasan dan cara kerja penggunaan Headless CMS. Pada bagian cara kerja gua berusaha untuk simplifikasi pengerjaannya agar mudah dipahami. Tahapan instalasi, setup dan lain lainnya gua lewati. Seperti yang gua bilang di atas hanya salah satu contoh cara kerjanya. Untuk lebih detail kalian bisa kunjungi website masing masing platform nya. Walaupun di contoh menggunakan storyblok, gua yakin platform lain memiliki cara yang serupa pada pembuatan konten nya. Sekian dari gua, _Adios_.