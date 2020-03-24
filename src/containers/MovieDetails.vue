<template>
  <b-card
    class="movie-card mb-4 mx-auto"
    img-alt="card img"
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
        <span>{{movie.vote_average}} ⭐️</span>
      </b-card-text>
      <b-card-text>{{movie.overview}}</b-card-text>
    </b-card>
  </b-card>
</template>

<script>
export default {
  name: 'MovieDetails',
  props: ['movie'],
  data() {
    return {
      imgSrc: ''
    }
  },
  updated() {
    this.imgSrc = `http://image.tmdb.org/t/p/w780${this.movie.poster_path}`
  }
}
</script>

<style scoped>
.movie-card {
  align-items: center;
  background-color: #000;
  cursor: pointer;
  display: flex;
  height: 90vh;
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
  display: flex;
  justify-content: space-around;
}
</style>