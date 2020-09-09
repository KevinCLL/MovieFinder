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
  <transition name="test" mode="out-in">
    <div class="container">
      <div>
        <Searchbox @update="handleUpdate" />
      </div>
    </div>
  </transition>
</template>

<style scoped>
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
