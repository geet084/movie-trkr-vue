<template>
  <div id="app">
    <NavBar
      @change="handleSearch"
      @clicked="updateCategory" 
      @toggleFavorites="toggleFavorites"
    />
    <MainDisplay 
      @handleDetails="handleMovieDetails"
      @toggleStarred="toggleStarred"
      :favesList="favesList"
      :moviesList="this.displayToShow.current === 'showAll' ? moviesList : favesList" 
      :movieDetails="movieDetails"
      :displayToShow="displayToShow.current"
    />
  </div>
</template>

<script>
import NavBar from './containers/NavBar.vue'
import MainDisplay from './containers/MainDisplay.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    MainDisplay
  },
  computed: {
    favesList() {
      return this.$store.state.favesList
    },
    moviesList() {
      return this.$store.state.moviesList
    },
    movieDetails() {
      return this.$store.state.movieDetails
    },
    displayToShow() {
      return this.$store.state.displayToShow
    }
  },
  mounted() {
    const payload = { type: 'moviesList', selection: 'now_playing' }
    
    this.$store.dispatch('getMovieData', payload)
    this.$store.dispatch('updateCategory', 'now_playing')
  },
  methods: {
    async handleMovieDetails(movieId) {
      this.updateDisplay('showDetails')

      if (isNaN(movieId)) this.movieDetails = {}
      else this.movieDetails = await this.getMovieData('movieDetails', movieId)
    },
    async handleSearch(queryStr) {
      if (queryStr !== '') this.moviesList = await this.getMovieData('search', queryStr)
      else this.updateCategory('now_playing')
    },
    toggleFavorites() {
      this.updateDisplay('showFaves')
    },
    async toggleStarred(movieId) {
      let movie = this.movieDetails

      if (movieId !== this.movieDetails.id) {
        movie = await this.getMovieData('movieDetails', movieId)
      }

      let updatedList = this.favesList
      const notAlreadyStarred = !this.favesList.find(fave => fave.id === movie.id)
      
      if (notAlreadyStarred) updatedList.push(movie)
      else updatedList = this.favesList.filter(fave => fave.id !== movie.id)

      this.favesList = updatedList
    },
    async updateCategory(category) {
      this.moviesList = await this.getMovieData('moviesList', category)
      this.updateDisplay('showAll')
    },
    updateDisplay(nextDisplay) {
      const current = this.displayToShow.current
      const exitDetails = current === 'showDetails' && nextDisplay === 'showDetails'
      const exitFaves = current === 'showFaves' && nextDisplay === 'showFaves'
      
      let updatedCurr = nextDisplay
      let updatedPrev = current

      if (exitDetails) {
        updatedCurr = this.displayToShow.previous
      } else if (exitFaves) {
        updatedCurr = 'showAll'
        updatedPrev = nextDisplay
      }
      
      this.displayToShow = {
        current: updatedCurr,
        previous: updatedPrev
      }
    }
  }
}
</script>

<style>
#app {
  background-color: #000;
}
</style>
