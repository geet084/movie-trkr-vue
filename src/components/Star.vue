<template>
  <span
    v-if="isLoggedIn"
    class="star"
    :class="{ starred: isStarred }"
    @click.stop="toggleStarred"
  >★</span>
</template>

<script>
export default {
  name: 'Star',
  props:['isStarred', 'isLoggedIn'],
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