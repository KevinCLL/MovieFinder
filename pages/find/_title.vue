<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
  components: { Carousel, Slide },
  async asyncData({ $axios, params }) {
    const results = await $axios
      .$get('https://www.omdbapi.com/', {
        params: {
          apikey: '89fef3ea',
          s: params.title,
        },
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error)
      })
    return { movies: results }
  },
  data() {
    return {
      selectedMovie: null,
      showDetails: false,
    }
  },
  computed: {
    screenSize() {
      return this.$store.state.screenSize
    },
    cardsPerPage() {
      let cards = 1
      const numberOfMovies = this.movies.Search.length
      if (this.screenSize === 'large')
        cards = numberOfMovies < 3 ? numberOfMovies : 3
      if (this.screenSize === 'medium') cards = numberOfMovies < 2 ? 1 : 2
      return cards
    },
  },
  methods: {
    changeSelectedMovie(movie) {
      this.selectedMovie = movie
      this.showDetails = true
      this.$scrollTo('#expanded')
    },
    closeDetails() {
      this.showDetails = false
    },
  },
  head() {
    return {
      title: `Movie Finder - ${
        !this.movies.Search || this.movies.Search.length === 0
          ? "Looks like it didn't find it"
          : this.$route.params.title
      }`,
      meta: [
        {
          hid: 'description',
          content: "Not the best movie finder, but maybe it's good enough.",
        },
      ],
    }
  },
}
</script>

<template>
  <div
    v-if="!movies.Search || movies.Search.length === 0"
    class="flex flex-col"
  >
    <p class="text-xl lg:text-3xl italic text-center">
      Sorry, but I have not found any movie with that name
    </p>
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
      <movie-file
        v-if="selectedMovie && showDetails"
        :movie="selectedMovie"
        @close="closeDetails"
      />
    </div>
    <div class="text-center w-full">
      <div
        class="inline cursor-pointer h-icon w-icon text-3xl text-white"
        @click="$scrollTo('html')"
      >
        ↑
      </div>
    </div>
  </div>
</template>
