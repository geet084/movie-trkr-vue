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
    <span
      v-if="userInfo.name"
      class="star"
      :isStarred="isFave"
      :class="{ starred: isStarred }"
      @click.stop="toggleStarred"
    >★</span>
  </b-card>
</template>

<script>
export default {
  name: 'MovieCard',
  props: ['movie', 'isStarred', 'userInfo'],
  data() {
    return {
      isFave: false
    }
  },
  methods: {
    handleMovieDetails({ target }) {
      const movieId = target.closest('section').id
      this.$emit('clicked', movieId)
    },
    toggleStarred({ target }) {
      const movieId = target.closest('section').id
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
  border: 2px solid #fff;
}
.star {
  font-size: 2.5rem;
  position: relative;
  top: -15px;
  left: 235px;
  color: #fff;
  text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;
}
.star:hover {
  color:red;
}
.starred {
  color: yellow;
}
</style>