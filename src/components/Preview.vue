<template>
  <div class="preview row">
    <div class="col">
      <h2>Preview Song</h2>
    </div>
    <div v-if="song.id" class="row">
      <div class="col">
        <img :src="" alt="">
        <p>{{song.overview}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'preview',
    computed: {
      song() {
        return this.$store.state.activeSong
      }
    }
  }
</script>

<style>
  .preview {
    background: lightskyblue
  }
</style>