<template>
  <div class="carousel-container">
    <div
      class="carousel flex space-x-4"
      :style="{ transform: `translateX(${translateX}%)` }"
      ref="carousel"
    >
      <div v-for="movie in movieCarousel" :key="movie.id" class="carousel-item">
        <div class="movie-poster">
          <img
            :src="movie.Poster"
            :alt="movie.Title"
            class="w-full h-80 w-56 object-cover"
          />
        </div>
        <div class="movie-details">
          <h2 class="movie-title">{{ movie.Title }}</h2>
          <p class="movie-description">{{ movie.Description }}</p>
        </div>
      </div>
    </div>
    <div class="flex justify-center mt-4">
      <button
        v-for="(movie, index) in movieCarousel"
        :key="index"
        @click="goToIndex(index)"
        :class="{
          'bg-orange-500 w-11': currentIndex === index,
          'bg-gray-300': currentIndex !== index,
        }"
        class="h-2 w-2 rounded-full mx-1 focus:outline-none"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieCarousel",
  props: {
    movieCarousel: {
      type: Array,
      required: true,
    },
    currentIndex: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      translateX: 0,
    };
  },
  methods: {
    goToIndex(index) {
      this.$emit("update:currentIndex", index);
    },
    updateTranslateX() {
      setTimeout(() => {
        this.translateX = -this.currentIndex * 25;
      }, 50);
    },
  },
};
</script>

<style scoped>
.carousel-container {
  width: 100%;
  overflow: hidden;
  scroll-snap-type: x mandatory;
  position: relative;
  overflow: hidden;
}

.carousel-item {
  display: flex;
  align-items: center;
  /* gap: 1rem; */
}

.movie-card {
  width: 100%;
  height: 100%;
}

.movie-poster {
  object-fit: contain;
}

.movie-title {
  color: #ffffff;
}

.movie-details {
  flex: 1;
  background-color: black;
  padding: 1rem;
  max-width: 460px;
}

.movie-description {
  font-size: 1rem;
  color: gray;
}

.carousel {
  display: flex;
  transition: transform 0.5s;
  /* position: absolute; */
  left: 0;
}
</style>
