<script>
export default {
  props: {
    movie: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    isNA(item) {
      return item !== 'N/A'
    },
  },
}
</script>

<template>
  <div class="flex w-full p-8 bg-gray-200">
    <dl class="description-list">
      <dt>Title:</dt>
      <dd>{{ movie.Title }}</dd>
      <dt v-if="isNA(movie.Released)">Released:</dt>
      <dd v-if="isNA(movie.Released)">{{ movie.Released }}</dd>
      <dt v-if="isNA(movie.Director)">Director:</dt>
      <dd v-if="isNA(movie.Director)">{{ movie.Director }}</dd>
      <dt v-if="isNA(movie.Production)">Production:</dt>
      <dd v-if="isNA(movie.Production)">{{ movie.Production }}</dd>
      <dt v-if="isNA(movie.Writer)">Writer:</dt>
      <dd v-if="isNA(movie.Writer)">{{ movie.Writer }}</dd>
      <dt v-if="isNA(movie.Actors)">Actors:</dt>
      <dd v-if="isNA(movie.Actors)">{{ movie.Actors }}</dd>
      <dt v-if="isNA(movie.Country)">Country:</dt>
      <dd v-if="isNA(movie.Country)">{{ movie.Country }}</dd>
      <dt v-if="isNA(movie.Language)">Language:</dt>
      <dd v-if="isNA(movie.Language)">{{ movie.Language }}</dd>
      <dt v-if="isNA(movie.Genre)">Genre:</dt>
      <dd v-if="isNA(movie.Genre)">{{ movie.Genre }}</dd>
      <dt v-if="isNA(movie.Rated)">Rated:</dt>
      <dd v-if="isNA(movie.Rated)">{{ movie.Rated }}</dd>
      <dt v-if="isNA(movie.Awards)">Awards:</dt>
      <dd v-if="isNA(movie.Awards)">{{ movie.Awards }}</dd>
      <dt v-if="isNA(movie.BoxOffice)">BoxOffice:</dt>
      <dd v-if="isNA(movie.BoxOffice)">{{ movie.BoxOffice }}</dd>
      <dt v-if="isNA(movie.Plot)">Plot:</dt>
      <dd v-if="isNA(movie.Plot)">{{ movie.Plot }}</dd>
    </dl>
    <div class="flex flex-col min-w-1/4">
      <div v-if="isNA(movie.Poster)" class="poster">
        <img :src="movie.Poster" :alt="movie.Title" />
      </div>
      <div v-if="movie.Ratings.length > 0">
        Ratings:
        <div v-for="rating in movie.Ratings" :key="rating.Source">
          {{ rating.Source }} : {{ rating.Value }}
        </div>
      </div>
      <div v-if="isNA(movie.imdbID)" class="cursor-pointer bg-yellow-400">
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
</style>
