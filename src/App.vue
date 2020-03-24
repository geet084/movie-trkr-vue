<template>
  <div id="app">
    <NavBar @clicked="updateCategory" :userInfo="userInfo" />
    <MainDisplay 
      @handleDetails="handleMovieDetails"
      :moviesList="moviesList" 
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
    updateCategory(category) {
      this.getMovieData('moviesList', `${category}?page=1&`)
    },
    handleMovieDetails(movieId) {
      if (isNaN(movieId)) this.movieDetails = {}
      else this.getMovieData('movieDetails', `${movieId}?`)
    },
    getMovieData(type, urlSegment) {
      const apiKey = process.env.VUE_APP_MOVIE_DB_API_KEY
      const url = `https://api.themoviedb.org/3/movie/${urlSegment}api_key=${apiKey}&language=en-US`

      this.$http.get(url).then(res => {
        if (type === 'movieDetails') this.movieDetails = res.data
        else this.moviesList = res.data.results
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
