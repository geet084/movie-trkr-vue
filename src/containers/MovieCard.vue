<template>
  <b-card
    class="mb-4"
    @click="handleMovieDetails"
    :id="movie.id"
    :img-src="'http://image.tmdb.org/t/p/w342'+ movie.poster_path"
    :img-alt="movie.title"
    overlay
    tag="section"
  >
  </b-card>
</template>

<script>
export default {
  name: 'MovieCard',
  props: ['movie'],
  methods: {
    handleMovieDetails({ target }) {
      const movieId = target.closest('section').id
      this.$emit('clicked', movieId)
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
  border: 2px solid #fff;
}
</style>