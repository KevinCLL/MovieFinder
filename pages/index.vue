<script>
export default {
  data() {
    return {
      movie: {},
    }
  },
  methods: {
    handleUpdate(movie) {
      this.movie = movie
    },
  },
}
</script>

<template>
  <div class="container">
    <Searchbox @update="handleUpdate" />
  </div>
</template>

<style scoped>
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
