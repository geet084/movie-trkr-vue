<template>
  <article v-if="type === 'faves'" class="no-results">
    <h2>Uh oh...</h2>
    <h3>You don't have any favorites yet!</h3>
    <p>Why not try adding some now?</p>
  </article>
</template>

<script>
export default {
  name: 'NoResults',
  props: ['type']
}
</script>

<style scoped>
.no-results {
  color: #f8f9fa;
  text-align: center;
  padding-top: calc(15vw);
}
</style>