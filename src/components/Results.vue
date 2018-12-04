<template>
  <div class="results row">
    <div class="col">
      <h2>SONG RESULTS: {{results.length}}</h2>
    </div>
    <div class="row">
      <result v-for="(res, i) in results" class="col-12" :setActiveS="setActive" :class="{active: res.id == previewedSong}"
        :songData="res" :index="i">
      </result>
    </div>
  </div>
</template>

<script>
  import Result from '@/components/Result.vue'
  export default {
    name: 'results',
    data() {
      return {
        previewedSong: ''
      }
    },
    methods: {
      setActive(song) {
        this.previewedSong = song.id
      }
    },
    computed: {
      results() {
        return this.$store.state.searchResults
      }
    },
    components: {
      Result
    }
  }
</script>

<style>
  .results {
    background: lightblue;
  }

  .active {
    border: 1px solid yellow
  }
</style>