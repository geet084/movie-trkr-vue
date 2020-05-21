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
      <b-card-text class="movie-stats">
        <span>{{new Date(movie.release_date).getFullYear()}}</span>
        <span>{{movie.runtime}} minutes</span>
        <span>{{movie.vote_average}} / 10</span>
        <Star 
          @toggleStarred="toggleStarred" 
          :isLoggedIn="userInfo.name"
          :isStarred="isStarred"
          type="detailsStar"
        />
      </b-card-text>
      <b-card-text>{{movie.overview}}</b-card-text>
      <b-card-text class="genres">{{genreList}}</b-card-text>
      <Trailer :link="ytVideoLink" />
    </b-card>
  </b-card>
</template>

<script>
import Star from '../components/Star.vue'
import Trailer from '../components/Trailer.vue'

export default {
  name: 'MovieDetails',
  props: ['movie', 'isStarred', 'userInfo'],
  components: {
    Star,
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
    
    this.buildGenreList(this.movie.genres)
    this.getVideoLink(this.movie.id)
  },
  methods: {
    toggleStarred(movieId) {
      this.$emit('toggleStarred', movieId)
    },
    buildGenreList(genres) {
      const lastWord = genres.length - 1

      this.genreList = genres.map(genre => genre.name)
        .sort()
        .map((word, i) => i === lastWord ? `${word}` : `${word} ⋅ `)
        .join('')
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
.movie-stats {
  align-items: baseline;
  color: #ccc;
  display: flex;
  font-family: 'Montserrat', sans-serif;
  font-size: .8rem;
  justify-content: space-around;
}
.genres {
  color: #ccc;
  font-family: 'Montserrat', sans-serif;
  font-size: .8rem;
}
</style>