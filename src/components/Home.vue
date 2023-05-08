<template>
  <div class="my-28">
    <movie-carousel
      :movieCarousel="movieCarousel"
      :current-index="currentIndex"
      @update:current-index="currentIndex = $event"
      ref="carousel"
    />
  </div>
  <div class="grid grid-cols-4 gap-1 max-w-7xl m-auto">
    <h1 class="text-2xl font-bold mb-4 text-white">Discover Movies</h1>
  </div>
  <div class="grid grid-cols-5 gap-1 max-w-7xl m-auto">
    <div
      v-for="movie in movies"
      :key="movie.imdbID"
      class="w-56 rounded overflow-hidden shadow-lg m-4"
    >
      <router-link :to="'/movie/' + movie.Title">
        <img
          :alt="movie.Title"
          :src="movie.Poster"
          class="w-full h-80 w-56 object-cover"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-white text-base mb-2">
            {{ movie.Title }}
          </div>
          <p class="text-gray-700 text-base">{{ movie.Year }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import MovieCarousel from "./MovieCarousel.vue";
import { RouterLink } from "vue-router";
// import axios from "axios";
export default {
  name: "MovieList",
  components: {
    MovieCarousel,
    // RouterLink,
  },
  props: {
    // add @ts-ignore if using TypeScript
    ...RouterLink.props,
    inactiveClass: String,
  },
  data() {
    return {
      movies: [
        {
          Title: "Avengers:Infinity War",
          Year: "2018",
          imdbID: "tt00767q59",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
        },
        {
          Title: "Star Wars: Episode V - The Empire Strikes Back",
          Year: "1980",
          imdbID: "ttq0080684",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        },
        {
          Title: "Wonder Woman",
          Year: "2017",
          imdbID: "ttq0086190",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMTYzODQzYjQtNTczNC00MzZhLTg1ZWYtZDUxYmQ3ZTY4NzA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
        },
        {
          Title: "Avatar",
          Year: "2009",
          imdbID: "tqt0076759",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
        },
        {
          Title: "Transformers",
          Year: "2007",
          imdbID: "tqt008068q4",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BNWI1NjkxM2MtOTU4My00YzQ5LTliNGMtNmFlM2U5NWM3MDY1XkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg",
        },
        {
          Title: "Breach",
          Year: "2007",
          imdbID: "tt00q86190",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMTM0NDI4MTEtMGRiZi00MzdlLWFkZTAtNTYzNTU3YzcxODVjXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_SX300.jpg",
        },

        {
          Title: "Soul",
          Year: "2020",
          imdbID: "tt008068q4",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BZGE1MDg5M2MtNTkyZS00MTY5LTg1YzUtZTlhZmM1Y2EwNmFmXkEyXkFqcGdeQXVyNjA3OTI0MDc@._V1_SX300.jpg",
        },
        {
          Title: "Fast & Furious",
          Year: "2013",
          imdbID: "tt00a86190",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMTM3NTg2NDQzOF5BMl5BanBnXkFtZTcwNjc2NzQzOQ@@._V1_SX300.jpg",
        },
        {
          Title: "The Conjuring",
          Year: "2013",
          imdbID: "tt0z080684",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_SX300.jpg",
        },
        {
          Title: "The Hobbit",
          Year: "1977",
          imdbID: "tt008z6190",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BNWEyOTlhNjMtZjNlMC00Y2QyLTljMjUtZjUzMzIyYTlmNjM1XkEyXkFqcGdeQXVyNjc5NjEzNA@@._V1_SX300.jpg",
        },
      ],
      movieCarousel: [
        {
          Title: "The Hobbit",
          Year: "1977",
          imdbID: "tt008z6190",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BNWEyOTlhNjMtZjNlMC00Y2QyLTljMjUtZjUzMzIyYTlmNjM1XkEyXkFqcGdeQXVyNjc5NjEzNA@@._V1_SX300.jpg",
          Description:
            "When the crew of a space junk collector ship called The Victory discovers a humanoid robot named Dorothy that s known to be a weapon of mass destruction, they get involved in a risky business deal which puts their lives at stake.",
        },
        {
          Title: "The Conjuring",
          Year: "2013",
          imdbID: "tt0z080684",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_SX300.jpg",
          Description:
            "When the crew of a space junk collector ship called The Victory discovers a humanoid robot named Dorothy that s known to be a weapon of mass destruction, they get involved in a risky business deal which puts their lives at stake.",
        },
        {
          Title: "Fast & Furious",
          Year: "2013",
          imdbID: "tt00a86190",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMTM3NTg2NDQzOF5BMl5BanBnXkFtZTcwNjc2NzQzOQ@@._V1_SX300.jpg",
          Description:
            "When the crew of a space junk collector ship called The Victory discovers a humanoid robot named Dorothy that s known to be a weapon of mass destruction, they get involved in a risky business deal which puts their lives at stake.",
        },
        {
          Title: "Breach",
          Year: "2007",
          imdbID: "tt00q86190",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMTM0NDI4MTEtMGRiZi00MzdlLWFkZTAtNTYzNTU3YzcxODVjXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_SX300.jpg",
          Description:
            "When the crew of a space junk collector ship called The Victory discovers a humanoid robot named Dorothy that s known to be a weapon of mass destruction, they get involved in a risky business deal which puts their lives at stake.",
        },
      ],
      currentIndex: 0,
    };
  },
  watch: {
    currentIndex() {
      this.$nextTick(() => {
        this.$refs.carousel.updateTranslateX();
      });
    },
  },
};
</script>

<style>
/* Customize the styling as needed */
</style>
