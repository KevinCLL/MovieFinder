<template>
  <div>
    <div
      class="content my-5 mx-auto flex flex-col justify-around max-w-screen-lg"
    >
      <Logo />
      <Searchbox />
      <Nuxt />
    </div>
    <div class="seats-footer" />
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

.content {
  min-height: calc(100vh - 300px);
}

.seats-footer {
  background: url('../assets/img/seats.png');
  background-size: cover;
  height: 300px;
  width: 100%;
}

body {
  background: url('../assets/img/whitenoise.png');
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
