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
        plot: 'full',
      },
    })
    this.expandedMovie = expandedMovie
  },
}
</script>

<template>
  <div
    class="flex flex-col items-center w-full p-3 h-full"
    @click="$emit('movie-select', expandedMovie)"
  >
    <div class="border bg-white p-2 h-full">
      <div class="mb-2 flex items-center">
        <img
          class="h-100"
          :src="
            movie.Poster !== 'N/A'
              ? movie.Poster
              : 'https://i.pinimg.com/originals/c2/d1/e8/c2d1e8ba4e5b23bbad9bf78b695da39a.jpg'
          "
          :alt="movie.Title"
        />
      </div>
      <div>
        <h2 class="text-2xl">
          <span class="bold">{{ `${movie.Title}` }}</span>
          <span
            v-if="expandedMovie.Director && expandedMovie.Director !== 'N/A'"
            class="italic"
            >{{ `by ${expandedMovie.Director}` }}</span
          >
          <span class="text-xl">{{ ` - ${movie.Year}` }}</span>
        </h2>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
