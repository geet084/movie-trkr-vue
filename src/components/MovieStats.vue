<template>
  <b-card-text class="movie-stats">
    <span>{{new Date(movie.release_date).getFullYear()}}</span>
    <span>{{movie.runtime}} minutes</span>
    <span>{{movie.vote_average}} / 10</span>
    <Star 
      @toggleStarred="toggleStarred" 
      :isLoggedIn="isLoggedIn"
      :isStarred="isStarred"
      type="detailsStar"
    />
  </b-card-text>
</template>

<script>
import Star from '../components/Star.vue'

export default {
  name: 'MovieStats',
  props: ['movie', 'isStarred', 'isLoggedIn'],
  components: {
    Star
  },
  methods: {
    toggleStarred(movieId) {
      this.$emit('toggleStarred', movieId)
    }
  }
}
</script>

<style scoped>
.movie-stats {
  align-items: baseline;
  color: #ccc;
  display: flex;
  font-family: 'Montserrat', sans-serif;
  font-size: .8rem;
  justify-content: space-around;
}
</style>