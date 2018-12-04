<template>
  <div class="result">
    <h4 @click="setActive">{{index+1}}. {{songData.trackName}} - {{songData.artistName}}</h4>
  </div>
</template>

<script>
  export default {
    name: 'result',
    props: ['songData', 'index', 'setActiveS'],
    data() {
      return {
      }
    },
    computed: {},

    methods: {
      setActive() {
        this.setActiveS(this.songData)
        this.$store.dispatch('setActiveSong', this.songData)
      },
    }
  }
</script>

<style>
</style>