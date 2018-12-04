<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col">
        <h1 class="titles">Welcome To MUSIC IS FUN VUE!</h1>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <p>Searching for: {{query}}</p>
        <form @submit.prevent="search">
          <input type="text" placeholder="Search" v-model='query'>
          <button type="submit">Search Songs</button>
        </form>
      </div>
    </div>
    <div class="row justify-content-around mt-5">
      <div class="col-6">
        <results></results>
      </div>
      <div class="col-6">
        <preview></preview>
      </div>
    </div>
  </div>
</template>

<script>
  import Results from '@/components/Results.vue'
  import Preview from '@/components/Preview.vue'

  export default {
    name: 'home',
    data() {
      return {
        query: ''
      }
    },
    computed: {
      results() {
        return this.$store.state.searchResults
      }
    },
    methods: {
      search() {
        this.$store.dispatch('search', this.query)
      }
    },
    components: {
      Results,
      Preview
    }
  }
</script>

<style>
  .home {
    background-color: silver;
  }

  .titles {
    text-align: center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

  }
</style>