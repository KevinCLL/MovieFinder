<script>
export default {
  data() {
    return {
      movie: {},
    }
  },
  transition: {
    name: 'test',
    mode: 'out-in',
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
    <div>
      <Searchbox @update="handleUpdate" />
    </div>
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
