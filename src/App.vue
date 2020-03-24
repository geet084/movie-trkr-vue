<template>
  <div id="app">
    <NavBar @clicked="updateCategory" :userInfo="userInfo" />
    <MainDisplay 
      @handleDetails="handleMovieDetails"
      :moviesData="moviesData" 
      :movieDetails="movieDetails" 
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
      moviesData: [],
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
    updateCategory(category) {
      const apiKey = process.env.VUE_APP_MOVIE_DB_API_KEY
      const url = `https://api.themoviedb.org/3/movie/${category}?page=1&api_key=${apiKey}&language=en-US`
      
      this.$http.get(url).then(res => {
        this.moviesData = res.data.results
      })
    },
    handleMovieDetails(val) {
      if (isNaN(val)) this.movieDetails = {}
      else this.getMovieDetails(val)
    },
    getMovieDetails(movieId) {
      const apiKey = process.env.VUE_APP_MOVIE_DB_API_KEY
      const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`

      this.$http.get(url).then(res => {
        this.movieDetails = res.data
      })
    }
  }
}
</script>

<style>
#app {
  background-color: #000;
}
</style>
