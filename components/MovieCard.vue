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
      expandedMovie: null,
      posterNotFound:
        'https://i.pinimg.com/originals/c2/d1/e8/c2d1e8ba4e5b23bbad9bf78b695da39a.jpg',
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
  <div class="flex flex-col items-center w-full p-3 h-full">
    <div class="border bg-white p-2 h-moviecard relative">
      <div
        v-if="movie.Poster !== 'N/A'"
        class="mb-2 flex items-center h-poster"
      >
        <img class="h-100" :src="movie.Poster" :alt="movie.Title" />
      </div>
      <div
        v-else
        class="mb-2 flex items-center h-poster bg-gradient-to-tr from-blue-500 to-indigo-700 flex"
      >
        <p class="text-3xl text-white ml-10">Poster not found</p>
      </div>
      <div class="h-5">
        <h2 class="text-2xl">
          <span class="bold">{{ `${movie.Title}` }}</span>
          <span
            v-if="expandedMovie && expandedMovie.Director !== 'N/A'"
            class="italic"
          >
            {{ `by ${expandedMovie.Director}` }}
          </span>
        </h2>
        <h3 class="text-xl">
          {{ movie.Year }}
        </h3>
      </div>
      <img
        class="cursor-pointer h-icon w-icon absolute right-0 bottom-0 m-3"
        src="~/assets/img/magnifying_glass_icon.png"
        alt="magnifying glass"
        @click="$emit('movie-select', expandedMovie)"
      />
    </div>
  </div>
</template>

<style scoped></style>
