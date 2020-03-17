<template>
  <b-nav-item-dropdown 
    class="ml-auto" 
    :text="'Category: ' + activeCategory " 
    type="dark" 
    variant="dark"
  >  
    <b-dropdown-item 
      v-for="category in categories"
      :key="category"
      :name="category.toLowerCase().split(' ').join('_')"
      :active="activeCategory===category.toLowerCase().split(' ').join('_')"
      @click="updateCategory"
    >
      {{category}}
    </b-dropdown-item>
  </b-nav-item-dropdown>
</template>

<script>
export default {
  name: 'NavDropdown',
  props: ['categories', 'activeCategory'],
  methods: {
    updateCategory: function(event) {
      this.$emit('clicked', event)
    }
  }
}
</script>

<style scoped>

</style>