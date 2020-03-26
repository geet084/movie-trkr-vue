<template>
  <b-nav-item-dropdown
    :text="userInfo.name ? userInfo.name : 'Login'"
    right
  >
    <b-dropdown-form class="signout">
      <b-dropdown-item-button>
        Settings
      </b-dropdown-item-button>
      <b-dropdown-item-button>
        Sign Out {{userInfo.name}}
      </b-dropdown-item-button>
    </b-dropdown-form>
  </b-nav-item-dropdown>
</template>

<script>
export default {
  name: 'UserOptions',
  props: ['userInfo']
}
</script>

<style scoped>

</style>