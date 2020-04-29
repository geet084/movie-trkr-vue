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
      isFave: false,
      imgSrc: `https://image.tmdb.org/t/p/w342${this.movie.poster_path}`
    }
  },
  created() {
    if (this.movie.poster_path === null) {
      this.imgSrc = 'https://media.comicbook.com/files/img/default-movie.png'
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
  transform: scale(1.025);
  transition: .3s ease-in-out;
  box-shadow: 0px 0px 5px 2px rgba(255, 255, 255, 0.6);
}
.star {
  font-size: 2.5rem;
  position: relative;
  top: -15px;
  left: 235px;
  color: #fff;
  text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;
}
.starred {
  color: yellow;
}
.star:active, 
.starred:active {
  color:rgb(255, 255, 200);
}
</style>