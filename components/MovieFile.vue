<script>
export default {
  props: {
    movie: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    screenSize() {
      return this.$store.state.windowWidth
    },
  },
  methods: {
    itemExists(item) {
      return item && item !== 'N/A'
    },
  },
}
</script>

<template>
  <div
    class="flex w-full p-8 bg-gray-200"
    :class="{ 'flex-col-reverse': screenSize < 737 }"
  >
    <dl>
      <dt>Title:</dt>
      <dd>{{ movie.Title }}</dd>
      <dt v-if="itemExists(movie.Released)">Released:</dt>
      <dd v-if="itemExists(movie.Released)">{{ movie.Released }}</dd>
      <dt v-if="itemExists(movie.Director)">Director:</dt>
      <dd v-if="itemExists(movie.Director)">{{ movie.Director }}</dd>
      <dt v-if="itemExists(movie.Production)">Production:</dt>
      <dd v-if="itemExists(movie.Production)">{{ movie.Production }}</dd>
      <dt v-if="itemExists(movie.Writer)">Writer:</dt>
      <dd v-if="itemExists(movie.Writer)">{{ movie.Writer }}</dd>
      <dt v-if="itemExists(movie.Actors)">Actors:</dt>
      <dd v-if="itemExists(movie.Actors)">{{ movie.Actors }}</dd>
      <dt v-if="itemExists(movie.Country)">Country:</dt>
      <dd v-if="itemExists(movie.Country)">{{ movie.Country }}</dd>
      <dt v-if="itemExists(movie.Language)">Language:</dt>
      <dd v-if="itemExists(movie.Language)">{{ movie.Language }}</dd>
      <dt v-if="itemExists(movie.Genre)">Genre:</dt>
      <dd v-if="itemExists(movie.Genre)">{{ movie.Genre }}</dd>
      <dt v-if="itemExists(movie.Rated)">Rated:</dt>
      <dd v-if="itemExists(movie.Rated)">{{ movie.Rated }}</dd>
      <dt v-if="itemExists(movie.Awards)">Awards:</dt>
      <dd v-if="itemExists(movie.Awards)">{{ movie.Awards }}</dd>
      <dt v-if="itemExists(movie.BoxOffice)">BoxOffice:</dt>
      <dd v-if="itemExists(movie.BoxOffice)">{{ movie.BoxOffice }}</dd>
      <dt v-if="itemExists(movie.Plot)">Plot:</dt>
      <dd v-if="itemExists(movie.Plot)">{{ movie.Plot }}</dd>
    </dl>
    <div class="flex flex-col min-w-1/4">
      <div v-if="itemExists(movie.Poster)" class="my-0 mx-auto">
        <img :src="movie.Poster" :alt="movie.Title" />
      </div>
      <div v-if="movie.Ratings.length > 0">
        <div v-for="rating in movie.Ratings" :key="rating.Source">
          {{ rating.Source }} : {{ rating.Value }}
        </div>
      </div>
      <div
        v-if="itemExists(movie.imdbID)"
        class="cursor-pointer bg-yellow-400 mb-4"
      >
        <a :href="`https://www.imdb.com/title/${movie.imdbID}`" target="_blank">
          View IMDB
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
dl {
  width: 100%;
  overflow: hidden;
  padding: 0;
  padding-right: 10px;
  margin: 0;
}
dt {
  font-weight: bold;
  float: left;
  text-align: right;
  width: 90px;
  padding-right: 10px;
  margin: 0;
}
dd {
  float: left;
  text-align: left;
  width: 80%;
  padding: 0;
  margin: 0;
}
@media (max-width: 540px) {
  dt {
    text-align: left;
    width: 100%;
  }
  dd {
    width: 100%;
  }
}
</style>
