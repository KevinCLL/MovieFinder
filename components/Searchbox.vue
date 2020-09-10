<script>
export default {
  data() {
    return {
      message: '',
    }
  },
  computed: {
    placeholder() {
      return this.$route.path === '/'
        ? 'Find me a movie'
        : 'Find me another movie'
    },
  },
  methods: {
    handleClick() {
      this.$router.push({
        path: `/find/${this.message}`,
      })
    },
  },
}
</script>

<template>
  <div class="w-full mb-6">
    <input
      v-model="message"
      class="shadow border border-red-500 rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      :placeholder="placeholder"
      @keyup.enter="handleClick"
    />
    <button
      class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      :disabled="message === ''"
      @click="handleClick"
    >
      Go!
    </button>
  </div>
</template>
