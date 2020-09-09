<script>
export default {
  data() {
    return {
      message: '',
    }
  },
  methods: {
    hangleChange() {
      this.$router.push({
        path: `/find/${this.message}`,
      })
    },
  },
}
</script>

<template>
  <div>
    <input
      v-model="message"
      class="shadow border border-red-500 rounded w-500 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      placeholder="Find a movie"
      @change="hangleChange"
    />
  </div>
</template>
