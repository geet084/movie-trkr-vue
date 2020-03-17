<template>
  <header>
    <b-navbar class="fixed-top" toggleable="sm" type="dark" variant="dark">
      <!-- WEBSITE NAME / BRAND -->
      <b-navbar-brand>Movie Tracker</b-navbar-brand>
      <!-- TOGGLES HAMBUGER MENU -->
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- RIGHT SIDE NAV BAR ELEMENTS -->
        <b-navbar-nav class="ml-auto" type="dark" variant="dark">
          
          <!-- CATEGORIES DROPDOWN MENU -->
          <b-nav-item-dropdown class="ml-auto" :text="'Category: ' + activeCategory " type="dark" variant="dark">  

            <b-dropdown-item 
              v-for="category in this.categories"
              :key="category"
              :name="category.toLowerCase().split(' ').join('_')"
              :active="activeCategory===category.toLowerCase().split(' ').join('_')"
              @click="updateCategory"
            >
              {{category}}
            </b-dropdown-item>
          </b-nav-item-dropdown>

          <!-- NAVBAR LINKS -->
          <b-nav-item>Favorites</b-nav-item>
          <b-nav-item>Login</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      categories: ['Now Playing', 'Popular', 'Top Rated', 'Upcoming'],
      activeCategory: 'Now Playing'
    }
  },
  methods: {
    updateCategory: function({ target }) {
      this.activeCategory = target.innerText
      this.$emit('clicked', target.name)
    }
  }
}
</script>

<style scoped>
.nav-item {
  text-align: right;
}
</style>