<template>
  <b-card
    class="mb-4"
    @click="handleMovieDetails"
    :id="movie.id"
    :img-src="imgSrc"
    :img-alt="movie.title"
    overlay
    tag="section"
  >
    <Star 
      :isLoggedIn="userInfo.name"
      :isStarred="isStarred"
      type="cardStar"
    />
  </b-card>
</template>

<script>
import Star from '../components/Star.vue' 

export default {
  name: 'MovieCard',
  props: ['movie', 'isStarred'],
  components: {
    Star
  },
  computed: {
    userInfo() {
      return this.$store.state.userInfo
    }
  },
  data() {
    return {
      imgSrc: `https://image.tmdb.org/t/p/w342${this.movie.poster_path}`
    }
  },
  created() {
    if (this.movie.poster_path === null) {
      this.imgSrc = require('@/assets/default-movie.png')
    }
  },
  methods: {
    handleMovieDetails({ target }) {
      const movieId = target.closest('section').id

      if(!isNaN(movieId)) {
        const payload = { type: 'movieDetails', selection: movieId }
        this.$store.dispatch('handleDetails')
        this.$store.dispatch('getMovieData', payload)
      }
    }
  }
}
</script>

<style scoped>
.card {
  cursor: pointer;
  background-size: cover;
  height: 28.45rem;
  max-width: 19rem;
  min-width: 19rem;
  overflow: hidden;
}
.card:hover {
  transform: scale(1.025);
  transition: .3s ease-in-out;
  box-shadow: 0px 0px 5px 2px rgba(255, 255, 255, 0.6);
}
</style>