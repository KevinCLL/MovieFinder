<script>
export default {
  name: 'Logo',
}
</script>

<template>
  <div class="m-6 mb-12 text-center">
    <h1 class="mb-3">
      <nuxt-link to="/">
        <img class="logo" src="~/assets/img/logo.png" alt="MovieFinder" />
      </nuxt-link>
    </h1>
    <h2 class="text-xl lg:text-3xl italic">
      Not <span class="text-red-700">the best movie finder</span>, but maybe
      it's good enough.
    </h2>
  </div>
</template>

<style>
.logo {
  animation: 1s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  50% {
    transform: scale(1.5);
  }
  to {
    transform: scale(1);
  }
}
</style>
