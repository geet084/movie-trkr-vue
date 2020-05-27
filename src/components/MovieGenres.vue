<template>
  <b-card-text class="genres">
    {{genreList}}
  </b-card-text>
</template>

<script>
export default {
  name: 'MovieGenres',
  props: ['movieGenres'],
  data() {
    return {
      genreList: ''
    }
  },
  mounted() {
    this.buildGenreList(this.movieGenres)
  },
  methods: {
    buildGenreList(genres) {
      const lastWord = genres.length - 1

      this.genreList = genres.map(genre => genre.name)
        .sort()
        .map((word, i) => i === lastWord ? `${word}` : `${word} ⋅ `)
        .join('')
    }
  }
}
</script>

<style scoped>
.genres {
  color: #ccc;
  font-family: 'Montserrat', sans-serif;
  font-size: .8rem;
}
</style>