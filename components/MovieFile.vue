<script>
export default {
  name: 'MovieFile',
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
    movieInfo() {
      const infoWantedAndSorted = [
        ['Title', this.movie.Title],
        ['Released', this.movie.Released],
        ['Director', this.movie.Director],
        ['Production', this.movie.Production],
        ['Writer', this.movie.Writer],
        ['Actors', this.movie.Actors],
        ['Country', this.movie.Country],
        ['Language', this.movie.Language],
        ['Genre', this.movie.Genre],
        ['Rated', this.movie.Rated],
        ['Awards', this.movie.Awards],
        ['BoxOffice', this.movie.BoxOffice],
        ['Plot', this.movie.Plot],
      ]
      return infoWantedAndSorted.filter((item) => this.itemExists(item[1]))
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
    class="flex w-full p-10 bg-gray-200 relative"
    :class="{ 'flex-col-reverse': screenSize < 763 }"
  >
    <div
      id="movieclose"
      class="cursor-pointer h-icon w-icon absolute right-0 top-0 mt-1 text-xl"
      @click="$emit('close')"
    >
      ✖
    </div>
    <dl>
      <template v-for="item in movieInfo">
        <dt :key="`${item[0]}-t`">{{ item[0] }}:</dt>
        <dd :key="`${item[0]}-d`">{{ item[1] }}</dd>
      </template>
    </dl>
    <div class="flex flex-col min-w-1/4">
      <div v-if="itemExists(movie.Poster)" class="my-0 mx-auto">
        <img :src="movie.Poster" :alt="movie.Title" />
      </div>
      <div v-if="movie.Ratings && movie.Ratings.length > 0">
        <div v-for="rating in movie.Ratings" :key="rating.Source">
          {{ rating.Source }} : {{ rating.Value }}
        </div>
      </div>
      <div
        v-if="itemExists(movie.imdbID)"
        class="cursor-pointer bg-yellow-400 mb-4 text-center"
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
