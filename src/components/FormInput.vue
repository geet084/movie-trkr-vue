<template>
  <b-form-group 
    :label="name" 
    :label-for="'dropdown-form-' + name.toLowerCase()" 
    @submit.stop.prevent
  >
    <b-form-input
      :class="errorMsg ? 'showError' : ''"
      :id="'dropdown-form-' + name.toLowerCase()"
      @input="handleChange"
      :placeholder="placeholder"
      size="sm"
      :type="name.toLowerCase() === 'password' ? 'password' : 'text'"
      :value="value"
    ></b-form-input>
    <span v-if="errorMsg" class="error-message">{{errorMsg}}</span>
  </b-form-group>
</template>

<script>
export default {
  name: 'FormInput',
  props: ['errorMsg', 'name', 'placeholder', 'value'],
  methods: {
    handleChange(value) {
      const target = { name: this.name.toLowerCase(), value }
      this.$emit('change', target)
      this.$emit('resetError', this.name.toLowerCase())
    }
  }
}
</script>

<style scoped>
.showError {
  border: 2px solid red;
}
.error-message {
  color: red;
  padding: 2px 0 0 2px;
}

</style>