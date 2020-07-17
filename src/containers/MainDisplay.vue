<template>
  <main class="display">

    <NoResults v-if="displayToShow === 'showAll' && zeroMovies" type="showAll" />
    <NoResults v-else-if="displayToShow === 'showFaves' && zeroMovies" type="faves" />
    <Loading v-else-if="zeroMovies" />

    <b-card-group 
      v-if="displayToShow === 'showAll' || (displayToShow === 'showFaves' && !zeroMovies)" 
      deck 
      tag="article"
    >
      <MovieCard 
        v-for="movie in moviesList"
        :id="movie.id"
        :isStarred="favesList.find(fave => fave.id === movie.id)"
        :key="movie.id" 
        :movie="movie"
      />
    </b-card-group>

    <article v-else-if="displayToShow === 'showDetails'">
      <MovieDetails
        :id="movieDetails.id"
        :isStarred="favesList.find(fave => fave.id === movieDetails.id)"
        :movie="movieDetails"
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
  props: ['displayToShow', 'favesList', 'movieDetails', 'moviesList'],
  data() {
    return {
      zeroMovies: false,
    }
  },
  updated() {
    this.zeroMovies = this.$props.moviesList.length < 1
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