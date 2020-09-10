<script>
export default {
  props: ['error'],
  mounted() {
    if (this.error.statusCode === 404) {
      const video = this.$refs.videoMeme
      video.volume = 0.2
    }
  },
}
</script>

<template>
  <div class="my-5 mx-auto flex flex-col justify-around max-w-screen-lg">
    <div class="container">
      <h1 v-if="error.statusCode === 404">
        <video
          ref="videoMeme"
          controls
          src="~/assets/media/404.mp4"
          class="mb-8"
        ></video>
      </h1>
      <h1 v-else>An error occurred: {{ error }}</h1>
      <nuxt-link to="/">
        <button
          class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Return to home
        </button>
      </nuxt-link>
    </div>
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  background: url('../assets/img/whitenoise.png');
  text-align: center;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
