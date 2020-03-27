<template>
  <b-nav-item-dropdown :text="userInfo.name" right>
    <b-dropdown-form class="signout">
      <b-dropdown-item-button disabled>
        Settings
      </b-dropdown-item-button>
      <b-dropdown-item-button>
        Sign Out
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