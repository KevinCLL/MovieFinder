<script>
export default {
  props: {
    movie: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<template>
  <div class="flex w-full p-8 bg-gray-200">
    <dl class="description-list">
      <dt>Title:</dt>
      <dd>{{ movie.Title }}</dd>
      <dt>Released:</dt>
      <dd>{{ movie.Released }}</dd>
      <dt>Director:</dt>
      <dd>{{ movie.Director }}</dd>
      <dt>Production:</dt>
      <dd>{{ movie.Production }}</dd>
      <dt>Writer:</dt>
      <dd>{{ movie.Writer }}</dd>
      <dt>Actors:</dt>
      <dd>{{ movie.Actors }}</dd>
      <dt>Country:</dt>
      <dd>{{ movie.Country }}</dd>
      <dt>Language:</dt>
      <dd>{{ movie.Language }}</dd>
      <dt>Genre:</dt>
      <dd>{{ movie.Genre }}</dd>
      <dt>Rated:</dt>
      <dd>{{ movie.Rated }}</dd>
      <dt>Awards:</dt>
      <dd>{{ movie.Awards }}</dd>
      <dt>BoxOffice:</dt>
      <dd>{{ movie.BoxOffice }}</dd>
      <dt>Plot:</dt>
      <dd>{{ movie.Plot }}</dd>
    </dl>
    <div class="flex flex-col min-w-1/4">
      <div v-if="movie.Poster !== 'N/A'" class="poster">
        <img :src="movie.Poster" :alt="movie.Title" />
      </div>
      <div>
        Ratings:
        <div v-for="rating in movie.Ratings" :key="rating.Source">
          {{ rating.Source }} : {{ rating.Value }}
        </div>
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
