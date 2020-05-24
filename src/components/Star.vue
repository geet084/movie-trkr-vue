<template>
  <span
    v-if="type === 'cardStar' && isLoggedIn"
    class="star cardStar"
    :class="{ starred: isStarred }"
    @click.stop="toggleStarred"
  >★</span>
  <span
    v-else-if="type === 'detailsStar' && isLoggedIn"
    class="star detailsStar"
    :class="{ starred: isStarred }"
    @click.stop="toggleStarred"
  >★</span>
</template>

<script>
export default {
  name: 'Star',
  props:['isStarred', 'isLoggedIn', 'type'],
  methods: {
    toggleStarred({ target }) {
      const movieId = target.closest('section').id
      this.$emit('toggleStarred', movieId)
    }
  }
}
</script>

<style scoped>
.star {
  color: #fff;
  text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;
  font-family: 'Jua', sans-serif;
}
.cardStar {
  font-size: 2.5rem;
  position: relative;
  top: -15px;
  left: 235px;
}
.detailsStar {
  font-size: 2rem;
}
.starred {
  color: yellow;
}
.star:active, 
.starred:active {
  color:rgb(255, 255, 200);
}
</style>