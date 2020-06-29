<template>
  <b-form-group
    class="my-auto"
    label-for="dropdown-form-searchbar" 
    @submit.stop.prevent
  >
    <b-form-input
      id="dropdown-form-searchbar"
      @input="(value) => handleSearch(value.trim())"
      placeholder="Search"
      size="sm"
      type="text"
      :value="value"
    ></b-form-input>
  </b-form-group>
</template>

<script>
export default {
  name: 'SearchBar',
  computed: {
    value() {
      return this.$store.state.searchQuery
    }
  },
  methods: {
    handleSearch(queryStr) {
      const payload = { type: 'search', selection: queryStr }
      this.$store.dispatch('handleSearch', payload)
    }
  }
}
</script>

<style scoped>

</style>