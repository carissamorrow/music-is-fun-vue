<template>
  <div class="result">
    <h4 @click="setActive">{{index+1}}. {{songData.title}} - {{songData.artist}}</h4>
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
        // this.$emit('imActive', this.songData)
        this.setActiveS(this.songData)
        this.$store.dispatch('setActiveSong', this.songData)
      },
    }
  }
</script>

<style>
</style>