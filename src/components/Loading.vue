<template>
  <article class="loading">
    <b-spinner
      style="width: 3rem; height: 3rem;"
      variant="light"
    ></b-spinner>
  </article>
</template>

<script>
export default {
  name: 'Loading'
}
</script>

<style scoped>
.loading {
  color: #f8f9fa;
  text-align: center;
  margin: 0;
  position: absolute;
  top: 50%;
  left: calc(50% - 25px);
}
</style>