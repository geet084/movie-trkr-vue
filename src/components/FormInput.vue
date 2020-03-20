<template>
  <b-form-group 
    :label="name" 
    :label-for="'dropdown-form-' + name.toLowerCase()" 
    @submit.stop.prevent
  >
    <b-form-input
      :id="'dropdown-form-' + name.toLowerCase()"
      size="sm"
      :placeholder="placeholder"
    ></b-form-input>
  </b-form-group>
</template>

<script>
export default {
  name: 'FormInput',
  props: ['name', 'placeholder']
}
</script>

<style scoped>

</style>