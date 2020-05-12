<template>
  <iframe 
    v-if="link.length" 
    allowfullscreen
    class="trailer-video" 
    frameborder="0" 
    height="220" 
    :src="link" 
    width="100%" 
  ></iframe>
  <b-card-text v-else class="no-trailer">Trailer Not Available</b-card-text>
</template>

<script>
export default {
  name: 'Trailer',
  props: ['link'],
}
</script>

<style scoped>
.trailer-video {
  box-shadow: 10px 10px 10px 0px rgba(0,0,0,.75);
}
.no-trailer {
  border: .5px solid grey;
  box-shadow: 10px 10px 10px 0px rgba(0,0,0,.75);
  display: flex;
  justify-content: center;
  padding: 98px 0;
}
</style>