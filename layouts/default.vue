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
</style>
