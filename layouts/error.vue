<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
  mounted() {
    if (this.error.statusCode === 404) {
      const video = this.$refs.videoMeme
      video.volume = 0.2
    }
  },
  head() {
    return {
      title: "Movie Finder - Looks like it didn't find it",
      meta: [
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex,nofollow',
        },
      ],
    }
  },
}
</script>

<template>
  <div class="my-5 mx-auto flex flex-col justify-around max-w-screen-lg">
    <div class="container">
      <div v-if="error.statusCode === 404">
        <video
          ref="videoMeme"
          controls
          src="~/assets/media/404.mp4"
          class="mb-8"
        ></video>
      </div>
      <div v-else class="mb-8">An error occurred: {{ error }}</div>
    </div>
  </div>
</template>
