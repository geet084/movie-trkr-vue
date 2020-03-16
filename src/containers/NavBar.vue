<template>
  <b-navbar class="fixed-top" toggleable="sm" type="dark" variant="dark">
    <!-- WEBSITE NAME / BRAND -->
    <b-navbar-brand>Movie Tracker</b-navbar-brand>
    <!-- TOGGLES HAMBUGER MENU -->
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <!-- RIGHT SIDE NAV BAR ELEMENTS -->
      <b-navbar-nav class="ml-auto" type="dark" variant="dark">
        
        <!-- CATEGORIES DROPDOWN MENU -->
        <b-nav-item-dropdown class="ml-auto" text="Categories" type="dark" variant="dark">  
          <b-dropdown-item active>Popular</b-dropdown-item>
          <b-dropdown-item>Newest</b-dropdown-item>
        </b-nav-item-dropdown>

        <!-- NAVBAR LINKS -->
        <b-nav-item>Favorites</b-nav-item>
        <b-nav-item>Login</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
.nav-item {
  text-align: right;
}
</style>