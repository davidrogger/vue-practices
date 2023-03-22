<script>
  import { RouterLink, RouterView } from 'vue-router'
  export default {
    name: 'NavBar',
    props: ["navLogoImg", "navDescriptionImg"]
  }
</script>

<template>
  <nav>
    <RouterLink to="/">
      <img :src="navLogoImg" :alt="navDescriptionImg">
    </RouterLink>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/orders">Orders</RouterLink>
  </nav>
</template>

<style>
  nav {
    align-items: center;
    background: var(--primary-dark-color);
    display: flex;
    justify-content: flex-end;
    padding: 15px 50px;
  }

  nav:first-child a:first-of-type {
    margin: auto;
    margin-left: 0;
  }

  nav:first-child img {
    width: 40px;
    height: 40px;
  }

  nav a {
    color: var(--primary-accent-color);
    text-decoration: none;
    margin: 12px;
    transition: 0.5s;
  }

  nav a:hover {
    color: var(--secondary-accent-color);
  }

</style>