<template>
  <b-form-group
    class="my-auto"
    label-for="dropdown-form-searchbar" 
    @submit.stop.prevent
  >
    <b-form-input
      id="dropdown-form-searchbar"
      @input="(value) => this.$emit('change', value.trim())"
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
  props: ['value']
}
</script>

<style scoped>

</style>