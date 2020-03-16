<template>
  <div id="app">
    <NavBar />
  </div>
</template>

<script>
import NavBar from './containers/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
#app {
  background-color: #000;
}
</style>
