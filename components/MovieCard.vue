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
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.$axios
        .$get('https://www.omdbapi.com/', {
          params: {
            apikey: '89fef3ea',
            i: this.movie.imdbID,
            plot: 'full',
          },
        })
        .then((expandedMovie) => (this.expandedMovie = expandedMovie))
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.error(error)
        })
    },
  },
}
</script>

<template>
  <div class="flex flex-col items-center w-full p-3 h-full">
    <div class="border bg-white p-2 h-moviecard w-moviecard relative">
      <div v-if="movie.Poster !== 'N/A'" class="mb-2 flex h-poster">
        <img
          class="h-100 my-0 mx-auto"
          :src="movie.Poster"
          :alt="movie.Title"
        />
      </div>
      <div
        v-else
        class="mb-2 flex items-center h-poster bg-gradient-to-tr from-blue-700 to-blue-900 flex"
      >
        <p class="text-3xl text-white my-0 mx-auto">Poster not found</p>
      </div>
      <div class="h-5 text-center">
        <h2>
          <span class="text-2xl">{{ `${movie.Title}` }}</span>
          <span
            v-if="expandedMovie && expandedMovie.Director !== 'N/A'"
            class="italic text-xl"
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
