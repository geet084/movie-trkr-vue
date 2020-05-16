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
      @toggleStarred="toggleStarred" 
      :isLoggedIn="userInfo.name"
      :isStarred="isFave" 
    />
  </b-card>
</template>

<script>
import Star from '../components/Star.vue' 

export default {
  name: 'MovieCard',
  props: ['movie', 'isStarred', 'userInfo'],
  components: {
    Star
  },
  data() {
    return {
      isFave: false,
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
      this.$emit('clicked', movieId)
    },
    toggleStarred(movieId) {
      this.isFave = !this.isFave
      this.$emit('toggleStarred', movieId)
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
/*  */
</style>