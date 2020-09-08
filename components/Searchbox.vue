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
      placeholder="Find a movie"
      @change="hangleChange"
    />
  </div>
</template>
