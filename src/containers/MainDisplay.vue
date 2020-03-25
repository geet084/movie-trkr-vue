<template>
  <main class="display">
    <b-card-group v-if="showAllMovies" deck tag="article">
      <MovieCard 
        v-for="movie in moviesList" 
        @clicked="handleMovieDetails"
        @toggleStarred="toggleStarred"
        :id="movie.id"
        :isStarred="starred.includes(movie.id)"
        :key="movie.title" 
        :movie="movie"
      />
    </b-card-group>

    <article v-else @click="handleMovieDetails">
      <MovieDetails
        @toggleStarred="toggleStarred"
        :id="movieDetails.id"
        :isStarred="starred.includes(movieDetails.id)"
        :movie="movieDetails"
      />
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
  props: ['moviesList', 'movieDetails'],
  data() {
    return {
      showAllMovies: true,
      starred: []
    }
  },
  methods: {
    handleMovieDetails(movieId) {
      this.showAllMovies = !this.showAllMovies
      this.$emit('handleDetails', movieId)
    },
    toggleStarred(movieIdStr) {
      const movieId = parseInt(movieIdStr)
      let updatedList = this.starred
      const notAlreadyStarred = !this.starred.includes(movieId)

      if (notAlreadyStarred) updatedList.push(movieId)
      else updatedList = this.starred.filter(id => id !== movieId)

      this.starred = updatedList
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