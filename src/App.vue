<template>
  <div id="app">
    <NavBar @clicked="updateCategory"/>
  </div>
</template>

<script>
import NavBar from './containers/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  },
  data() {
    return {
      movieData: [],
    }
  },
  mounted() {
    this.updateCategory('now_playing')
  },
  methods: {
    updateCategory: function(category) {
      const apiKey = process.env.VUE_APP_MOVIE_DB_API_KEY
      const url = `https://api.themoviedb.org/3/movie/${category}?page=1&api_key=${apiKey}&language=en-US`

      this.$http.get(url).then((res) => {
        this.movieData = res.data.results
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
