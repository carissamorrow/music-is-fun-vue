<template>
  <div class="preview row">
    <div class="col">
      <h2>Track Info:</h2>
    </div>
    <div v-if="song.trackName" class="row">
      <div class="col-12 font">
        <p>{{song.trackName}}</p>
        <p>{{song.collectionName}}</p>
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
    background: lightskyblue;
    font-style: italic;
  }

  .font {
    font-size: 40px;

  }
</style>