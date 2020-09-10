<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
  components: { Carousel, Slide },
  async asyncData({ $axios, params }) {
    const results = await $axios.$get('http://www.omdbapi.com/', {
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
  methods: {
    changeSelectedMovie(movie) {
      this.selectedMovie = movie
      this.$scrollTo('#expanded')
    },
  },
}
</script>

<template>
  <div class="flex flex-col">
    <carousel :per-page="3">
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
