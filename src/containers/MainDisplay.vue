<template>
  <main class="display">
    <b-card-group v-if="showAllMovies" deck tag="article">
      <MovieCard 
        v-for="movie in moviesData" 
        @clicked="handleMovieDetails"
        :key="movie.title" 
        :movie="movie"
      />
    </b-card-group>

    <article v-else @click="handleMovieDetails">
      <MovieDetails :movie="movieDetails"/>
    </article>
  </main>
</template>

<script>
import MovieCard from './MovieCard.vue'
import MovieDetails from './MovieDetails.vue'

export default {
  name: 'MainDisplay',
  components: {
    MovieCard,
    MovieDetails
  },
  props: ['moviesData', 'movieDetails'],
  data() {
    return {
      showAllMovies: true
    }
  },
  methods: {
    handleMovieDetails(movieId) {
      this.showAllMovies = !this.showAllMovies
      this.$emit('handleDetails', movieId)
    }
  }
}
</script>

<style scoped>
.display {
  padding: 100px 20px 20px;
}

.card-deck {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>