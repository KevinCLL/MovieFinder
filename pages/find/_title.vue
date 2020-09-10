<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
  components: { Carousel, Slide },
  async asyncData({ $axios, params }) {
    const results = await $axios.$get('https://www.omdbapi.com/', {
      params: {
        apikey: '89fef3ea',
        s: params.title,
      },
    })
    return { movies: results }
  },
  data() {
    return {
      selectedMovie: null,
    }
  },
  computed: {
    screenSize() {
      return this.$store.state.screenSize
    },
    cardsPerPage() {
      return this.screenSize === 'large'
        ? 3
        : this.screenSize === 'medium'
        ? 2
        : 1
    },
  },
  methods: {
    changeSelectedMovie(movie) {
      this.selectedMovie = movie
      this.$scrollTo('#expanded')
    },
  },
}
</script>

<template>
  <div v-if="!movies.Search || movies.Search.length < 0" class="flex flex-col">
    Nothing found
  </div>
  <div v-else class="flex flex-col">
    <carousel :per-page="cardsPerPage">
      <slide v-for="movie in movies.Search" :key="movie.imdbID">
        <movie-card
          :movie="movie"
          @movie-select="(expandedmovie) => changeSelectedMovie(expandedmovie)"
        />
      </slide>
    </carousel>
    <div id="expanded" class="my-10">
      <movie-file v-if="selectedMovie" :movie="selectedMovie" />
    </div>
  </div>
</template>

<style scoped></style>
