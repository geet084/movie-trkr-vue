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
          <NavDropdown
            :categories="categories"
            :activeCategory="activeCategory"
            @clicked="updateCategory"
          />

          <!-- NAVBAR LINKS -->
          <b-nav-item @click="toggleFavorites">Favorites</b-nav-item>
          
          <!-- NAVBAR LOGIN/SIGNUP & UserOptions DROPDOWN -->
          <UserOptions 
            v-if="userInfo.name.length"
            :userInfo="userInfo"
            @signOutUser="signOutUser"
          />
          <LoginSignup
            v-else
            :userInfo="userInfo"
            @userData="userData"
          />
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
import NavDropdown from '../components/NavDropdown.vue'
import UserOptions from './UserOptions.vue'
import LoginSignup from './LoginSignup.vue'

export default {
  name: 'NavBar',
  components: {
    NavDropdown,
    UserOptions,
    LoginSignup
  },
  props: ['userInfo'],
  data() {
    return {
      categories: ['Now Playing', 'Popular', 'Top Rated', 'Upcoming'],
      activeCategory: 'Now Playing'
    }
  },
  methods: {
    updateCategory({ target }) {
      this.activeCategory = target.innerText
      this.$emit('clicked', target.name)
    },
    userData(user) {
      this.$emit('userData', user)
    },
    signOutUser() {
      this.$emit('signOutUser')
    },
    toggleFavorites() {
      this.$emit('toggleFavorites')
    }
  }
}
</script>

<style scoped>
.nav-item {
  text-align: right;
}
</style>