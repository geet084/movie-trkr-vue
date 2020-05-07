<template>
  <main class="display">

    <NoResults 
      v-if="displayToShow === 'showAll' && moviesList.length === 0"
      type="showAll"
    />
    
    <NoResults 
      v-else-if="displayToShow === 'showFaves' && moviesList.length === 0"
      type="faves"
    />

    <Loading v-else-if="moviesList.length === 0" />

    <b-card-group 
      v-if="displayToShow === 'showAll' || (displayToShow === 'showFaves' && moviesList.length > 0)" 
      deck 
      tag="article"
    >
      <MovieCard 
        v-for="movie in moviesList" 
        @clicked="handleMovieDetails"
        @toggleStarred="toggleStarred"
        :id="movie.id"
        :isStarred="favesList.find(fave => fave.id === movie.id)"
        :key="movie.id" 
        :movie="movie"
        :userInfo="userInfo"
      />
    </b-card-group>

    <article v-else-if="displayToShow === 'showDetails'" @click="handleMovieDetails">
      <MovieDetails
        @toggleStarred="toggleStarred"
        :id="movieDetails.id"
        :isStarred="favesList.find(fave => fave.id === movieDetails.id)"
        :movie="movieDetails"
        :userInfo="userInfo"
      />
    </article>
  </main>
</template>

<script>
import Loading from '../components/Loading.vue'
import MovieCard from '../components/MovieCard.vue'
import MovieDetails from '../components/MovieDetails.vue'
import NoResults from '../components/NoResults.vue'

export default {
  name: 'MainDisplay',
  components: {
    Loading,
    MovieCard,
    MovieDetails,
    NoResults
  },
  props: ['displayToShow', 'favesList', 'movieDetails', 'moviesList', 'userInfo'],
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
  min-height: 100vh;
  padding: 100px 20px 20px;
}

.card-deck {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>