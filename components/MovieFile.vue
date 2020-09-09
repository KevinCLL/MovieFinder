<script>
export default {
  props: {
    movie: {
      type: Object,
      default: () => {},
    },
  },
  mounted() {
    console.log('carga')
  },
}
</script>

<template>
  <div class="flex w-full p-3 bg-gray-200">
    <div class="flex flex-col">
      <div class="flex flex-col items-start p-5">
        <div>Actors: {{ movie.Actors }}</div>
        <div>Awards: {{ movie.Awards }}</div>
        <div>BoxOffice: {{ movie.BoxOffice }}</div>
        <div>Country: {{ movie.Country }}</div>
        <div>Genre: {{ movie.Genre }}</div>
        <div>Language: {{ movie.Language }}</div>
        <div>Metascore: {{ movie.Metascore }}</div>
        <div>Plot: {{ movie.Plot }}</div>
        <div>Production: {{ movie.Production }}</div>
        <div>Rated: {{ movie.Rated }}</div>
        <div>
          Ratings:
          <div v-for="rating in movie.Ratings" :key="rating.Source">
            {{ rating.Source }} : {{ rating.Value }}
          </div>
        </div>
        <div>Released: {{ movie.Released }}</div>
        <div>Writer: {{ movie.Writer }}</div>
      </div>
    </div>
    <div class="flex flex-col w-100 p-5">
      <div v-if="movie.Poster !== 'N/A'" class="poster">
        <img :src="movie.Poster" :alt="movie.Title" />
      </div>
      <div class="title">
        {{ `${movie.Title} [${movie.Director}] - ${movie.Year}` }}
      </div>
    </div>
  </div>
</template>

<style scoped></style>
