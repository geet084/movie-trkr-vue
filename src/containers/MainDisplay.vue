<template>
  <main class="display">
    <article v-if="displayToShow === 'showDetails'" @click="handleMovieDetails">
      <MovieDetails
        @toggleStarred="toggleStarred"
        :id="movieDetails.id"
        :isStarred="starred.includes(movieDetails.id)"
        :movie="movieDetails"
        :userInfo="userInfo"
      />
    </article>

    <b-card-group v-else deck tag="article">
      <MovieCard 
        v-for="movie in moviesList" 
        @clicked="handleMovieDetails"
        @toggleStarred="toggleStarred"
        :id="movie.id"
        :isStarred="starred.includes(movie.id)"
        :key="movie.title" 
        :movie="movie"
        :userInfo="userInfo"
      />
    </b-card-group>
  </main>
</template>

<script>
import MovieCard from '../components/MovieCard.vue'
import MovieDetails from '../components/MovieDetails.vue'

export default {
  name: 'MainDisplay',
  components: {
    MovieCard,
    MovieDetails
  },
  props: ['displayToShow', 'movieDetails', 'moviesList', 'starred', 'userInfo'],
  methods: {
    handleMovieDetails(movieId) {
      this.$emit('handleDetails', movieId)
    },
    toggleStarred(movieIdStr) {
      const movieId = parseInt(movieIdStr)
      this.$emit('toggleStarred', movieId)
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