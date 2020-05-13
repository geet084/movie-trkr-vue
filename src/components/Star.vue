<template>
  <span
    v-if="userInfo.name"
    class="star"
    :class="{ starred: isStarred }"
    @click.stop="toggleStarred"
  >★</span>
</template>

<script>
export default {
  name: 'Star'
}
</script>

<style scoped>

</style>