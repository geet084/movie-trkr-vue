<template>
  <b-card
    class="movie-card mb-4 mx-auto"
    :img-alt="movie.title"
    :img-src="imgSrc"
    overlay
    tag="section"
    text-variant="white"
  >
    <b-overlay
      no-wrap
      rounded="sm" 
      :show="true" 
      spinner-type="none" 
      variant="dark" 
    ></b-overlay>
    <b-card class="overlay-info" :title="movie.title">
      <MovieStats 
        @toggleStarred="toggleStarred" 
        :isLoggedIn="userInfo.name" 
        :isStarred="isStarred" 
        :movie="movie"
      />
      <b-card-text>{{movie.overview}}</b-card-text>
      <MovieGenres v-if="this.movie.poster_path" :movieGenres="movie.genres" />
      <Trailer :link="ytVideoLink" />
    </b-card>
  </b-card>
</template>

<script>
import MovieGenres from '../components/MovieGenres.vue'
import MovieStats from '../components/MovieStats.vue'
import Trailer from '../components/Trailer.vue'

export default {
  name: 'MovieDetails',
  props: ['movie', 'isStarred', 'userInfo'],
  components: {
    MovieGenres,
    MovieStats,
    Trailer
  },
  data() {
    return {
      imgSrc: '',
      genreList: '',
      ytVideoLink: ''
    }
  },
  updated() {
    if (this.movie.poster_path) {
      this.imgSrc = `https://image.tmdb.org/t/p/w780${this.movie.poster_path}`
    } else {
      this.imgSrc = require('@/assets/default-movie.png')
    }
    
    this.getVideoLink(this.movie.id)
  },
  methods: {
    toggleStarred(movieId) {
      this.$emit('toggleStarred', movieId)
    },
    getVideoLink(movieId) {
      const apiKey = process.env.VUE_APP_MOVIE_DB_API_KEY
      const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}&language=en-US`
      
      this.$http.get(url).then(res => {
        if (res.data.results.length) {
          const ytId = res.data.results[0].key
          this.ytVideoLink = `https://www.youtube-nocookie.com/embed/${ytId}`
        }
      })
    }
  }
}
</script>

<style scoped>
.movie-card {
  align-items: center;
  background-color: #000;
  cursor: pointer;
  display: flex;
  font-family: 'Nunito', sans-serif;
  height: 90vh;
}
.card-body {
  overflow: scroll;
}
.movie-card img {
  height: auto;
  position: fixed;
  width: 53vh;
}
.card-img-overlay {
  height: 80vh;
  margin: 0 auto;
  position: fixed;
  top: 100px;
  width: 53vh;
}
.overlay-info {
  background: none;
  border: none;
  margin: -1.7rem;
  z-index: 20;
}
</style>