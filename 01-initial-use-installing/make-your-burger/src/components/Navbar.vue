<script>
  import { RouterLink, RouterView } from 'vue-router'
  export default {
    name: 'NavBar'
  }
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>
</template>