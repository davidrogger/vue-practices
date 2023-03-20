<script>
  import { RouterLink, RouterView } from 'vue-router'
  export default {
    name: 'NavBar'
  }
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/orders">About</RouterLink>
  </nav>
</template>