<template>
  <div class="preview row">
    <div class="col">
      <h2>Track Name:</h2>
    </div>
    <div v-if="song.trackName" class="row">
      <div class="col-12 font">
        <img src="https://images-na.ssl-images-amazon.com/images/I/51Ib3jYSStL._SX425_.jpg">
        <p>{{song.trackName}}</p>
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
    font-size: 30px;
    justify-content: space-around
  }
</style>