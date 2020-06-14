<template>
  <b-nav-item-dropdown :text="userInfo.name" right>
    <b-dropdown-form class="signout">
      <b-dropdown-item-button disabled>
        Settings
      </b-dropdown-item-button>
      <b-dropdown-item-button @click="handleSignout">
        Sign Out
      </b-dropdown-item-button>
    </b-dropdown-form>
  </b-nav-item-dropdown>
</template>

<script>
export default {
  name: 'UserOptions',
  computed: {
    userInfo() {
      return this.$store.state.userInfo
    }
  },
  methods: {
    handleSignout() {
      this.$store.commit('signOutUser')
    }
  }
}
</script>

<style scoped>

</style>