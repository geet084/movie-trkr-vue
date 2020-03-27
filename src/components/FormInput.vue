<template>
  <b-form-group 
    :label="name" 
    :label-for="'dropdown-form-' + name.toLowerCase()" 
    @submit.stop.prevent
  >
    <b-form-input
      :id="'dropdown-form-' + name.toLowerCase()"
      @input="handleChange"
      :placeholder="placeholder"
      size="sm"
      :type="name.toLowerCase() === 'password' ? 'password' : 'text'"
      :value="value"
    ></b-form-input>
  </b-form-group>
</template>

<script>
export default {
  name: 'FormInput',
  props: ['name', 'placeholder', 'value'],
  methods: {
    handleChange(value) {
      const target = { name: this.name.toLowerCase(), value }
      this.$emit('inputChange', target)
    }
  }
}
</script>

<style scoped>

</style>