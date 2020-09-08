<script>
export default {
  props: {
    movie: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      expandedMovie: {},
    }
  },
  async mounted() {
    const expandedMovie = await this.$axios.$get('http://www.omdbapi.com/', {
      params: {
        apikey: '89fef3ea',
        i: this.movie.imdbID,
      },
    })
    this.expandedMovie = expandedMovie
  },
}
</script>

<template>
  <div class="flex flex-col items-center w-full p-3">
    <div v-if="movie.Poster !== 'N/A'" class="poster">
      <img :src="movie.Poster" :alt="movie.Title" />
    </div>
    <div class="title">
      {{ `${movie.Title} by ${expandedMovie.Director} - ${movie.Year}` }}
    </div>
  </div>
</template>

<style scoped></style>
