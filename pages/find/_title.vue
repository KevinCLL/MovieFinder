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
  methods: {
    reInit() {
      this.$nextTick(() => {
        this.$refs.slick.reSlick()
      })
    },
  },
}
</script>

<template>
  <div class="flex">
    <div>
      <Logo />
      <carousel :per-page="3">
        <slide v-for="movie in movies.Search" :key="movie.imdbID">
          <Movie :movie="movie" />
        </slide>
      </carousel>
    </div>
  </div>
</template>

<style scoped>
.movie-grid {
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: 100%;
  }
}
</style>
