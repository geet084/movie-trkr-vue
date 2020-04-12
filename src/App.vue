<template>
  <div id="app">
    <NavBar
      @change="handleSearch"
      @clicked="updateCategory" 
      @toggleFavorites="toggleFavorites"
      @signOutUser="signOutUser"
      @userData="userData" 
      :userInfo="userInfo"
    />
    <MainDisplay 
      @handleDetails="handleMovieDetails"
      @toggleStarred="toggleStarred"
      :favesList="favesList"
      :moviesList="this.displayToShow.current === 'showAll' ? moviesList : favesList" 
      :movieDetails="movieDetails"
      :userInfo="userInfo"
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
  data() {
    return {
      displayToShow: {
        current: '',
        previous: ''
      },
      favesList: [],
      moviesList: [],
      movieDetails: {},
      userInfo: {
        name: '',
        email: ''
      }
    }
  },
  mounted() {
    this.updateCategory('now_playing')
  },
  methods: {
    getMovieData(type, selection) {
      const apiKey = process.env.VUE_APP_MOVIE_DB_API_KEY
      const urlSegment = type === 'movieDetails' ? `${selection}?` : `${selection}?page=1&`
      const url = `https://api.themoviedb.org/3/movie/${urlSegment}api_key=${apiKey}&language=en-US`
    
      return this.$http.get(url).then(res => {
        if (type === 'movieDetails') return res.data
        else if (type === 'moviesList') return res.data.results
      })
    },
    async handleMovieDetails(movieId) {
      this.updateDisplay('showDetails')

      if (isNaN(movieId)) this.movieDetails = {}
      else this.movieDetails = await this.getMovieData('movieDetails', movieId)
    },
    handleSearch(queryStr) {
      const apiKey = process.env.VUE_APP_MOVIE_DB_API_KEY
      const url = `https://api.themoviedb.org/3/search/movie?query=${queryStr}&api_key=${apiKey}&language=en-US`
    
      if (queryStr !== '') this.$http.get(url).then(res => this.moviesList = res.data.results)
    },
    signOutUser() {
      this.userInfo = {
        name: '',
        email: ''
      }
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
    userData(user) {
      this.userInfo = user
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
