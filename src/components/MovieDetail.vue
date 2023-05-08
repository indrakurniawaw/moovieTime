<template>
  <div class="">
    <!-- <h2 class="text-2xl font-bold mb-4">{{ film.title }}</h2> -->
    <div
      class="h-96"
      :style="`background-image:url('${film?.Poster}'); background-size: cover; background-position: center; background-repeat: no-repeat;`"
    ></div>
    <div class="flex h-20 bg-black">
      <div class="flex ml-96 mr-5 border-gray-600">
        <img
          src="../assets/Star.png"
          alt="Star"
          class="ml-8 object-contain bg-blend-color-dodge w-8"
        />
        <p class="items-center inline-grid text-white font-bold ml-8 text-2xl">
          {{ film?.imdbRating }}
        </p>
      </div>
      <div class="grid mr-5 border-l-2 border-gray-600">
        <p class="items-end inline-grid text-gray-600 ml-8">Status</p>
        <p class="text-white ml-8">RELEASE</p>
      </div>
      <div class="grid mr-5 border-l-2 border-gray-600">
        <p class="items-end inline-grid text-gray-600 ml-8">Language</p>
        <p class="text-white ml-8">{{ film?.Language.toUpperCase() }}</p>
      </div>
      <div class="grid mr-5 border-l-2 border-gray-600">
        <p class="items-end inline-grid text-gray-600 ml-8">Box Office</p>
        <p class="text-white ml-8">{{ film?.BoxOffice }}</p>
      </div>
      <div class="grid mr-5 border-l-2 border-gray-600">
        <p class="items-end inline-grid text-gray-600 ml-8">Production</p>
        <p class="text-white ml-8">{{ film?.Production }}</p>
      </div>
    </div>
    <div class="flex absolute top-72 rounded overflow-hidden mt-6 ml-40 w-2/4">
      <img
        :src="film?.Poster"
        alt="Film Poster"
        class="h-80 w-56 object-cover"
      />
      <div class="grid ml-2">
        <div>
          <h2 class="text-white">{{ film?.Year }}</h2>
          <h1 class="text-2xl text-white">{{ film?.Title }}</h1>
          <h2 class="text-white">{{ film?.Genre }}</h2>
        </div>
        <div class="bottom-0 absolute">
          <h2 class="text-red-600 font-bold">Overview</h2>
          <h2>{{ film?.Plot }}</h2>
        </div>
      </div>
    </div>
    <description />
  </div>
</template>

<script>
import axios from "axios";
import Description from "./MovieDetailDesc.vue";
export default {
  components: {
    Description,
  },
  data() {
    return {
      film: null, // Objek film yang akan ditampilkan
    };
  },
  created() {
    axios
      .get(
        `http://www.omdbapi.com/?apikey=5c7f04cd&t=${this.$route.params.title}`
      )
      .then((response) => {
        this.film = response.data;
        this.loading = false;
      })
      .catch((error) => {
        this.error = error;
        this.loading = false;
      });
    // Mendapatkan detail film dari API berdasarkan ID film
    // const filmId = this.$route.params.id;
    // Ambil ID film dari parameter URL
    // Lakukan permintaan ke API untuk mendapatkan detail film berdasarkan ID film
    // Simpan data film yang diterima ke dalam properti film
  },
  methods: {
    fetchMovies() {
      this.loading = true;

      // Hit API to fetch movies for the current page
    },
  },
};
</script>

<style>
/* Styling komponen DetailMovie */
</style>
